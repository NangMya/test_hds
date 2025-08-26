import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/db"; 

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  const existingUser = await prisma.users.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ message: "Email already in use" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
        name,
        two_factor_code: null,
        two_factor_code_expiry: null,
        is_two_factor_enabled:true,
      },
    });

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
