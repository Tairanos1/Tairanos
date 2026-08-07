import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      country,
      service,
      budget,
      message,
    } = await req.json();

    // Basic validation
    if (
      !name ||
      !email ||
      !country ||
      !service ||
      !budget ||
      !message
    ) {
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

    const data = await resend.emails.send({
      from: "Tairanos <onboarding@resend.dev>",

      to: ["tairanos8@gmail.com"],

      replyTo: email,

      subject: `🌍 New Tairanos Project Request — ${service}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">

          <h2 style="color:#0891b2;">
            🌍 New Tairanos Project Request
          </h2>

          <hr />

          <h3>👤 Client Information</h3>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Country:</strong>
            ${country}
          </p>

          <h3>💼 Project Information</h3>

          <p>
            <strong>Service:</strong>
            ${service}
          </p>

          <p>
            <strong>Estimated Budget:</strong>
            ${budget}
          </p>

          <h3>📝 Project Details</h3>

          <div
            style="
              background:#f4f4f4;
              padding:15px;
              border-radius:8px;
              white-space:pre-wrap;
            "
          >
            ${message}
          </div>

          <hr />

          <p style="color:#666; font-size:13px;">
            This message was submitted through the Tairanos
            international project request form.
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message:
        "✅ Your project request has been sent successfully! We will contact you soon.",
      emailId: data.data?.id,
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "❌ Failed to send your request. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}