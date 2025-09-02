import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import path from "path";
import { writeFile, mkdir, unlink } from "fs/promises";
import fs from 'fs'



export async function GET() {
    try {
        const info = await prisma.infos.findFirst();
        return NextResponse.json(info);
    } catch (error) {
        return NextResponse.error();
    }
}

export async function POST(req: Request) {
    try {
        const form = await req.formData();
        const name = form.get('name') as string;
        const email = form.get('email') as string;
        const phone1 = form.get("phone1") as string;
        const phone2 = form.get("phone2") as string;
        const address = form.get('address') as string;
        const map = form.get('map') as string;
        const facebook_url = form.get('facebook_url') as string;
        const instagram_url = form.get('instagram_url') as string;
        const linkedin_url = form.get('linkedin_url') as string;
        const telegram_url = form.get('telegram_ur') as string;
        const tiktok_url = form.get('tiktok_url') as string;
        const youtube_url = form.get('youtube_url') as string;
        const showreel_pc = form.get('showreel_pc') as File;
        const showreel_mb = form.get('showreel_mb') as File;
        console.log('showreel_pc=>', showreel_pc);
        if (!email || !phone1 || !address || !showreel_mb || !showreel_pc) {
            return NextResponse.json({ error: "All fields are required" })
        }


        const existingInfo = await prisma.infos.findFirst();
        const now = new Date();
        const year = now.getFullYear().toString();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');

        // for pc
        let pcShowreelPath = '';
        let mbShowreelPath = '';
        console.log('type=>',typeof showreel_pc);
        if (typeof showreel_pc !== 'string') {
            const pcByte = await showreel_pc.arrayBuffer();
            const pcBuffer = Buffer.from(pcByte);
            const pcFileName = `${Date.now()}_${showreel_pc.name}`;
            const directoryPath = path.join(process.cwd(), "public", "uploads", "info", year, month, day);

            await mkdir(directoryPath, { recursive: true });
            if (existingInfo?.showreel_pc) {
                const imagePath = path.join(process.cwd(), "public", existingInfo.showreel_pc);
                await unlink(imagePath).catch(() => { });

                const pcFilePath = path.join(directoryPath, pcFileName);
                await writeFile(pcFilePath, pcBuffer);
            }
            pcShowreelPath = `/uploads/info/${year}/${month}/${day}/${pcFileName}`;

        } else {
            pcShowreelPath = showreel_pc;
        }


        if (typeof showreel_mb !== 'string') {

            // for mb
            const mbByte = await showreel_mb.arrayBuffer();
            const mbBuffer = Buffer.from(mbByte);
            const mbFileName = `${Date.now()}_${showreel_mb.name}`;
            const mbDirectoryPath = path.join(process.cwd(), "public", "uploads", "info", year, month, day);

            if (existingInfo?.showreel_mb) {
                const imagePathMb = path.join(process.cwd(), "public", existingInfo.showreel_mb);
                await unlink(imagePathMb).catch(() => { });
                const mbFilePath = path.join(mbDirectoryPath, mbFileName);
                await writeFile(mbFilePath, mbBuffer);
            }
            mbShowreelPath = `/uploads/info/${year}/${month}/${day}/${mbFileName}`;
        } else {
            mbShowreelPath = showreel_mb;
        }



        // Check if a record was actually found.
        // If not, existingInfo will be null, and trying to access .id would cause an error.
        if (!existingInfo) {
            console.error("No existing 'info' record found to update.");
            return null;
        }
        const data = {
            name: name,
            email: email,
            phone1: phone1,
            phone2: phone2,
            address: address,
            map: map,
            facebook_url: facebook_url ?? '',
            instagram_url: instagram_url ?? '',
            youtube_url: youtube_url ?? '',
            telegram_url: telegram_url ?? '',
            linkedin_url: linkedin_url ?? '',
            tiktok_url: tiktok_url ?? '',
            showreel_pc: pcShowreelPath,
            showreel_mb: mbShowreelPath,
            created_by: 1,
            updated_by: 1,
        }
        const info = await prisma.infos.update({
            where: { id: Number(existingInfo.id) },
            data: data
        });
        console.log('info=>', info);
        return NextResponse.json(info);
    } catch (error) {
        console.log("error saving error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}