import { NextResponse } from "next/server";

import prisma from "@/lib/db";
import { generate2FACode } from "@/lib/util";
import { sendEmail } from "@/lib/email";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const user = await prisma.users.findUnique({
      where: { email },
    });
    console.log('user',user)

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }
const isMatch = await bcrypt.compare(password, user.password);
console.log('ismatch',isMatch);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }
    
    if (user.is_two_factor_enabled) {
      const {code, expirationTime} = generate2FACode();
      console.log('code',code);
      console.log('expiray',expirationTime);

      await prisma.users.update({
        where: { email },
        data: {
          two_factor_code: code,
          two_factor_code_expiry: expirationTime,
        },
      });

      await sendEmail({
        to: email,
        subject: "Your 2FA Code",
        text: `Your 2FA verification code is: ${code}`,
        html: `
            <html>
              <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
                <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #333;">Your 2FA Verification Code</h2>
                  <p style="font-size: 16px; color: #555; padding-top:16px;">Hi there,</p>
                  <p style="font-size: 16px; color: #555;">Please use the following code to complete your two-factor authentication:</p>
                  <div style="background-color: #4CAF50; color: white; padding: 12px 20px; font-size: 24px; text-align: center; border-radius: 5px; margin-top: 20px;">
                    <strong>${code}</strong>
                  </div>
                  <p style="font-size: 14px; color: #555; margin-top: 20px;">If you did not request this, please ignore this email.</p>
                  <footer style="font-size: 12px; color: #aaa; margin-top: 30px;">
                    <p>Best regards, <br>DKMads</p>
                  </footer>
                </div>
              </body>
            </html>
        `,
      });
      return NextResponse.json({ message: "2FA code sent. Please check your email.", email });
    }
    
    // Add this return statement for users without 2FA
    return NextResponse.json({ message: "Login successful", user: user }, { status: 200 });

  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}