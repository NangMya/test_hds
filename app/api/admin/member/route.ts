import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const members = await prisma.members.findMany();
    return NextResponse.json(members);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = form.get("name") as string;
    const position = form.get("position") as string;
    const department_id = form.get("department_id") as string;
    const profile = form.get("profile") as File;

    if (!name || !position || !department_id || !profile) {
      return NextResponse.json(
        { error: "All fields are required!" },
        { status: 400 }
      );
    }
    const now = new Date();
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");

    const bytes = await profile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}_${profile.name}`;
    const directoryPath = path.join(
      process.cwd(),
      "public",
      "uploads",
      "members",
      year,
      month,
      day
    );

    // Save file to /public/uploads
    const profilePath = `/uploads/info/${year}/${month}/${day}/${filename}`;
    const filePath = path.join(directoryPath, filename);
    await writeFile(filePath, buffer);

    const newWorks = await prisma.members.create({
      data: {
        name,
        position,
        department_id : Number(department_id),
        profile: profilePath,
        created_by: 1,
        updated_by: 1,
      },
    });

    return NextResponse.json(newWorks);
  } catch (error) {
    console.error("Error saving member:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
