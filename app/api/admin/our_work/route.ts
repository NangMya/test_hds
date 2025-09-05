import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const works = await prisma.our_works.findMany({
      include: {
        createdBy: {
          select: {
            name: true,
          }
        }
      }
    });
    return NextResponse.json(works);
  } catch (error) {
    return NextResponse.error();
  }
}


export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const dateStr = form.get("date") as string;
    const date = new Date(dateStr).toISOString();

    const title = form.get("title") as string;
    const description = form.get("description") as string;
    const challenges = form.get("challenges") as string;
    const strategy = form.get("strategy") as string;
    const takeaway = form.get("takeaway") as string;
    const image = form.get("image") as File;

    if (
      !date ||
      !title ||
      !description ||
      !challenges ||
      !strategy ||
      !takeaway ||
      !image
    ) {
      return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
    }
    const now = new Date();
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}_${image.name}`;
    const directoryPath = path.join(process.cwd(), "public", "uploads", "our_works", year, month, day);

    await mkdir(directoryPath, {recursive:true});
    const imagePath = `/uploads/our_works/${year}/${month}/${day}/${filename}`;
    const filePath = path.join(directoryPath,filename);
    // Save file to /public/uploads
    await writeFile(filePath, buffer);

    const newWorks = await prisma.our_works.create({
      data: {
        date,
        title,
        description,
        challenges,
        strategy,
        takeaway,
        image: imagePath,
        created_by: 1,
        updated_by: 1,
      },
    });

    return NextResponse.json(newWorks);
  } catch (error) {
    console.error("Error saving work:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
