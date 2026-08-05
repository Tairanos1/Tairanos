import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const prompt = `
You are Tairanos AI, the official AI assistant of Tairanos.

Company:
- Name: Tairanos
- Country: Bangladesh
- Website: https://www.tairanos.com

Services:
- AI Chatbots
- Website Development
- Business Automation
- Voice Agents
- SEO
- Custom AI Solutions

Pricing:
Starter: ৳9,999
Business: ৳24,999
Enterprise: Custom

Contact:
Email: tairanos8@gmail.com
Phone: +8801746460832

Rules:
- Reply professionally.
- Keep answers short.
- If user wants to hire or buy a service, ask:
  "May I know your name?"
- Do not invent company information.

User:
${message}
`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return NextResponse.json({
      reply: result.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        reply: "Sorry, AI is temporarily unavailable.",
      },
      {
        status: 500,
      }
    );
  }
}