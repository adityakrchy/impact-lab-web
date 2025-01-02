import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface EnquiryEmailProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function EnquiryEmail({
  name,
  email,
  phone,
  subject,
  message,
}: EnquiryEmailProps) {
  console.log('EnquiryEmail props:', { name, email, phone, subject, message });
  
  return (
    <Html>
      <Head />
      <Preview>New Enquiry from {name}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container className="mx-auto py-8 px-4">
            <Section className="bg-white rounded-xl shadow-lg p-8 max-w-xl mx-auto">
              {/* Header */}
              <Heading
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  background: 'linear-gradient(to right, #1d4ed8, #1e40af)', // Fallback for gradient
                  color: 'white', // Fallback for non-gradient-supporting clients
                  WebkitBackgroundClip: 'text',
                  MozBackgroundClip: 'text',
                  borderRadius: '10px',
                }}
              >
                Impact Lab - New Enquiry
              </Heading>
              <Hr className="border-t border-gray-200 my-6" />

              {/* Content */}
              <Section>
                <Text className="text-gray-700 mb-4">
                  <span className="font-semibold">From:</span> {name}
                </Text>
                <Text className="text-gray-700 mb-4">
                  <span className="font-semibold">Email:</span> {email}
                </Text>
                <Text className="text-gray-700 mb-4">
                  <span className="font-semibold">Phone:</span> {phone}
                </Text>
                <Text className="text-gray-700 mb-4">
                  <span className="font-semibold">Subject:</span> {subject}
                </Text>
                <Hr className="border-t border-gray-200 my-6" />
                <Text className="text-gray-700 mb-4">
                  <span className="font-semibold">Message:</span>
                </Text>
                <Text className="text-gray-600 bg-gray-50 p-4 rounded-lg">
                  {message}
                </Text>
              </Section>

              {/* Footer */}
              <Hr className="border-t border-gray-200 my-6" />
              <Text className="text-sm text-gray-500 text-center">
                This email was sent from the contact form at Impact Lab.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html >
  );
} 