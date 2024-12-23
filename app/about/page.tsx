"use client"
import { GraduationCap, ClipboardCheck, Award, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion';
import PageWrapper from '@/components/layout/PageWrapper';
import Section from '@/components/layout/Section';
import { commonStyles } from '@/lib/styles';
import { fadeIn, staggerContainer } from '@/lib/animations';



export default function AboutPage() {
  return (
    <PageWrapper>
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
          <motion.section variants={fadeIn}>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              At Impact Lab, we envision a future where every youth is empowered with the skills and knowledge to thrive in the modern workforce. We aim to bridge the gap between education and employment, creating opportunities for personal and professional growth.
            </p>
          </motion.section>

          <motion.section variants={fadeIn}>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              Our mission is to provide high-quality, accessible skill training programs that equip young individuals with the tools they need to succeed in their careers. We are committed to fostering a learning environment that encourages innovation, critical thinking, and practical application of skills.
            </p>
          </motion.section>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                title: "Courses",
                description: "Interested trainees can visit their nearest training center to select a course of their choice",
                icon: GraduationCap
              },
              {
                title: "Assessment",
                description: "Trainees will be thoroughly assessed through collaborative mechanisms",
                icon: ClipboardCheck
              },
              {
                title: "Certification",
                description: "Trainees who clear the assessment successfully will be certified",
                icon: Award
              },
              {
                title: "Employment",
                description: "Certified trainees will be provided with employment opportunities",
                icon: Briefcase
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={commonStyles.card}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>
    </PageWrapper>
  );
}

