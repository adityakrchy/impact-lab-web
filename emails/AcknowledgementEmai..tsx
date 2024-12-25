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
  
  interface AcknowledgementEmailProps {
    name: string;
    subject: string;
  }
  
  export default function AcknowledgementEmail({
    name,
    subject,
  }: AcknowledgementEmailProps) {
    return (
      <Html>
        <Head />
        <Preview>We have received your enquiry, {name}</Preview>
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
                    background: 'linear-gradient(to right, #1d4ed8, #1e40af)',
                    color: 'white',
                    WebkitBackgroundClip: 'text',
                    MozBackgroundClip: 'text',
                    borderRadius: '10px',
                  }}
                >
                  Impact Lab - Acknowledgement
                </Heading>
                <Hr className="border-t border-gray-200 my-6" />
  
                {/* Content */}
                <Section>
                  <Text className="text-gray-700 mb-4">
                    Hello <span className="font-semibold">{name}</span>,
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    Thank you for reaching out to us. We have received your enquiry regarding:
                  </Text>
                  <Text className="text-gray-700 mb-4 italic">
                    "{subject}"
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    Our team will review your message and get back to you as soon as possible. We appreciate your patience.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    If you have any urgent questions, feel free to reply to this email or contact us at <a href="mailto:support@impactlab.com" className="text-blue-600 underline">support@impactlab.com</a>.
                  </Text>
                </Section>
  
                {/* Footer */}
                <Hr className="border-t border-gray-200 my-6" />
                <Text className="text-sm text-gray-500 text-center">
                  Thank you for contacting Impact Lab. We’re here to assist you!
                </Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  }
  