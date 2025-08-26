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
        user: "nangmya@dkmads.com",
        pass: "nrhhbjwblpvchoux",
    },
  });

  const mailOptions = {
    from: "nangmya@gmail.com",  
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
