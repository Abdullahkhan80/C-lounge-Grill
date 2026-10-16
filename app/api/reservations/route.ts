import { NextResponse } from "next/server";
import { RESTAURANT_CONFIG } from "@/restaurant.config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, date, time, partySize, seatingArea, specialRequests } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
      return NextResponse.json({ error: "Full Name is required." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email address is required." }, { status: 400 });
    }
    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json({ error: "Valid phone number is required." }, { status: 400 });
    }
    if (!date || typeof date !== "string") {
      return NextResponse.json({ error: "Reservation date is required." }, { status: 400 });
    }
    if (!time || typeof time !== "string") {
      return NextResponse.json({ error: "Reservation time is required." }, { status: 400 });
    }

    // Server-side integration hook:
    // In production, integrate OpenTable / Resy / SevenRooms API or dispatch webhook/email.
    return NextResponse.json({
      success: true,
      mode: "demo",
      venue: `${RESTAURANT_CONFIG.brandName} — ${RESTAURANT_CONFIG.subBrand}`,
      message: "Reservation request recorded successfully (Demo Mode). Ready for booking management integration.",
      data: {
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        date,
        time,
        partySize: partySize || "2 Guests",
        seatingArea: seatingArea || "Main Hearth Dining",
        specialRequests: specialRequests || "",
        receivedAt: new Date().toISOString(),
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error processing reservation." },
      { status: 500 }
    );
  }
}
