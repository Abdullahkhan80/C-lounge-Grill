import { NextResponse } from "next/server";

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
    // In production, send email via Resend/SendGrid or push to Resy/OpenTable webhook here.
    // e.g.:
    // const destinationEmail = process.env.RESERVATION_NOTIFICATION_EMAIL || "info@cloungeandgrill.com";

    return NextResponse.json({
      success: true,
      mode: "demo",
      message: "Reservation request recorded successfully (Demo Mode). Owner notification ready.",
      data: {
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        date,
        time,
        partySize: partySize || "2 Guests",
        seatingArea: seatingArea || "Main Dining Room",
        specialRequests: specialRequests || "",
        receivedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error processing reservation." },
      { status: 500 }
    );
  }
}
