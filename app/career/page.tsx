import { JobListing } from "@/components/job-listing"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CareerPage() {
  const jobListings = [
    {
      title: "Skill Development Trainer",
      description: "We are seeking experienced trainers to join our Kushal Yuva Program. The ideal candidate should have expertise in computer science, IT, or related fields."
    },
    {
      title: "Program Coordinator",
      description: "We're looking for a dynamic individual to coordinate our various skill development programs, including PMGDISHA and Tally Certification courses."
    },
    {
      title: "IT Support Specialist",
      description: "Join our team to provide technical support for our computer labs and digital literacy programs. Strong troubleshooting skills required."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Career @ Impact Lab</h1>
        
        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-4">
            Impact Lab is run and managed by the Education and Welfare Society, an ISO 9001:2015 Certified Organization. We are a leading institute providing quality and affordable education in Computer Science and Information Technology, tailored to the Indian context.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our organization currently runs the Kushal Yuva Program sponsored by the State Skill Development Mission, Pradhan Mantri Gramin Digital Sakshartha Abhiyan (PMGDISHA), Tally Certification courses, and various other Diploma and Advanced Diploma programs.
          </p>
          <p className="text-lg text-gray-700">
            We are constantly seeking high-caliber, motivated individuals to join our workforce. We encourage prospective employees to search and apply for the positions posted below or to submit your CV for future openings.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Current Openings</h2>
          {jobListings.map((job, index) => (
            <JobListing key={index} title={job.title} description={job.description} />
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Submit Your Application</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                Position Applied For
              </label>
              <Input type="text" id="position" name="position" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Cover Letter
              </label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <div>
              <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                Upload CV
              </label>
              <Input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" required />
            </div>
            <Button type="submit">Submit Application</Button>
          </form>
        </section>
      </div>
    </div>
  )
}

