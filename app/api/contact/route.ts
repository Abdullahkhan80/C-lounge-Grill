import { NextResponse } from "next/server";
import { RESTAURANT_CONFIG } from "@/restaurant.config";

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

    return NextResponse.json({
      success: true,
      mode: "demo",
      venue: `${RESTAURANT_CONFIG.brandName} — ${RESTAURANT_CONFIG.subBrand}`,
      message: "Your inquiry has been received (Sales Demo Mode). In production, this delivers directly to your management inbox or CRM.",
      data: {
        name: name.trim(),
        email: email.trim(),
        subject: subject || "General Inquiry",
        message: message.trim(),
        timestamp: new Date().toISOString(),
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Server error processing contact inquiry." },
      { status: 500 }
    );
  }
}
