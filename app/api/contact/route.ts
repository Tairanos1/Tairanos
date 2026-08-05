import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "Tairanos <onboarding@resend.dev>",
      to: ["tairanos8@gmail.com"],
      subject: `New Contact from ${name}`,
      replyTo: email,
      html: `
        <h2>📩 New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "✅ Your message has been sent successfully!",
      emailId: data.data?.id,
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "❌ Failed to send your message. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}