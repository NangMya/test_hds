
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/lib/db";

export async function POST(req: Request) {
    const { email, code } = await req.json();
    const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
    try {
        const user = await prisma.users.findUnique({
            where: { email },
        });

        if (!user || !user.two_factor_code) {
            return NextResponse.json({ message: "User not found or 2FA not enabled" }, { status: 400 });
        }

        if (user.two_factor_code !== code) {
            return NextResponse.json({ message: "Invalid 2FA code" }, { status: 400 });
        }

        const currentTime = new Date();
        if (user?.two_factor_code_expiry) {
            if (currentTime > new Date(user?.two_factor_code_expiry)) {
                return NextResponse.json({ message: "2FA code expired" }, { status: 400 });
            }
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1d" });

        return NextResponse.json({ token });

    } catch (error) {
        console.error("Error during 2FA verification:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
