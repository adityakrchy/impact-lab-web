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
  
  