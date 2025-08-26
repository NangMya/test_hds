import prisma from "@/lib/db";
import { error } from "console";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const jobs = await prisma.jobs.findMany();
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
        const position_en = form.get('position_en') as string;
        const position_km = form.get("position_km") as string;
        const department_en  = form.get("department_en") as string;
        const department_km = form.get("department_km") as string;
        const description_en = form.get("description_en") as string;
        const description_km = form.get("description_km") as string;
        const experiences_en = form.get("experiences_en") as string;
        const experiences_km = form.get("experiences_km") as string;
        const level_en = form.get("level_en") as string;
        const level_km = form.get("level_km") as string;
        const overview_en = form.get("overview_en") as string;
        const overview_km = form.get("overview_km") as string;
        const job_type_en = form.get("job_type_en") as string;
        const job_type_km = form.get("job_type_km") as string;
        const salary_en = form.get("salary_en") as string;
        const salary_km = form.get("salary_km") as string;
        const duties_en = form.get("duties_en") as string;
        const duties_km = form.get("duties_km") as string;
        const requirements_km = form.get("requirements_km") as string;
        const requirements_en = form.get("requirements_en") as string;

        const gender = form.get("gender") as string;
        const status = form.get("status") as string;

        if(
            !open_date ||
            !close_date ||
            !position_en ||
            !position_km ||
            !description_en ||
            !description_km ||
            !experiences_en ||
            !experiences_km ||
            !level_en ||
            !overview_en ||
            !overview_km ||
            !job_type_en ||
            !salary_en ||
            !salary_km ||
            !duties_en ||
            !duties_km ||
            !requirements_en ||
            !requirements_km ||
            !gender
                ){
                    return NextResponse.json({error: "All fields are required"},{status: 400})
                }

                const newJob = await prisma.jobs.create({
                    data: {
                        open_date,
                        close_date,
                        position_en,
                        position_km,
                        description_en,
                        description_km,
                        department_en,
                        department_km,
                        experiences_en,
                        experiences_km,
                        level_en,
                        level_km,
                        overview_en,
                        overview_km,
                        job_type_en,
                        job_type_km,
                        salary_en,
                        salary_km,
                        duties_en,
                        duties_km,
                        requirements_en,
                        requirements_km,
                        gender,
                        status,
                        created_by: 1,
                        updated_by: 1,
                    },
                });
                return NextResponse.json(newJob);

    } catch (error) {
        return NextResponse.json({error: "Server error"},{status: 500});
    }
}