import prisma from '@/prisma/index'
import { format } from 'date-fns';


export async function generateEnquiryId(): Promise<string> {
  try {
    // Get current date in YYMMDD format
    const dateString = format(new Date(), 'yyMMdd');
    
    // Find or create sequence for today
    
    const sequenceState = await prisma.sequenceState.upsert({
      where: {
        date: dateString,
      },
      update: {
        sequence: {
          increment: 1
        }
      },
      create: {
        date: dateString,
        sequence: 1
      }
    });

    // Format sequence as 4 digits with leading zeros
    const sequenceNumber = sequenceState.sequence.toString().padStart(4, '0');
    
    // Generate final ID in format ENQ-YYMMDD-XXXX
    const enquiryId = `ENQ-${dateString}-${sequenceNumber}`;
    
    return enquiryId;
  } catch (error) {
    console.error('Error generating enquiry ID:', error);
    throw error;
  }
}