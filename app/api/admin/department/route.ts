import prisma from "@/lib/db";
import { error } from "console";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const departments = await prisma.departments.findMany({
      include: {
        createdBy: {
          select: {
            name: true,
          },
        },
        updatedBy: {
          select: {
            name: true,
          },
        },
      },
    });
    return NextResponse.json(departments);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = form.get("name") as string;
    const status = form.get("status") as string;
    if (!name) {
      return NextResponse.json({ error: "Name is required" });
    }
    const department = await prisma.departments.create({
      data: {
        name,
        status: Number(status),
        updated_by: 1,
        created_by: 1,
      },
    });
    return NextResponse.json(department);
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
