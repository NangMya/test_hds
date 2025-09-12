import { unlink, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import prisma from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const applicant = await prisma.applicants.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (applicant) {
      return NextResponse.json(applicant);
    } else {
      return NextResponse.json({ error: "Applicant not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch work" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const applicant = await prisma.applicants.findUnique({
      where: { id: Number(id) },
    });

    if (applicant?.file) {
      const imagePath = path.join(process.cwd(), "public", applicant.file);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await prisma.applicants.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({
      message: "Application deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error deleting application:", error);
    return NextResponse.json(
      { error: "Failed to delete application" },
      { status: 500 }
    );
  }
}
