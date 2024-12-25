import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import EnquiryEmail from '@/emails/EnquiryEmail';
import AcknowledgementEmail from '@/emails/AcknowledgementEmai.';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();


    // enquiry mail for Impact Lab.
    const data = await resend.emails.send({
      from: 'Impact Lab <into@impactlab.in>',
      to: ['adityakrchy101@gmail.com'],
      subject: `New Enquiry: ${subject}`,
      react: EnquiryEmail({
        name,
        email,
        subject,
        message,
      }),
    });

    // acknowledgement email for user.
    await resend.emails.send({
      from: 'Impact Lab <into@impactlab.in>',
      to: [`${email}`],
      cc: ['info@impactlab.in'],
      subject: `New Enquiry: ${subject}`,
      react: AcknowledgementEmail({
        name,
        subject,
      }),
    })

    if (data.error) {
      return NextResponse.json({
        success: false,
        message: 'Failed to send message. Please try again.',
      }, { status: 424 })
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: data.data
    }, { status: 200 })

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again later.',
        error: error
      }, {
      status: 500
    }
    );
  }
} 