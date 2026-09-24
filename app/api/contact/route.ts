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

    if (!name || !email || !inquiryType || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please provide valid contact details and a message.' }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const recipient = process.env.CONTACT_EMAIL || gmailUser;
    if (!gmailUser || !gmailAppPassword || !recipient) {
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailAppPassword },
    });

    await transporter.sendMail({
      from: `Ovichem website <${gmailUser}>`,
      to: recipient,
      replyTo: email,
      subject: `[Website enquiry] ${inquiryType} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${companyName || 'N/A'}\nInquiry type: ${inquiryType}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unable to send message.' }, { status: 500 });
  }
}