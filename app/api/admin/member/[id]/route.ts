import { unlink, writeFile } from "fs/promises";
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
    const member = await prisma.members.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (member) {
      return NextResponse.json(member);
    } else {
      return NextResponse.json({ error: "Member not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch work" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const form = await req.formData();
    const name = form.get("name") as string;
    const position = form.get("position") as string;
    const department_id = form.get("department_id") as string;
    const profile = form.get("profile") as string | File;
    console.log('profile',profile);
    if (!name || !position || !department_id || !profile) {
      return NextResponse.json(
        { error: "All fields are required!" },
        { status: 400 }
      );
    }
    const now = new Date();
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const existingMember = await prisma.members.findUnique({
      where: { id: Number(id) },
    });
    let profilePath = "";
    if (typeof profile != "string") {
      const bytes = await profile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}_${profile.name}`;
      const directoryPath = path.join(
        process.cwd(),
        "public",
        "uploads",
        "members",
        year,
        month,
        day
      );

      if (existingMember?.profile) {
        const prePath = path.join(
          process.cwd(),
          "public",
          existingMember.profile
        );
        await unlink(prePath).catch(() => {});

        // Save file to /public/uploads
        const filePath = path.join(directoryPath, filename);
        await writeFile(filePath, buffer);
      }
      profilePath = `/uploads/members/${year}/${month}/${day}/${filename}`;
    } else {
      profilePath = profile;
    }

    const updateMember = await prisma.members.update({
      where: { id: Number(id) },
      data: {
        name,
        position,
        department_id: Number(department_id),
        profile: profilePath,
        updated_by: 1,
      },
    });

    return NextResponse.json(updateMember);
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { error: "Failed to update member" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const member = await prisma.members.findUnique({
      where: { id: Number(id) },
    });

    if (member?.profile) {
      const imagePath = path.join(process.cwd(), "public", member.profile);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await prisma.members.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({
      message: "Member deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error deleting member:", error);
    return NextResponse.json(
      { error: "Failed to delete member" },
      { status: 500 }
    );
  }
}
