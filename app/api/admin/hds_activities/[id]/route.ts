import { mkdir, unlink, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import prisma from "@/lib/db";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const { id } = params;
    try {
        const activity = await prisma.hds_activities.findUnique({
            include: {
                galleries: {
                    select: {
                        image: true
                    }
                }
            },
            where: {
                id: Number(id),
            },
        });
        if (activity) {
            return NextResponse.json(activity);
        } else {
            return NextResponse.json({ error: "Activity not found" }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch work" },
            { status: 500 }
        );
    }
}
export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const form = await req.formData();
        const title = form.get("title") as string;
        const description = form.get("description") as string;
        const existingImages = JSON.parse(form.get("existingImages") as string || "[]");
        const newFiles = form.getAll("images[]") as File[];

        if (!title || !description) {
            return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
        }

        // Update activity basic fields
        const activity = await prisma.hds_activities.update({
            where: { id: Number(params.id) },
            data: {
                title,
                description,
                updated_by: 1,
            },
        });
         // Delete images removed in frontend
        const dbImages = await prisma.galleries.findMany({
            where: { activity_id: activity.id },
        });


        const imagesToDelete = dbImages.filter((img) => !existingImages.includes(img.image));

        for (const img of imagesToDelete) {
            if (img?.image) {
                const imagePath = path.join(process.cwd(), "public", img.image);
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
            }
            await prisma.galleries.delete({ where: { id: img.id } });
        }

        // Handle directory structure
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

        // Save new files
        for (const file of newFiles) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const filename = `${Date.now()}_${file.name}`;
            const filePath = path.join(directoryPath, filename);
            await writeFile(filePath, buffer);

            const imagePath = `/uploads/hds_activities/${year}/${month}/${day}/${filename}`;
           const newUpload = await prisma.galleries.create({
                data: {
                    type: "activities",
                    activity_id: activity.id,
                    image: imagePath,
                    created_by: 1,
                    updated_by: 1,
                },
            });
            console.log("mnew upload==>",newUpload);
        }

       

        return NextResponse.json({ success: true, activity });
    } catch (error) {
        console.error("Error updating activity:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    const { id } = params;
    try {
        const galleries = await prisma.galleries.findMany({
            where: {
                activity_id: Number(id),
            }
        })

        galleries.forEach((img) => {
            if (img?.image) {
                const imagePath = path.join(process.cwd(), "public", img.image);
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
            }
        })

        await prisma.hds_activities.delete({
            where: { id: Number(id) },
        });

        return NextResponse.json({
            message: "Activity deleted successfully",
            success: true,
        });
    } catch (error) {
        console.error("Error deleting activity:", error);
        return NextResponse.json(
            { error: "Failed to delete activity" },
            { status: 500 }
        );
    }
}
