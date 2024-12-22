import { Computer, MessageSquare, Users, Calculator } from 'lucide-react'
import { CourseCard } from '@/components/course-card'

export default function page() {
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
            thumbnail: "/assets/coursebanner.jpg"
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
            thumbnail: "/assets/coursebanner.jpg"

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
            thumbnail: "/assets/coursebanner.jpg"

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
            thumbnail: "/assets/coursebanner.jpg"

        }
    ]

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-12 text-center">Our Courses</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
        </div>
    )
}

