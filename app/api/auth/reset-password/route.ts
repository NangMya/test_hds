import prisma from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {

        const { reset_token, password } = await req.json();

        const user = await prisma.users.findFirst({
            where: { reset_token: reset_token },
        });


        if (!user) {
            return NextResponse.json({ message: "Invalid or expired token", status: 400 });
        } else {

        }
        if (user.reset_token_expiry) {
            if (Date.now() > new Date(user?.reset_token_expiry).getTime()) {
                return NextResponse.json({ message: "Token Expired", status: 400 });
            }
        }



        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.users.update({
            where: { id: user.id },
            data: {
                password: hashedPassword,
                reset_token: null,
                reset_token_expiry: null,
            },
        });
        return NextResponse.json({ message: "Password has been reset" , status: 200});

    } catch (error) {
        return NextResponse.error();

    }
}
