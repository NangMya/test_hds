import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";


export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const job = await prisma.jobs.findUnique({
      where: {
        id: Number(id)
      }
    })
    if (job) {
      return NextResponse.json(job);
    } else {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch work" }, { status: 500 });
  }
}





