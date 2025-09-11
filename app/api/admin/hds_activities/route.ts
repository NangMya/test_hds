import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import prisma from "@/lib/db";

export async function GET() {
    try {
        const activities = await prisma.hds_activities.findMany({
            include: {
                galleries: {
                    select: {
                        image: true,
                    }
                },
                createdBy: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return NextResponse.json(activities);
    } catch (error) {
        return NextResponse.error();
    }
}

export async function POST(req: Request) {
    try {
        const form = await req.formData();
        const title = form.get("title") as string;
        const description = form.get("description") as string;
        const images = form.getAll("images[]") as Array<any>;

        if (!title || !description || !images) {
            return NextResponse.json(
                { error: "All fields are required!" },
                { status: 400 }
            );
        }
        const now = new Date();
        const year = now.getFullYear().toString();
        const month = (now.getMonth() + 1).toString().padStart(2, "0");
        const day = now.getDate().toString().padStart(2, "0");

        const directoryPath = path.join(
            process.cwd(),
            "public",
            "uploads",
            "hds_activities",
            year,
            month,
            day
        );
        await mkdir(directoryPath, { recursive: true });
        const activity = await prisma.hds_activities.create({
            data: {
                title,
                description,
                created_by: 1,
                updated_by: 1,
            },
        });
        for (const image of images) {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const filename = `${Date.now()}_${image.name}`;

            const imagePath = `/uploads/hds_activities/${year}/${month}/${day}/${filename}`;
            const filePath = path.join(directoryPath, filename);
            await writeFile(filePath, buffer);

            await prisma.galleries.create({
                data: {
                    type: "activities",
                    activity_id: activity.id,
                    image: imagePath,
                    created_by: 1,
                    updated_by: 1,
                },
            });
        }

        return NextResponse.json(activity);
    } catch (error) {
        console.error("Error saving activities:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
