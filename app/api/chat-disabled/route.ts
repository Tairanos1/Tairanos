import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are Tairanos AI assistant. Help users about AI automation, websites, chatbots and business solutions.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      reply: response.choices[0].message.content,
    });

  } catch (error: any) {
  console.error("========== OPENAI ERROR ==========");
  console.error(error);

  return NextResponse.json(
    {
      error: error?.message || "Unknown error",
      details: error,
    },
    {
      status: 500,
    }
  );
}
}