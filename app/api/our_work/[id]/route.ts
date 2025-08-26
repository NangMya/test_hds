import prisma from "@/lib/db";
import { unlink, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";


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
        return NextResponse.json({ error: "Field to fetch work" }, { status: 500 });
    }
}


export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
  
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
      const image = form.get("image") as File | null;
  
      const existingWork = await prisma.our_works.findUnique({
        where: { id: Number(id) },
      });
  
      if (!existingWork) {
        return NextResponse.json({ error: "Work not found" }, { status: 404 });
      }
  
      let imagePath = existingWork.image;
  
      if (image && image.size > 0) {
        if (existingWork.image) {
          const oldPath = path.join(process.cwd(), "public", existingWork.image);
          await unlink(oldPath).catch(() => {});
        }
  
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filename = `${Date.now()}_${image.name}`;
        const filepath = path.join(process.cwd(), "public", "uploads/works", filename);
        await writeFile(filepath, buffer);
  
        imagePath = `/uploads/works/${filename}`;
      }
  
      const updateWork = await prisma.our_works.update({
        where: { id: Number(id) },
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
          image: imagePath,
          created_by: 1,
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
