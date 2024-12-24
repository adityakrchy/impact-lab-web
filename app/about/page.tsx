"use client"
import { GraduationCap, ClipboardCheck, Award, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion';
import PageWrapper from '@/components/layout/PageWrapper';
import Section from '@/components/layout/Section';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function AboutPage() {
  const features = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Courses",
      description: "Interested trainees can visit their nearest training center to select a course of their choice.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: "Assessment",
      description: "Trainees will be thoroughly assessed through collaborative mechanisms to ensure quality learning.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Certification",
      description: "Trainees who clear the assessment successfully will be certified with industry-recognized credentials.",
      color: "from-orange-500 to-amber-400"
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Employment",
      description: "Certified trainees will be provided with employment opportunities and career guidance.",
      color: "from-green-500 to-emerald-400"
    }
  ];

  return (
    <PageWrapper className='mx-auto max-w-7xl'>
      <Section
        title="About Impact Lab"
        subtitle="Learn more about our mission and values"
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          <motion.section variants={fadeIn} className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              At Impact Lab, we envision a future where every youth is empowered with the skills and knowledge to thrive in the modern workforce. We aim to bridge the gap between education and employment, creating opportunities for personal and professional growth.
            </p>
          </motion.section>

          <motion.section variants={fadeIn} className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              Our mission is to provide high-quality, accessible skill training programs that equip young individuals with the tools they need to succeed in their careers. We are committed to fostering a learning environment that encourages innovation, critical thinking, and practical application of skills.
            </p>
          </motion.section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                  <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.color} text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </PageWrapper>
  );
}

