import { Resend } from 'resend';
import { NextResponse, NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // 1. Destructure 'data' and 'error' from the resend call
    const { data, error } = await resend.emails.send({
      from: 'Watch Hill Contact <onboarding@resend.dev>',
      to: 'ymarvintan@gmail.com',
      subject: `New Inquiry: ${service} - ${name}`,
      replyTo: email,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // 2. Check if Resend returned an error
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    // 3. Now 'data' is safe to access, and TypeScript knows it has an 'id'
    return NextResponse.json({ success: true, id: data?.id });
    
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}