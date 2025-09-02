import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}:{params: {id:string}}){
    const {id} = params;
    try {
        const job = await prisma.jobs.findUnique({
            where: {
                id: Number(id)
            }
        })
        if(job){
            return NextResponse.json(job);
        }else{
            return NextResponse.json({error: "Job not found"},{status: 404});
        }
    } catch (error) {
        return NextResponse.json({error: "Field to fetch job"},{status: 500});
    }
}

export async function PUT(req: Request, {params} : {params: {id: string}}){
    const {id}  = params;
    try {
        const form = await req.formData();
        const openDateStr = form.get("open_date") as string;
        const closeDateStr = form.get("close_date") as string;
        const open_date = new Date(openDateStr).toISOString();
        const close_date = new Date(closeDateStr).toISOString();
        const position = form.get('position') as string;
        const department  = form.get("department") as string;
        const description = form.get("description") as string;
        const experiences = form.get("experiences") as string;
        const level = form.get("level") as string;
        const overview = form.get("overview") as string;
        const job_type = form.get("job_type") as string;
        const salary = form.get("salary") as string;
        const duties = form.get("duties") as string;
        const requirements = form.get("requirements") as string;
        const gender = form.get("gender") as string;
        const status = form.get('status') as string;

        if(
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
                ){
                    return NextResponse.json({error: "All fields are required"},{status: 400})
                }

                const updateJob = await prisma.jobs.update({
                    where:{ id: Number(id)},
                    data: {
                        open_date,
                        close_date,
                        position,
                        description,
                        department,
                        experiences,
                        level,
                        job_type,
                        duties,
                        requirements,
                        gender,
                        status,
                        created_by: 1,
                        updated_by: 1,
                    },
                });
                return NextResponse.json(updateJob);
    } catch (error) {
        return NextResponse.json({error:"Failed to update job"},{status: 500});   
    }
}

export async function DELETE(req: Request, {params}: {params:{id: string}}){
    const {id} = params;

    try {
        await prisma.applicants.deleteMany({
            where: { job_id : Number(id) },
          });
        await prisma.jobs.delete({
            where: {id: Number(id)},
        });
        return NextResponse.json({message: "Job deleted_successfully", success: true},{status: 200});
    } catch (error) {
        return NextResponse.json({error: "Failed to delete job"},{status: 500});
    }
}