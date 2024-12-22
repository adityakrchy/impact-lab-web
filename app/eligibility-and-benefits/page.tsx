import { CheckCircle, Gift } from 'lucide-react'

export default function page() {
  const eligibilityCriteria = [
    "Age: 15-28 years (General Category)",
    "Age: 15-33 years (OBC/SC/ST Categories)",
    "Educational Qualification: 10th pass or equivalent",
    "Domicile: Resident of Bihar",
    "Income: Annual family income not exceeding ₹1,50,000"
  ]

  const benefits = [
    {
      name: "Free Training",
      description: "All courses are provided free of cost to eligible candidates."
    },
    {
      name: "Stipend",
      description: "Students receive a monthly stipend to support their studies."
    },
    {
      name: "Laptop/Tablet",
      description: "Top performers receive laptops or tablets as rewards."
    },
    {
      name: "Mobile Phone",
      description: "Successful completion of the course may result in a mobile phone reward."
    },
    {
      name: "Additional Training",
      description: "Opportunity to receive additional training in GST and Tally."
    },
    {
      name: "Job Assistance",
      description: "Career guidance and job placement assistance after course completion."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Eligibility & Benefits</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
        <ul className="space-y-2">
          {eligibilityCriteria.map((criteria, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span>{criteria}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <Gift className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">{benefit.name}</h3>
              </div>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

