import { unlink, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import prisma from "@/lib/db";
import { datePath } from "@/lib/helps";


export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const work = await prisma.our_works.findUnique({
      where: {
        id: Number(id)
      }
    })
    if (work) {
      return NextResponse.json(work);
    } else {
      return NextResponse.json({ error: "Work not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch work" }, { status: 500 });
  }
}


export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const form = await req.formData();

    const dateStr = form.get("date") as string;
    const date = new Date(dateStr).toISOString();

    const title = form.get("title") as string;
    const description = form.get("description") as string;
    const challenges = form.get("challenges") as string;
    const strategy = form.get("strategy") as string;
    const takeaway = form.get("takeaway") as string;
    const image = form.get("image") as File | null;

    if (!title || !description || !challenges || !strategy || !takeaway || !image) {
      return NextResponse.json(
        { error: "All fields are required!" },
        { status: 400 }
      );
    }


    const existingWork = await prisma.our_works.findUnique({
      where: { id: Number(id) },
    });

    if (!existingWork) {
      return NextResponse.json({ error: "Work not found" }, { status: 404 });
    }

    let imagePath = '';

    if (typeof image != 'string') {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}_${image.name}`;
      const dateDirectory = await datePath();
      const directoryPath = path.join(process.cwd(), "public", "uploads", "our_works", dateDirectory);
      if(existingWork?.image){
        const prePath = path.join(process.cwd(), 'public', existingWork.image);
        await unlink(prePath).catch(()=>{});
        const filePath = path.join(directoryPath,filename);
        await writeFile(filePath,buffer);
      }
      imagePath = `/uploads/our_works/${dateDirectory}/${filename}`;
    }else{
      imagePath = image;
    }
    

    const updateWork = await prisma.our_works.update({
      where: { id: Number(id) },
      data: {
        date,
        title,
        description,
        challenges,
        strategy,
        takeaway,
        image: imagePath,
        updated_by: 1,
      },
    });

    return NextResponse.json(updateWork);
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ error: "Failed to update work" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const work = await prisma.our_works.findUnique({
      where: { id: Number(id) },
    });

    if (work?.image) {
      const imagePath = path.join(process.cwd(), "public", work.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await prisma.our_works.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "Work deleted successfully", success: true });
  } catch (error) {
    console.error("Error deleting work:", error);
    return NextResponse.json({ error: "Failed to delete work" }, { status: 500 });
  }
}
