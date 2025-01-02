"use client"
import { MapPin, Phone, Mail, MessageSquare, Clock, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import PageWrapper from '@/components/layout/PageWrapper'
import Section from '@/components/layout/Section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import axios from 'axios'

const contactInfo = [
  {
    icon: <MapPin className="w-12 h-12" />,
    title: "Our Location",
    description: "P.M. Tank, Bangalitola, Laheriasarai, Darbhanga, Bihar, 846001",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <Phone className="w-12 h-12" />,
    title: "Phone Number",
    description: "+91 9931467100",
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: <Mail className="w-12 h-12" />,
    title: "Email Address",
    description: "info@impactlab.in",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: <MessageSquare className="w-12 h-12" />,
    title: "Live Chat",
    description: "Chat with our support team",
    color: "from-orange-500 to-amber-400"
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Business Hours",
    description: "Monday - Saturday: 9:00 AM - 6:00 PM",
    color: "from-rose-500 to-pink-400"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Support Team",
    description: "Dedicated support for all your queries",
    color: "from-indigo-500 to-blue-400"
  }
]

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const EnquiryPage = () => {

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/send', formData);

      if (response.data?.success) {
        setSubmitMessage(response.data?.message);
        console.log(submitMessage)
        // Reset form here if needed
        console.log(response.data?.message);




      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
      console.log(error)
    } finally {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <Section
        title="Get in Touch with Us"
        subtitle="We'd love to hear from you! Whether you have questions, feedback, or need assistance, we're here to help."
      >
        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br ${info.color} text-white`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{info.title}</h3>
                <p className="text-gray-600 text-center">{info.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input type="text" id="name" name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input type="email" id="email" name="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <Input type="text" id="phone" name="phone" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input type="text" id="subject" name="subject" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" name="message" rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                disabled={isSubmitting}

              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4473.191586067013!2d85.89522098713644!3d26.122254934650663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb8f7820403ad%3A0xecf75db061074cb3!2sIMPACT%20LAB!5e1!3m2!1sen!2sin!4v1735120711849!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </Section>
    </PageWrapper>
  )
}

export default EnquiryPage
