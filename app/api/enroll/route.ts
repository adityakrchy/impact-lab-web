import ConfirmationEmail from "@/emails/ConfirmEmails";
import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { Resend } from 'resend';



const resend = new Resend(process.env.RESEND_API_KEY);



function generateEnrollmentId() {
    // Get the current timestamp in milliseconds
    const now = Date.now();

    // Use the last 8 digits of the timestamp
    const timestampPart = now.toString().slice(-8);

    // Generate a random 4-digit number
    const randomPart = Math.floor(1000 + Math.random() * 9000).toString();

    // Compute a simple checksum by summing up ASCII values
    const checksum = (timestampPart + randomPart)
        .split('')
        .reduce((sum, char) => sum + char.charCodeAt(0), 0) % 10000; // 4 digits

    // Combine parts to form the 16-digit ID
    const enrollmentId = `${timestampPart}${randomPart}${checksum.toString().padStart(4, '0')}`;

    return enrollmentId;
}

export async function POST(req: Request) {
    try {
        // 1. Log the initial request
        console.log("Received request");

        // 2. Parse and log the body
        const body = await req.json();
        console.log("Parsed request body:", JSON.stringify(body, null, 2));

        // 3. Test database connection
        try {
            await prisma.$connect();
            console.log("Database connection successful");
        } catch (dbError) {
            console.error("Database connection failed:", dbError);
            throw new Error("Database connection failed");
        }

        // First check if email already exists
        const existingUser = await prisma.enrollment.findUnique({
            where: {
                email: body.email
            }
        });

        if (existingUser) {
            // return NextResponse.json({
            //     success: false,
            //     message: 'An enrollment with this email already exists',
            // }, { status: 400 }); // 409 Conflict status code

            console.log("Email already exists");
            return NextResponse.json({
                message: 'An enrollment with this email already exists',
                success: false,

            }, { status: 401 });
        }

        const enrollmentId = generateEnrollmentId();
        // 4. Prepare the data object explicitly
        const enrollmentData = {
            name: String(body.name),
            dateOfBirth: String(body.dateOfBirth),
            gender: String(body.gender),
            email: String(body.email),
            phone: String(body.phone),
            addressLine1: String(body.addressLine1),
            addressLine2: body.addressLine2 ? String(body.addressLine2) : null,
            city: String(body.city),
            pincode: String(body.pincode),
            education: String(body.education),
            institute: String(body.institute),
            yearOfPassing: String(body.yearOfPassing),
            percentage: String(body.percentage),
            document: body.documentUrl ? String(body.documentUrl) : null,
            declaration: Boolean(body.declaration),
            enrollmentId: String(enrollmentId)
        };


        console.log("Prepared enrollment data:", JSON.stringify(enrollmentData, null, 2));

        // 5. Attempt to create the record
        const dataToSave = await prisma.enrollment.create({
            data: enrollmentData
        });

        console.log("Successfully saved data:", JSON.stringify(dataToSave, null, 2));
        await resend.emails.send({
            from: 'Impact Lab <into@impactlab.in>',
            to: [`${body.email}`],
            cc: [`adityakrchy101@gmail.com`],
            subject: `Enrollment Confirmation`,
            react: ConfirmationEmail({
                name: body.name,
                enrollmentNumber: enrollmentId
            })
        });

        return NextResponse.json({
            success: true,
            message: 'Enrollment submitted successfully!',
            data: dataToSave
        }, { status: 200 });

    } catch (error) {
        console.error("Error details:", {
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
            error
        });



        return NextResponse.json({
            success: false,
            message: 'Error submitting form',
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    } finally {
        // 6. Disconnect from the database
        await prisma.$disconnect();
    }
}