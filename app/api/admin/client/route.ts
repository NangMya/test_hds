
import prisma from "@/lib/db";
import { mkdir, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";


// GET all clients
export async function GET() {
  try {
    const clients = await prisma.clients.findMany();
    return NextResponse.json(clients);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch clients" },
      { status: 500 }
    );
  }
}

// POST a new client
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = form.get("name") as string;
    const logo = form.get("logo") as File;
    let filepath = "";
    if (typeof logo !== "string") {
      const now = new Date();
      const year = now.getFullYear().toString();
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const day = now.getDate().toString().padStart(2, "0");

      const byte = await logo.arrayBuffer();
      const buffer = Buffer.from(byte);
      const fileName = `${Date.now()}_${logo.name}`;
      const directoryPath = path.join(
        process.cwd(),
        "public",
        "uploads",
        "clients",
        year,
        month,
        day
      );

      await mkdir(directoryPath, { recursive: true });

      const pcFilePath = path.join(directoryPath, fileName);
      await writeFile(pcFilePath, buffer);

      filepath = `/uploads/info/${year}/${month}/${day}/${fileName}`;
    }

    const data = {
      name: name,
      logo: filepath,
      created_by: 1,
      updated_by: 1,
    };
    let newClient = await prisma.clients.create({
      data: data,
    });
    return NextResponse.json(newClient, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create client" },
      { status: 500 }
    );
  }
}
