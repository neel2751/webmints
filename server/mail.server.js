"use server";
import nodemailer from "nodemailer";

export async function sendMail(email) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "587",
    secure: false,
    auth: {
      user: process.env.GMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.GMAIL_ADDRESS,
      to: process.env.GMAIL_ADDRESS,
      subject: "New Client Request From Comming Soon Page",
      text: `New Client inquiry and the email address is here: ${email}`,
    });
    if (info.messageId) {
      return { success: true, message: "Thank you for Subscribe" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to Store the info" };
  }
}
