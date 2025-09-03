
import prisma from "@/lib/db";
import { NextResponse } from "next/server";


// GET all clients
export async function GET() {
  try {
    const clients = await prisma.clients.findMany();
    return NextResponse.json(clients);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch clients" },
      { status: 500 }
    );
  }
}