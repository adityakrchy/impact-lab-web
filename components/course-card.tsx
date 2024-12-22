import Image from 'next/image'
import { LucideIcon } from 'lucide-react'

interface CourseCardProps {
  name: string
  icon: LucideIcon
  description: string
  topics: string[]
  thumbnail: string
}

export function CourseCard({ name, icon: Icon, description, topics, thumbnail }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={thumbnail}
          alt={`${name} course thumbnail`}
          layout="fill"
          objectFit="cover"
          className='w-[400px] h-[300px] object-contain '
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Icon className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-xl font-semibold">{name}</h2>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <h3 className="text-lg font-semibold mb-2">Key Topics:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

