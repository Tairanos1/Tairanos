import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "❌ Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeMessage = escapeHtml(String(message));

    const data = await resend.emails.send({
      from: "Tairanos <onboarding@resend.dev>",
      to: ["tairanos8@gmail.com"],
      replyTo: String(email),

      subject: `🌍 New Tairanos Project Inquiry — ${String(name)}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #222;
            max-width: 700px;
            margin: 0 auto;
          "
        >
          <h2 style="color:#0891b2;">
            🌍 New Tairanos Project Inquiry
          </h2>

          <hr />

          <h3>👤 Client Information</h3>

          <p>
            <strong>Name:</strong>
            ${safeName}
          </p>

          <p>
            <strong>Email:</strong>
            ${safeEmail}
          </p>

          <h3>📝 Message</h3>

          <div
            style="
              background:#f4f4f4;
              padding:15px;
              border-radius:8px;
              white-space:pre-wrap;
            "
          >
            ${safeMessage}
          </div>

          <hr />

          <p style="color:#666; font-size:13px;">
            This message was submitted through the Tairanos website contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message:
        "✅ Your message has been sent successfully! We will contact you soon.",
      emailId: data.data?.id,
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "❌ Failed to send your message. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}