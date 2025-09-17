import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";


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
    console.log("work",work);
    if (work) {
      return NextResponse.json(work);
    } else {
      return NextResponse.json({ error: "Work not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch work" }, { status: 500 });
  }
}





