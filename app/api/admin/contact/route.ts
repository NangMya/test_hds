import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const messages = await prisma.messages.findMany();
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.error(); 
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json(); 
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
    }

    console.log(name, email,phone, message);
    const newMessage = await prisma.messages.create({
      data: { name, email, phone, message },
    });

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    return NextResponse.error(); 
  }
}
