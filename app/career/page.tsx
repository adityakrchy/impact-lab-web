"use client"
import { Code, Users, Cog } from 'lucide-react'
import { motion } from 'framer-motion';
import PageWrapper from '@/components/layout/PageWrapper';
import Section from '@/components/layout/Section';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CareerPage() {
  const jobListings = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Skill Development Trainer",
      description: "We are seeking experienced trainers to join our Kushal Yuva Program. The ideal candidate should have expertise in computer science, IT, or related fields.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Program Coordinator",
      description: "We're looking for a dynamic individual to coordinate our various skill development programs, including PMGDISHA and Tally Certification courses.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "IT Support Specialist",
      description: "Join our team to provide technical support for our computer labs and digital literacy programs. Strong troubleshooting skills required.",
      color: "from-green-500 to-emerald-400"
    }
  ]

  return (
    <PageWrapper>
      <Section
        title="Career @ Impact Lab"
        subtitle="Join our team and make a difference"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-lg mb-16 space-y-4"
        >
          <p className="text-lg text-gray-700">
            Impact Lab is run and managed by the Education and Welfare Society, an ISO 9001:2015 Certified Organization. We are a leading institute providing quality and affordable education in Computer Science and Information Technology, tailored to the Indian context.
          </p>
          <p className="text-lg text-gray-700">
            Our organization currently runs the Kushal Yuva Program sponsored by the State Skill Development Mission, Pradhan Mantri Gramin Digital Sakshartha Abhiyan (PMGDISHA), Tally Certification courses, and various other Diploma and Advanced Diploma programs.
          </p>
          <p className="text-lg text-gray-700">
            We are constantly seeking high-caliber, motivated individuals to join our workforce. We encourage prospective employees to search and apply for the positions posted below or to submit your CV for future openings.
          </p>
        </motion.div>

        {/* Current Openings Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Current Openings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobListings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${job.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                  <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br ${job.color} text-white`}>
                    {job.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{job.title}</h3>
                  <p className="text-gray-600 text-center mb-6">{job.description}</p>
                  <div className="flex justify-center">
                    <Button 
                      className={`bg-gradient-to-r ${job.color} text-white hover:shadow-lg transition-shadow duration-300`}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Submit Your Application</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                Position Applied For
              </label>
              <Input type="text" id="position" name="position" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Cover Letter
              </label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <div>
              <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                Upload CV
              </label>
              <Input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" required />
            </div>
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white"
            >
              Submit Application
            </Button>
          </form>
        </motion.div>
      </Section>
    </PageWrapper>
  )
}

