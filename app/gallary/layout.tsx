import { Metadata } from "next"

export const metadata : Metadata = {
    title: 'Gallery | Impact Lab',
    description: 'Gallery @ Impact Lab',
    keywords: 'impact,lab,gallery',
}

export default function GalleryLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
        {children}
      </div>
    )
  }
  
  