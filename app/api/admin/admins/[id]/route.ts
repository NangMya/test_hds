import { unlink, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const { id } = params;
    try {
        const admin = await prisma.users.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (admin) {
            return NextResponse.json(admin);
        } else {
            return NextResponse.json({ error: "Admin not found" }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch work" },
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
        await prisma.users.delete({
            where: { id: Number(id) },
        });
        return NextResponse.json({
            message: "Admin deleted successfully",
            success: true,
        });
    } catch (error) {
        console.error("Error deleting admin:", error);
        return NextResponse.json(
            { error: "Failed to delete admin" },
            { status: 500 }
        );
    }
}
