"use client"
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg border">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Impact Lab
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link>
          <Link href="/courses" className="text-gray-600 hover:text-blue-600">Courses</Link>
          <Link href="/eligibility-and-benefits" className="text-gray-600 hover:text-blue-600">Eligibility & Benefits</Link>
          <Link href="/gallary" className="text-gray-600 hover:text-blue-600">Gallary</Link>
          <Link href="/career" className="text-gray-600 hover:text-blue-600">Career</Link>
          <Link href="/enquiry" className="text-gray-600 hover:text-blue-600">Enquiry</Link>
          
        </div>
        <Link href="/enroll" className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Enroll Now
        </Link>
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About Us</Link>
          <Link href="/courses" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Courses</Link>
          <Link href="/eligibility" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Eligibility & Benefits</Link>
          <Link href="/register" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Register</Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</Link>
          <Link href="/register" className="block px-4 py-2 bg-blue-600 text-white text-center mt-2 mx-4 rounded hover:bg-blue-700">
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header

