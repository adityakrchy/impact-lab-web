import { Metadata } from "next"


export const metadata : Metadata = {
    title: 'Enquiry | Impact Lab',
    description: 'Enquiry @ Impact Lab',
    keywords: 'impact,lab,enquiry',
}

export default function ContactLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {children}
      </div>
    )
  }
  
  