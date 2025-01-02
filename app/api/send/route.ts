import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import EnquiryEmail from '@/emails/EnquiryEmail';
import AcknowledgementEmail from '@/emails/AcknowledgementEmai.';
import twilio from 'twilio'
import prisma from '@/prisma/index';
import { generateEnquiryId } from '@/lib/generateEnquiryId';



const resend = new Resend(process.env.RESEND_API_KEY);

// configure twilio client
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(req: Request) {
  try {
    console.log('Starting request processing');
    const { name, email, phone, subject, message } = await req.json();
    console.log('Request data:', { name, email, phone, subject, message });

    try {
      const enquiryId = await generateEnquiryId();
      console.log('Generated enquiryId:', enquiryId);

      // Create enquiry first
      const enquiry = await prisma.enquiry.create({
        data: {
          enquiryId,
          name,
          email,
          phone,
          subject,
          message
        }
      });
      console.log('Created enquiry:', enquiry);

      // Send notification email to admin
      await resend.emails.send({
        from: 'Impact Lab <info@impactlab.in>',
        to: ['adityakrchy101@gmail.com'],
        subject: `${enquiryId} - New Enquiry: ${subject}`,
        react: EnquiryEmail({
          name,
          email,
          phone,
          subject,
          message,
        }),
      });

      // Send acknowledgment email to user
      await resend.emails.send({
        from: 'Impact Lab <info@impactlab.in>', // Fixed typo in 'into'
        to: [email],
        cc: ['adityakrchy101@gmail.com'],
        subject: `Thank you for your enquiry: ${subject}`,
        react: AcknowledgementEmail({
          name,
          subject,
        }),
      });

      // Send SMS if configured
      if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
        try {
          await twilioClient.messages.create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: `+91${phone}`,
            body: `Thank you for your enquiry, ${name}. Your enquiry id is ${enquiryId}. We'll get back to you shortly. - Impact Lab`
          });
        } catch (twilioError) {
          console.error('Twilio error:', twilioError);
          // Continue execution even if SMS fails
        }
      }

      return NextResponse.json({
        success: true,
        message: 'Your message has been sent successfully!',
        enquiryId
      }, { status: 200 });

    } catch (innerError) {
      console.error('Inner error:', innerError);
      return NextResponse.json({
        success: false,
        message: 'Failed to process your request. Please try again.',
        error: innerError instanceof Error ? innerError.message : String(innerError)
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Outer error:', error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred. Please try again later.',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 