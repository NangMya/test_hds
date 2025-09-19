import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
    try {
        const departments = await prisma.departments.findMany({
            include: {
                jobs: {
                    select: {
                        id: true,
                        open_date: true,
                        position: true,
                    }
                }
            }
        });
        return NextResponse.json(departments);
    } catch (error) {
        console.error("Prisma error:", error);

        return NextResponse.error();
    }
}


