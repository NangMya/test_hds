import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const department = await prisma.departments.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (department) {
      return NextResponse.json(department);
    } else {
      return NextResponse.json({ error: "Department Not Found" });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch department" });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const form = await req.formData();
    const name = form.get("name") as string;
    const status = form.get("status") as string;
    const existingDepartment = await prisma.departments.findUnique({
      where: { id: Number(id) },
    });
    if (!existingDepartment) {
      return NextResponse.json({ error: "Department not found" });
    }
    const updateDepartment = await prisma.departments.update({
      where: { id: Number(id) },
      data: {
        name,
        status: Number(status),
        updated_by: 1,
      },
    });
    return NextResponse.json(updateDepartment);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update department" },
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
    const department = await prisma.departments.findUnique({
      where: { id: Number(id) },
    });
    if (!department) {
      return NextResponse.json({
        error: "Failed to deleted. There is no department with this id",
      });
    }
    await prisma.departments.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({ message: "Department deleted successfully" });
  } catch (error) {
    console.error("Error deleting work:", error);
    return NextResponse.json(
      { error: "Failed to delete work" },
      { status: 500 }
    );
  }
}
