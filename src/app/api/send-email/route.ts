import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (
      body.name &&
      body.email &&
      body.message &&
      RegExp(/^\S+@\S+\.\S+$/).test(body.email)
    ) {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: "info@jhb.software",
        to: "info@jhb.software",
        subject: `Neue Kontaktformular Nachricht`,
        html: `
              <p><strong>Name: </strong> ${body.name}</p>
              <p><strong>E-Mail: </strong> ${body.email}</p>
              <p><strong>Nachricht: </strong> ${body.message}</p>
            `,
      });
    } else {
      console.error("Missing/invalid fields");
      return NextResponse.json(
        { error: "Missing/invalid fields" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: JSON.stringify(error) }, { status: 500 });
  }

  return NextResponse.json({ status: 200 });
}
