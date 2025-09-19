import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
    try {
        const jobs = await prisma.jobs.findMany({
            include:{
                department:{
                    select:{
                        name:true,
                    }
                },
                applicant:{
                    select:{
                        id:true,
                    }
                }
            },
            orderBy: {
                created_at: 'desc',
            },
        });
        return NextResponse.json(jobs);
    } catch (error) {
        return NextResponse.error();
    }
}

