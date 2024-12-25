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
  
  interface ConfirmationEmailProps {
    name: string;
    enrollmentNumber: string;
  }
  
  export default function ConfirmationEmail({
    name,
    enrollmentNumber,
  }: ConfirmationEmailProps) {
    return (
      <Html>
        <Head />
        <Preview>Enrollment Confirmation for KYP</Preview>
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
                    background: 'linear-gradient(to right, #16a34a, #15803d)',
                    color: 'white',
                    WebkitBackgroundClip: 'text',
                    MozBackgroundClip: 'text',
                    borderRadius: '10px',
                  }}
                >
                  Enrollment Confirmation
                </Heading>
                <Hr className="border-t border-gray-200 my-6" />
  
                {/* Content */}
                <Section>
                  <Text className="text-gray-700 mb-4">
                    Hello <span className="font-semibold">{name}</span>,
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    Thank you for enrolling in our program.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    Your enrollment has been successfully processed. Here is your enrollment number:
                  </Text>
                  <Text className="text-gray-700 text-center font-semibold bg-gray-100 p-4 rounded-lg mb-4">
                    {enrollmentNumber}
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    Please keep this number safe for your records. If you have any questions or need assistance, feel free to contact us at:
                    <a
                      href={`mailto:support@impactlab.in`}
                      className="text-blue-600 underline"
                    >
                      support@impactlab.in
                    </a>
                  </Text>
                </Section>
  
                {/* Footer */}
                <Hr className="border-t border-gray-200 my-6" />
                <Text className="text-sm text-gray-500 text-center">
                  We’re excited to have you in our program and look forward to helping you achieve your goals!
                </Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  }
  