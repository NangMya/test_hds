
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const jobs = await prisma.jobs.findMany({
            include: {
                department: {
                    select: {
                        name: true,
                    }
                },
                createdBy: {
                    select: {
                        name: true,
                    },
                },
            }
        });
        return NextResponse.json(jobs);
    } catch (error) {
        return NextResponse.error();
    }
}

export async function POST(req: Request) {
    try {
        const form = await req.formData();
        const openDateStr = form.get("open_date") as string;
        const closeDateStr = form.get("close_date") as string;
        const open_date = new Date(openDateStr).toISOString();
        const close_date = new Date(closeDateStr).toISOString();
        const position = form.get('position') as string;
        const department_id = form.get("department_id") as string;
        const description = form.get("description") as string;
        const experiences = form.get("experiences") as string;
        const level = form.get("level") as string;
        const overview = form.get("overview") as string;
        const job_type = form.get("job_type") as string;
        const salary = form.get("salary") as string;
        const duties = form.get("duties") as string;
        const requirements = form.get("requirements") as string;
        const gender = form.get("gender") as string;
        const status = form.get("status") as string;
        console.log("duties", duties);

        if (
            !open_date ||
            !close_date ||
            !position ||
            !description ||
            !experiences ||
            !level ||
            !job_type ||
            !duties ||
            !requirements ||
            !gender
        ) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 })
        }

        const newJob = await prisma.jobs.create({
            data: {
                open_date,
                close_date,
                position,
                description,
                department_id: Number(department_id),
                experiences,
                level,
                overview,
                job_type,
                salary,
                duties,
                requirements,
                gender,
                status,
                created_by: 1,
                updated_by: 1,
            },
        });
        return NextResponse.json(newJob);

    } catch (error) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}