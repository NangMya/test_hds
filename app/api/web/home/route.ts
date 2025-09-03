import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const info = await prisma.infos.findFirst();
        const members = await prisma.infos.findFirst();
        return NextResponse.json(info);
    } catch (error) {
        return NextResponse.error();
    }
}

