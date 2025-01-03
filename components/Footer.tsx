import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Impact Lab</h3>
            <p className="text-sm">Empowering Youth Through Skills</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><Link href="/about" className="hover:text-blue-300">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-blue-300">Courses</Link></li>
              <li><Link href="/eligibility-and-benefits" className="hover:text-blue-300">Eligibility & Benefits</Link></li>
              <li><Link href="/gallary" className="hover:text-blue-300">Gallary</Link></li>
              <li><Link href="/career" className="hover:text-blue-300">Career</Link></li>
              <li><Link href="/enquiry" className="hover:text-blue-300">Enquiry</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">P.M. Tank, Bangalitola, Laheriasarai<br /> Darbhanga, Bihar</p>
            <p className="text-sm">Phone: +91 9931467100</p>
            <p className="text-sm">Email: info@impactlab.in</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61571483548348" target='_blank' className="hover:text-blue-300"><Facebook /></a>
              <a href="https://www.instagram.com/labimpact/" target='_blank' className="hover:text-blue-300"><Instagram /></a>
              <a href="https://www.linkedin.com/in/impact-lab-682593313/" target='_blank' className="hover:text-blue-300"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Impact Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

