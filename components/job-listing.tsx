import { Button } from "@/components/ui/button"

interface JobListingProps {
  title: string
  description: string
}

export function JobListing({ title, description }: JobListingProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="default">Apply Now</Button>
    </div>
  )
}

