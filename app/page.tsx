'use client'

import { Computer, MessageSquare, Users, BookOpen, GraduationCap, Award, Briefcase, Phone } from 'lucide-react'
import DemoCarousel from '@/components/Carousel'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <DemoCarousel />

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Empower your future with our comprehensive skill development programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Computer className="w-12 h-12" />,
                title: "BS-CIT (IT Skills)",
                description: "Enhance your computer and information technology skills.",
                color: "from-blue-500 to-cyan-400"
              },
              {
                icon: <MessageSquare className="w-12 h-12" />,
                title: "BS-CLS (Language Skills)",
                description: "Improve your communication and language proficiency.",
                color: "from-purple-500 to-pink-400"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "BS-CSS (Soft Skills)",
                description: "Develop essential soft skills for professional success.",
                color: "from-orange-500 to-amber-400"
              },
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: "BS-CFA (Tally with GST)",
                description: "Gain a deeper understanding of tally with GST.",
                color: "from-green-500 to-emerald-400"
              }
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                  <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br ${course.color} text-white`}>
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{course.title}</h3>
                  <p className="text-gray-600">{course.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button className="bg-blue-600 hover:bg-blue-700">View All Courses</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how we&apos;re transforming lives through quality education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                At Impact Lab, we envision a future where every youth is empowered with the skills and knowledge to thrive in the modern workforce.
              </p>
              <Link href="/about">
                <Button variant="outline">Learn More About Us</Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "2000+", label: "Students Trained" },
                // { number: "95%", label: "Placement Rate" },
                // { number: "50+", label: "Corporate Partners" },
                { number: "4.8/5", label: "Student Rating" }
              ].map((stat, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                  <h4 className="text-2xl font-bold text-blue-600">{stat.number}</h4>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility & Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Eligibility & Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check your eligibility and discover program benefits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Free Training Programs",
                  "Placement Assistance",
                  "Industry Certification",
                  "Practical Training"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Award className="w-5 h-5 text-blue-500 mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Eligibility Criteria</h3>
              <ul className="space-y-3">
                {[
                  "Age: 15-33 years",
                  "Education: 10th pass or equivalent",
                  "Domicile: Resident of Bihar",
                ].map((criteria, index) => (
                  <li key={index} className="flex items-center">
                    <GraduationCap className="w-5 h-5 text-blue-500 mr-2" />
                    <span>{criteria}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/eligibility-and-benefits">
                  <Button variant="outline">View Full Details</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career & Enquiry Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg"
            >
              <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Career Opportunities</h3>
              <p className="text-gray-600 mb-6">
                Join our team and make a difference in students&apos; lives. We&apos;re always looking for talented individuals.
              </p>
              <Link href="/career">
                <Button>View Openings</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg"
            >
              <Phone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                Have questions? We&apos;re here to help. Reach out to us for any queries about our programs.
              </p>
              <Link href="/enquiry">
                <Button>Contact Us</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our alumni who transformed their careers through our programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The BS-CIT course helped me secure a job in the IT industry. I'm grateful for the skills I learned at Impact Lab.",
                author: "Rahul S.",
                // role: "Software Developer"
              },
              {
                quote: "Thanks to the BS-CLS program, I improved my English skills and now work as a customer service representative.",
                author: "Priya M.",
                // role: "Customer Service Manager"
              },
              {
                quote: "The soft skills I gained from BS-CSS have been invaluable in my career. I'm now a team leader at a multinational company.",
                author: "Amit K.",
                // role: "Team Leader"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">&quot;{story.quote}&quot;</p>
                <div>
                  <p className="font-bold text-gray-800">{story.author}</p>
                  {/* <p className="text-blue-500">{story.role}</p> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

