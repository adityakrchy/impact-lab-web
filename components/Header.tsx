"use client"
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
subsets: ['latin'],
weight: ['400', '600', '700', '900'],
})

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <h1 className={`${montserrat.className} text-center text-2xl font-bold text-gray-800 mb-4`}>
          Institute of Micro Power and Computer Technology
        </h1>
        <nav className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center group">
              <div className="relative w-14 h-14 mr-3 overflow-hidden rounded-lg">
                <Image 
                  src="/assets/logo1.png" 
                  alt="impact-lab-logo" 
                  fill
                  className="object-cover" 
                />
              </div>
              <div className="flex flex-col">
                <span className={`${montserrat.className} text-2xl tracking-wider font-black text-blue-800`}>
                  IMPACT Lab
                </span>
                <span className={`${montserrat.className} text-xs tracking-[0.2em] text-gray-600 font-bold`}>
                  निशुलक कंप्यूटर प्रशिक्षण केंद्र
                </span>
              </div>
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-6 items-center">
            {[
              { href: "/about", label: "About Us" },
              { href: "/courses", label: "Courses" },
              { href: "/eligibility-and-benefits", label: "Eligibility & Benefits" },
              { href: "/gallary", label: "Gallery" },
              { href: "/career", label: "Career" },
              { href: "/enquiry", label: "Enquiry" },
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-gray-600 hover:text-blue-600 font-semibold text-sm uppercase tracking-wide
                  relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                  after:w-0 hover:after:w-full after:bg-blue-600 
                  after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link 
            href="/enroll" 
            className="hidden md:block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white 
                px-6 py-2 rounded-lg font-semibold text-sm uppercase tracking-wider
                shadow-md hover:shadow-lg transition-all duration-300
                hover:bg-blue-700"
            >
            Enroll Now
            </motion.button>
          </Link>

          <button
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100 py-2"
        >
          {[
            { href: "/about", label: "About Us" },
            { href: "/courses", label: "Courses" },
            { href: "/eligibility-and-benefits", label: "Eligibility & Benefits" },
            { href: "/gallary", label: "Gallery" },
            { href: "/career", label: "Career" },
            { href: "/enquiry", label: "Enquiry" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-4 py-2">
            <Link 
              href="/enroll"
              className="block bg-blue-600 text-white 
                px-4 py-2 rounded-lg font-semibold text-sm text-center
                shadow-md hover:shadow-lg transition-all duration-300
                hover:bg-blue-700"
            >
            Enroll Now
          </Link>
        </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header