import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const awards = await prisma.awards.findMany({
      include: {
        department: {
          select: {
            name: true,
          },
        },
        member: {
          select: {
            name: true,
            profile: true,
          }
        },
        createdBy: {
          select: {
            name: true,
          },
        },
      },
    });
    return NextResponse.json(awards);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const title = form.get("title") as string;
    const dateStr = form.get("date") as string;

    const [year, month] = dateStr.split("-");
    const awardDate = new Date(Number(year), Number(month) - 1, 1);


    // const date = new Date(dateStr).toISOString();
    // const date = new Date(dateStr).toISOString();
    const department_id = form.get("department_id") as string;
    const member_id = form.get("member_id") as string;

    const newAwards = await prisma.awards.create({
      data: {
        title,
        date: awardDate,
        department_id: Number(department_id),
        member_id: Number(member_id),
        created_by: 1,
        updated_by: 1,
      },
    });

    return NextResponse.json(newAwards);
  } catch (error) {
    console.error("Error saving award:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
