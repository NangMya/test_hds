import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from 'fs'

export async function GET(req:NextRequest, {params}: {params: {id:string}}){
    const { id } = params;
    try {
        const client = await prisma.clients.findUnique({where: {id: Number(id)}})
        if(client){
            return NextResponse.json(client);
        }else{
            return NextResponse.json({error: "Client Not Found"},{status: 404});
        }
    } catch (error) {
        return NextResponse.json({error: "Failed to fetch client"},{status : 500});
    }
}

export async function DELETE(req:Request, {params}: {params: {id: string}}){
    const { id } = params;
    try {
        const client = await prisma.clients.findUnique({where:{id: Number(id)}});
        if(client?.logo){
            const imagePath  = path.join(process.cwd(),'public', client.logo);
            if(fs.existsSync(imagePath)){
                fs.unlinkSync(imagePath);
            }
        }
        await prisma.clients.delete({
        where: { id: Number(id) },
      });
  
      return NextResponse.json({ message: "Client deleted successfully", success: true });
    } catch (error) {
        console.error("Error deleting work:", error);
      return NextResponse.json({ error: "Failed to delete work" }, { status: 500 });
    }
}