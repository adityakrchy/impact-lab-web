"use client"
import React from 'react';
import { Button } from '@/components/ui/button'; // Ensure these components are correctly imported
import { Input } from '@/components/ui/input'; // Ensure these components are correctly imported
import { Textarea } from '@/components/ui/textarea'; // Ensure these components are correctly imported
import { MapPin, Phone, Mail } from 'lucide-react'; // Example icon imports (replace with actual icons)

const page = () => {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: '',
    // });
    // // @typescript-eslint/no-explicit-any
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };
    // // @typescript-eslint/no-explicit-any
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    // };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                    Get in Touch with Us
                </h1>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                    We&apos;d love to hear from you!
                </h3>
                <p className="text-lg text-gray-600 text-center mb-12">
                    Whether you have questions, feedback, or need assistance, we&apos;re here to help.
                    Reach out to us through the form below, and our team will get back to you as soon
                    as possible. Your thoughts and inquiries are important to us, and we&apos;re committed
                    to providing the best support possible.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    // value={formData.name}
                                    // onChange={handleChange}
                                    required
                                    className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    // value={formData.email}
                                    // onChange={handleChange}
                                    required
                                    className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Subject
                                </label>
                                <Input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    // value={formData.subject}
                                    // onChange={handleChange}
                                    required
                                    className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    // value={formData.message}
                                    // onChange={handleChange}
                                    required
                                    className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full py-3 px-6 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Map and Contact Info */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="h-64 bg-gray-300">
                            {/* Replace the src URL with your actual Google Maps embed URL */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1661840581!2d88.36869661495453!3d22.572736785181472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a67e2d9bef%3A0x2a4a6e0134744c81!2sImpact%20Lab!5e0!3m2!1sen!2sin!4v1625671681977!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="p-6 space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <MapPin className="w-6 h-6 text-gray-600 mr-3 mt-1" />
                                    <p className="text-gray-700">123 Impact Street, Innovation City, Tech State 12345</p>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-6 h-6 text-gray-600 mr-3" />
                                    <p className="text-gray-700">+1 (555) 123-4567</p>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-6 h-6 text-gray-600 mr-3" />
                                    <p className="text-gray-700">contact@impactlab.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
