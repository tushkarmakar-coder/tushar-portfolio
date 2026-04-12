import { Resend } from "resend";
import { NextResponse } from "next/server";
import { portfolioData } from "@/lib/data";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await req.json();
    const { name, email, message, phone, service, budget, source } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Determine subject — client leads get a dedicated subject
    const isClient = source === "client" || !!service;
    const subject = isClient
      ? "New Client Lead from Portfolio"
      : `New Portfolio Message from ${name}`;

    // Build email body
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
    ];

    if (phone)   lines.push(`Phone: ${phone}`);
    if (service) lines.push(`Service: ${service}`);
    if (budget)  lines.push(`Budget: ${budget}`);

    lines.push("");
    lines.push("Message:");
    lines.push(message);

    const text = lines.join("\n");

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [portfolioData.personal.email],
      subject,
      text,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
