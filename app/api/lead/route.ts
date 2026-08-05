import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Lead API Called");

    const body = await req.json();

    console.log("NEW LEAD RECEIVED");
    console.log(body);

    return NextResponse.json({
      success: true,
      message: "Lead received successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Lead failed",
      },
      {
        status: 500,
      }
    );
  }
}