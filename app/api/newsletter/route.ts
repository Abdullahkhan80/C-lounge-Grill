import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }

    // In a production deployment, integrate Mailchimp, Klaviyo, or Resend here.
    return NextResponse.json({
      success: true,
      message: "You have been added to the VELORA culinary dispatch. (Demo Mode confirmation)",
      data: {
        email: email.trim(),
        subscribedAt: new Date().toISOString(),
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to process newsletter subscription." }, { status: 500 });
  }
}
