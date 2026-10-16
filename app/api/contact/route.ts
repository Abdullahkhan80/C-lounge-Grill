import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email address is required." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    // In production, integrate email sending service here.
    return NextResponse.json({
      success: true,
      message: "Your message has been received (Demo Mode). Our team will respond promptly.",
      data: {
        name: name.trim(),
        email: email.trim(),
        subject: subject || "General Inquiry",
        message: message.trim(),
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Server error processing contact inquiry." },
      { status: 500 }
    );
  }
}
