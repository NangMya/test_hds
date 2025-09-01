import nodemailer from "nodemailer";
type Props = {
    to:string,
    subject: string,
    text?:string,
    html: string,
}
export const sendEmail = async ({ to, subject, text, html }:Props) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,  
    to,
    subject,
    text,
    html
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email.");
  }
};