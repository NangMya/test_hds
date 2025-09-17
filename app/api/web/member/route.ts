import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const members = await prisma.members.findMany();
    return NextResponse.json(members);
  } catch (error) {
    return NextResponse.error();
  }
}


