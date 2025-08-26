import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const works = await prisma.our_works.findMany();
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

    const title_en = form.get("title_en") as string;
    const title_km = form.get("title_km") as string;
    const description_en = form.get("description_en") as string;
    const description_km = form.get("description_km") as string;
    const challenges_en = form.get("challenges_en") as string;
    const challenges_km = form.get("challenges_km") as string;
    const strategy_en = form.get("strategy_en") as string;
    const strategy_km = form.get("strategy_km") as string;
    const takeaway_en = form.get("takeaway_en") as string;
    const takeaway_km = form.get("takeaway_km") as string;
    const image = form.get("image") as File;

    if (
      !date ||
      !title_en ||
      !title_km ||
      !description_en ||
      !description_km ||
      !challenges_en ||
      !challenges_km ||
      !strategy_en ||
      !strategy_km ||
      !takeaway_en ||
      !takeaway_km ||
      !image
    ) {
      return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}_${image.name}`;
    const filepath = path.join(process.cwd(), "public", "uploads/works", filename);

    // Save file to /public/uploads
    await writeFile(filepath, buffer);

    const newWorks = await prisma.our_works.create({
      data: {
        date,
        title_en,
        title_km,
        description_en,
        description_km,
        challenges_en,
        challenges_km,
        strategy_en,
        strategy_km,
        takeaway_en,
        takeaway_km,
        image: `/uploads/works/${filename}`, 
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
