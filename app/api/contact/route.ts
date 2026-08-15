import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Tairanos <contact@tairanos.com>",
      to: ["tairanos8@gmail.com"],
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
          <h2 style="color:#0891b2;">New Tairanos Project Inquiry</h2>

          <hr />

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <h3>Message</h3>

          <div style="
            background:#f4f4f4;
            padding:16px;
            border-radius:8px;
            white-space:pre-wrap;
          ">
            ${message}
          </div>
        </div>
      `,
    });

    if (data.error) {
      return NextResponse.json(
        {
          success: false,
          message: data.error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message.",
      },
      { status: 500 }
    );
  }
}