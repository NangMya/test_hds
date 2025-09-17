import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const works = await prisma.our_works.findMany({
      select: {
        id:true,
        title:true,
        image:true,
        description:true,
      },
      orderBy: {
    created_at: 'desc', 
  },
    });
    return NextResponse.json(works);
  } catch (error) {
    return NextResponse.error();
  }
}

