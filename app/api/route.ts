import { NextResponse } from "next/server.js";
import { transport, mailOptions } from "../components/nodemailer.js";

export async function POST(request: Request) {
  const data = await request.json();
  try {
    await transport.sendMail({
      ...mailOptions,
      subject: `New message from ${data.name}`,
      text: data.message,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "There was an error sending your message." }),
      { status: 500 }
    );
  }
  return NextResponse.json(data);
}
