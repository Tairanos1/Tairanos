import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("GEMINI_API_KEY is missing.");
}

const ai = new GoogleGenAI({
  apiKey: apiKey || "",
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        {
          reply: "Please enter a message.",
        },
        {
          status: 400,
        }
      );
    }

    if (!apiKey) {
      return NextResponse.json(
        {
          reply: "AI configuration is missing. Please check GEMINI_API_KEY.",
        },
        {
          status: 500,
        }
      );
    }

    const prompt = `
You are Tairanos AI, the official AI assistant of Tairanos.

COMPANY INFORMATION

Company Name:
Tairanos

Country:
Bangladesh

Website:
https://www.tairanos.com

SERVICES

- AI Chatbots
- Website Development
- Business Automation
- Voice Agents
- SEO
- Custom AI Solutions

PRICING

Starter: ৳9,999
Business: ৳24,999
Enterprise: Custom Pricing

CONTACT

Email:
tairanos8@gmail.com

Phone:
+8801746460832

INSTRUCTIONS

- Be professional, friendly and helpful.
- Keep answers short and clear.
- Answer questions about Tairanos using only the company information provided above.
- Do not invent company information.
- If the user wants to hire Tairanos or buy a service, ask:
  "May I know your name?"
- If the user asks for contact information, provide the official Tairanos contact information above.
- If the user asks about pricing, provide the pricing above.
- If the user asks about services, explain the relevant Tairanos services briefly.
- You can communicate in English or Bengali depending on the user's language.
- Do not claim to be a human.
- You are Tairanos AI.

USER MESSAGE:
${message}
`;

    const result = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    const reply =
      result.text?.trim() ||
      "Sorry, I could not generate a response.";

    return NextResponse.json({
      reply,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);

    return NextResponse.json(
      {
        reply:
          "Sorry, AI is temporarily unavailable. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}