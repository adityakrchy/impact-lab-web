import { Computer, MessageSquare, Users } from 'lucide-react'
import DemoCarousel from '@/components/Carousel';


export default function Home() {
  return (
    <div>
      {/* Carousel Section */}
      <DemoCarousel />

      {/* About Impact Lab
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <blockquote className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">About Impact Lab</h2>
              <p className="text-gray-700 leading-relaxed">
                "Impact Lab is committed to nurturing the potential of Bihar’s youth by equipping them with
                essential life, communication, and digital skills. As a leading Skill Development Training
                Center, we aim to create a skilled workforce ready to meet the demands of the modern job market."
              </p>
            </blockquote>
          </div>
        </div>
      </section> */}



      {/* Key Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Computer className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">BS-CIT (IT Skills)</h3>
              <p className="text-gray-600">Enhance your computer and information technology skills.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">BS-CLS (Language Skills)</h3>
              <p className="text-gray-600">Improve your communication and language proficiency.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">BS-CSS (Soft Skills)</h3>
              <p className="text-gray-600">Develop essential soft skills for professional success.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">BS-CFA (Tally with GST)</h3>
              <p className="text-gray-600">Gain a deeper understanding of tally with GST.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Success Stories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">&quot;The BS-CIT course helped me secure a job in the IT industry. I&apos;m grateful for the skills I learned at Impact Lab.&quot;</p>
              <p className="font-semibold">- Rahul S.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">&quot;Thanks to the BS-CLS program, I improved my English skills and now work as a customer service representative.&quot;</p>
              <p className="font-semibold">- Priya M.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">&quot;The soft skills I gained from BS-CSS have been invaluable in my career. I&apos;m now a team leader at a multinational company.&quot;</p>
              <p className="font-semibold">- Amit K.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

