"use client"
import { Computer, MessageSquare, Users, Calculator, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion';
import PageWrapper from '@/components/layout/PageWrapper';
import Section from '@/components/layout/Section';
import { commonStyles } from '@/lib/styles';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';

export default function CoursesPage() {
  const courses = [
    {
      name: "BS-CIT (IT Skills)",
      icon: Computer,
      description: "The BS-CIT course focuses on developing essential IT skills required in today's digital world. Students will learn computer fundamentals, office productivity tools, basic programming concepts, and internet technologies.",
      topics: [
        "Computer Basics",
        "Microsoft Office Suite",
        "Introduction to Programming",
        "Web Technologies",
        "Data Management",
        "Cybersecurity Fundamentals"
      ],
      color: "from-blue-500 to-cyan-400",
      borderColor: "border-blue-100 hover:border-blue-200",
      image: "/assets/coursebanner.jpg"
    },
    {
      name: "BS-CLS (Language Skills)",
      icon: MessageSquare,
      description: "BS-CLS is designed to enhance communication skills in both English and Hindi. The course covers reading, writing, speaking, and listening skills, preparing students for effective communication in professional settings.",
      topics: [
        "Grammar and Vocabulary",
        "Reading Comprehension",
        "Writing Skills",
        "Public Speaking",
        "Business Communication",
        "Intercultural Communication"
      ],
      color: "from-purple-500 to-pink-400",
      borderColor: "border-purple-100 hover:border-purple-200",
      image: "/assets/coursebanner.jpg"
    },
    {
      name: "BS-CSS (Soft Skills)",
      icon: Users,
      description: "The BS-CSS course focuses on developing crucial soft skills that are essential for personal and professional success. Students will learn about teamwork, leadership, problem-solving, and other interpersonal skills.",
      topics: [
        "Time Management",
        "Teamwork and Collaboration",
        "Leadership Skills",
        "Critical Thinking",
        "Emotional Intelligence",
        "Presentation Skills"
      ],
      color: "from-orange-500 to-amber-400",
      borderColor: "border-orange-100 hover:border-orange-200",
      image: "/assets/coursebanner.jpg"
    },
    {
      name: "BS-CFA (Financial Accounting)",
      icon: Calculator,
      description: "The BS-CFA course provides comprehensive training in financial accounting with a focus on Tally software and GST concepts. Students will gain practical skills in managing accounts and understanding tax implications.",
      topics: [
        "Introduction to Financial Accounting",
        "Tally Software Fundamentals",
        "GST Concepts and Application",
        "Bookkeeping and Journal Entries",
        "Financial Statements Preparation",
        "Tax Filing and Compliance"
      ],
      color: "from-green-500 to-emerald-400",
      borderColor: "border-green-100 hover:border-green-200",
      image: "/assets/coursebanner.jpg"
    }
  ];

  return (
    <PageWrapper>
      <Section
        title="Our Courses"
        subtitle="Explore our wide range of professional courses"
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative group"
            >
              <div className={cn(
                commonStyles.card,
                course.borderColor,
                "overflow-hidden cursor-pointer"
              )}>
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-20`} />
                  <img 
                    src={course.image} 
                    alt={course.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent`} />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`
                      w-12 h-12 flex items-center justify-center rounded-full 
                      bg-gradient-to-br ${course.color} text-white
                      shadow-lg group-hover:scale-110 transition-transform duration-300
                    `}>
                      <course.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900">
                      {course.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 group-hover:text-gray-700 mb-6">
                    {course.description}
                  </p>

                  {/* Topics Section */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Key Topics:</h4>
                    <ul className="space-y-2">
                      {course.topics.map((topic, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center text-gray-600 group-hover:text-gray-700"
                        >
                          <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                          {topic}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-6 flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        px-4 py-2 rounded-lg text-white
                        bg-gradient-to-r ${course.color}
                        hover:shadow-lg transition-shadow duration-300
                      `}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </PageWrapper>
  );
}

