import { type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function AboutCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="flex items-start gap-4 p-4">
      <div className="rounded-lg text-[#F4A261]">
        <Icon size={32} />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  )
}

