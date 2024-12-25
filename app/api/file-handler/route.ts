import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';



// Configure R2 client
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_ID = process.env.R2_ACCESS_ID;
const R2_SECRET_KEY = process.env.R2_SECRET_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL;

// configure S3 client
const S3 = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_ID!,
    secretAccessKey: R2_SECRET_KEY!,
  },

});



export const config = {
  api: {
    bodyParser: false,
  },
};
export async function POST(request: NextRequest) {
  try {
    // Parse the form data
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: 'No file received.' }, { status: 400 });
    }

    // Validate file type
    if ((file as File).type !== 'application/pdf') {
      return NextResponse.json({ error: 'Only PDF files are allowed.' }, { status: 400 });
    }


    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileName = `pdf-${uniqueSuffix}.pdf`;

    // Get file buffer
    const buffer = await (file as Blob).arrayBuffer();

    // Define file path in the public uploads folder
    // const filePath = path.join(process.cwd(), 'public/uploads', (file as File).name);

    // // Write the file buffer to the filesystem
    // await new Promise((resolve, reject) => {
    //   const writeStream = fs.createWriteStream(filePath);
    //   writeStream.write(Buffer.from(buffer));
    //   writeStream.end();

    //   writeStream.on('finish', resolve);
    //   writeStream.on('error', reject);
    // });


    // Upload to R2
    const uploadCommand = new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: fileName,
      Body: Buffer.from(buffer),
      ContentType: 'application/pdf',
      ACL: 'public-read',

    });

    await S3.send(uploadCommand);

    // Use the public bucket URL instead
    const fileUrl = `${R2_PUBLIC_URL}/${fileName}`;

    return NextResponse.json({
      message: 'PDF uploaded successfully',
      fileName: fileName,
      fileUrl: fileUrl,
    });


    // return NextResponse.json({
    //   message: 'PDF uploaded successfully',
    //   fileName: (file as File).name,
    //   filePath: `/uploads/${(file as File).name}`,
    // });

  } catch (error) {
    return NextResponse.json(
      { error: 'Error uploading file: ' + error },
      { status: 500 }
    );
  }
}


// import { NextRequest, NextResponse } from 'next/server';
// import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// // Configure R2 client
// const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
// const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
// const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
// const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
// const PUBLIC_BUCKET_URL = process.env.PUBLIC_BUCKET_URL; // Add this

// const S3 = new S3Client({
//   region: 'auto',
//   endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
//   credentials: {
//     accessKeyId: R2_ACCESS_KEY_ID!,
//     secretAccessKey: R2_SECRET_ACCESS_KEY!,
//   },
// });

// export async function POST(request: NextRequest) {
//   try {
//     // ... previous validation code ...

//     // Upload to R2
//     const uploadCommand = new PutObjectCommand({
//       Bucket: R2_BUCKET_NAME,
//       Key: fileName,
//       Body: Buffer.from(buffer),
//       ContentType: 'application/pdf',
//       // Make the object publicly readable
//       ACL: 'public-read',
//     });

//     await S3.send(uploadCommand);

//     // Use the public bucket URL instead
//     const fileUrl = `${PUBLIC_BUCKET_URL}/${fileName}`;

//     return NextResponse.json({
//       message: 'PDF uploaded successfully',
//       fileName: fileName,
//       fileUrl: fileUrl,
//     });

//   } catch (error) {
//     console.error('Upload error:', error);
//     return NextResponse.json(
//       { error: 'Error uploading file: ' + error },
//       { status: 500 }
//     );
//   }
// }