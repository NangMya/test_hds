import nodemailer from "nodemailer";
import crypto from "crypto";
import jwt from "jsonwebtoken";

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "nangmya@dkmads.com",
        pass: "nrhhbjwblpvchoux",
    },
});
export async function POST(req: Request) {
    try {

        const { email } = await req.json();

        const user = await prisma.users.findUnique({ where: { email } });

        if (!user) {
            return NextResponse.json({ message: "User not found or 2FA not enabled" }, { status: 400 });
        }

        // const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1d" });


        const resetToken = crypto.randomBytes(20).toString("hex");
        const resetTokenExpiration = Date.now() + 3600000;

        await prisma.users.update({
            where: { email },
            data: {
                reset_token: resetToken,
                reset_token_expiry: new Date(resetTokenExpiration),
            },
        });

        // Send reset email with the link to reset password
        const resetLink = `http://localhost:3000/admin/reset-password?token=${resetToken}`;

        await sendEmail({
            to: email,
            subject: "Password Reset Request",
            html: `
            <html>
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
              <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">Password Reset</h2>
                <p style="font-size: 16px; color: #555; padding-top:16px;">Hi there,</p>
            <p>Click the link below to reset your password:</p>
            <a href="${resetLink}">Reset Password</a>
                <p style="font-size: 14px; color: #555; margin-top: 20px;">If you did not request this, please ignore this email.</p>
                <footer style="font-size: 12px; color: #aaa; margin-top: 30px;">
                  <p>Best regards, <br>DKMads</p>
                </footer>
              </div>
            </body>
          </html>`
        });

        
        return NextResponse.json({ message: "Password reset link sent to your email", status: 200 })

    } catch (error) {
        return NextResponse.error();

    }

}
