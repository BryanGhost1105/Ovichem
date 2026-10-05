import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const companyName = typeof body.companyName === 'string' ? body.companyName.trim() : '';
    const inquiryType = typeof body.inquiryType === 'string' ? body.inquiryType.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !companyName || !inquiryType || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please provide valid contact details and a message.' }, { status: 400 });
    }

    const yahooUser = process.env.YAHOO_USER;
    const yahooAppPassword = process.env.YAHOO_APP_PASSWORD;
    const recipient = 'ovichemconsultltd@yahoo.com';
    if (!yahooUser || !yahooAppPassword) {
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.yahoo.com',
      port: 465,
      secure: true,
      auth: { user: yahooUser, pass: yahooAppPassword },
    });

    await transporter.sendMail({
      from: `Ovichem website <${yahooUser}>`,
      to: recipient,
      replyTo: email,
      subject: `[Website enquiry] ${inquiryType} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${companyName}\nInquiry type: ${inquiryType}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unable to send message.' }, { status: 500 });
  }
}