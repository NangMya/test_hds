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
    const award = await prisma.awards.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (award) {
      return NextResponse.json(award);
    } else {
      return NextResponse.json({ error: "Award not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch work" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const form = await req.formData();
    const dateStr = form.get("date") as string;

    const [year, month] = dateStr.split("-");
    const awardDate = new Date(Number(year), Number(month) - 1, 1);
    const title = form.get("title") as string;
    const department_id = form.get("department_id") as string;
    const member_id = form.get("member_id") as string;


    const updateAward = await prisma.awards.update({
      where: { id: Number(id) },
      data: {
        date: awardDate,
        title,
        department_id: Number(department_id),
        member_id: Number(member_id),
        updated_by: 1,
      },
    });

    return NextResponse.json(updateAward);
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { error: "Failed to update award" },
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

    await prisma.awards.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({
      message: "Award deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error deleting award:", error);
    return NextResponse.json(
      { error: "Failed to delete award" },
      { status: 500 }
    );
  }
}
