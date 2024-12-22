import { GraduationCap, ClipboardCheck, Award, Briefcase } from 'lucide-react'
import { AboutCard } from "@/components/about-card"
import { NotificationCard } from "@/components/notification-card"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-8 text-center">
              About Impact Lab
            </h1>

            <div className="mt-8 space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  At Impact Lab, we envision a future where every youth is empowered with the skills and knowledge to thrive in the modern workforce. We aim to bridge the gap between education and employment, creating opportunities for personal and professional growth.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  Our mission is to provide high-quality, accessible skill training programs that equip young individuals with the tools they need to succeed in their careers. We are committed to fostering a learning environment that encourages innovation, critical thinking, and practical application of skills.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Saat Nishchay Initiative</h2>
                <p className="text-gray-700">
                  Impact Lab is proud to be a part of the government&apos;s &quot;Saat Nishchay&quot; (Seven Resolves) initiative. This comprehensive plan aims to transform Bihar by focusing on youth empowerment, women&apos;s education, rural electrification, clean drinking water, and more. Our programs directly contribute to the youth empowerment and skill development aspects of this initiative.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Goals</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Reduce unemployment by providing relevant, industry-aligned skills training</li>
                  <li>Enhance the employability of youth through comprehensive skill development programs</li>
                  <li>Foster entrepreneurship and innovation among young individuals</li>
                  <li>Contribute to the overall economic growth of Bihar and India</li>
                  <li>Create a skilled workforce ready to meet the challenges of the 21st century</li>
                </ul>
              </section>

              <div className="grid gap-4 md:grid-cols-2 mt-12">
                <AboutCard
                  title="Courses"
                  description="Interested trainees can visit their nearest training center to select a course of their choice"
                  icon={GraduationCap}
                />
                <AboutCard
                  title="Assessment"
                  description="Trainees will be thoroughly assessed through collaborative mechanisms"
                  icon={ClipboardCheck}
                />
                <AboutCard
                  title="Certification"
                  description="Trainees who clear the assessment successfully will be certified"
                  icon={Award}
                />
                <AboutCard
                  title="Employment"
                  description="Certified trainees will be provided with employment opportunities"
                  icon={Briefcase}
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Important Notifications */}
            <div className="rounded-lg bg-[#2563eb] p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">Important Notification</h2>
              <div className="space-y-4 rounded-lg bg-white p-4">
                <NotificationCard
                  date="18th December 2024"
                  title="BSDM/KYP/Patrachar-182/2023-3993, Dated-18.12.2024"
                  isNew
                />
                <NotificationCard
                  date="16th December 2024"
                  title="BSDM/KYP/patrachar-182/2023-3914, Dated: 13.12.2024"
                  isNew
                />
                <NotificationCard
                  date="16th December 2024"
                  title="BSDM/DRCC SERVICES E/01/2024-3874, dated 12.12.2024"
                  isNew
                />
              </div>
            </div>

            {/* News & Events */}
            <div className="rounded-lg bg-[#2563eb] p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">News & Events</h2>
              <div className="space-y-4 rounded-lg bg-white p-4">
                <NotificationCard
                  date="29th November 2018"
                  title="Orientation on Kushal Yuva Program for Learning Facilitators- LF & Center Coordinator of December 2018 Batch held on 29.11.2018 at Niyojan Bhavan, Patna"
                />
                <NotificationCard
                  date="15th October 2018"
                  title="Orientation on Kushal Yuva Program for Learning Facilitators- LF & Center Coordinator of November 2018 Batch held on 15.10.2018 at Niyojan Bhavan, Patna"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

