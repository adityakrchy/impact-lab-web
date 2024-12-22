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
  
  