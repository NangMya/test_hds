import prisma from "@/lib/db";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
    try {
        const applicants = await prisma.applicants.findMany();
        return NextResponse.json(applicants)
    } catch (error) {
        return NextResponse.error();
    }
}

export async function POST(req: Request) {
    try {
        
        const form = await req.formData();
        const name = form.get("name") as string;
        const email = form.get("email") as string;
        const phone = form.get("phone") as string;
        const address = form.get("address") as string;
        const experience = form.get("experience") as string;
        const expected_salary = form.get("expected_salary") as string;
        const job_id = form.get("job_id") as string;
        const existing = await prisma.applicants.findFirst({
            where: {
              email,
              job_id: Number(job_id)
            }
          });
          
          if (existing) {
            return NextResponse.json({ error: "Already applied for this job." }, { status: 409 });
          }
        const file = form.get('file') as File;

        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "image/jpeg",
            "image/png",
            "image/jpg",
            "image/gif",
            "image/webp",
            "image/svg+xml"
        ];

        const maxSize = 5 * 1024 * 1024;

        console.log(file);
        if (!file) {
            return NextResponse.json({ error: "File is Required" }, { status: 400 });
        }
        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
        }
        if (file.size > maxSize) {
            return NextResponse.json({ error: "File is too large" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filename = `${name}_${Date.now()}_${file.name}`;
        const filepath = path.join(process.cwd(), "public", "uploads/applications", filename);
        await writeFile(filepath, buffer);

        // multip file
        // const buffer = Buffer.from(await file.arrayBuffer());
        // const filename = `${name}-${file.name.replace(/\s/g, "-")}`;
        // const uploadPath = path.join(process.cwd(), "public", "uploads/applications", filename);

        // await writeFile(uploadPath, buffer);


        const newApplicant = await prisma.applicants.create({
            data: { name, email, phone, address, experience,job_id: Number(job_id),file:`/uploads/applications/${filename}`, expected_salary, updated_by: 1, status:"pending" }
        })
       
        return NextResponse.json(newApplicant, { status: 201 })
    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }
}