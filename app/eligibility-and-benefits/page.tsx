"use client"
import { CheckCircle, Gift,  Wallet, Laptop, Smartphone, BookOpen, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion';
import PageWrapper from '@/components/layout/PageWrapper';
import Section from '@/components/layout/Section';

export default function EligibilityAndBenefits() {
  const benefits = [
    {
      icon: <Gift className="w-12 h-12" />,
      title: "Free Training",
      description: "All courses are provided free of cost to eligible candidates.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Wallet className="w-12 h-12" />,
      title: "Stipend",
      description: "Students receive a monthly stipend to support their studies.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Laptop className="w-12 h-12" />,
      title: "Laptop/Tablet",
      description: "Top performers receive laptops or tablets as rewards.",
      color: "from-orange-500 to-amber-400"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Phone",
      description: "Successful completion of the course may result in a mobile phone reward.",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Additional Training",
      description: "Opportunity to receive additional training in GST and Tally.",
      color: "from-pink-500 to-rose-400"
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Job Assistance",
      description: "Career guidance and job placement assistance after course completion.",
      color: "from-indigo-500 to-blue-400"
    }
  ]

  return (
    <PageWrapper>
      <Section
        title="Eligibility & Benefits"
        subtitle="Learn about who can apply and what benefits you'll receive"
      >
        {/* Eligibility Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-lg mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Eligibility Criteria</h2>
          <div className="space-y-4">
            {[
              "Age: 15-28 years (General Category)",
              "Age: 15-33 years (OBC/SC/ST Categories)",
              "Educational Qualification: 10th pass or equivalent",
              "Domicile: Resident of Bihar",
              "Income: Annual family income not exceeding ₹1,50,000"
            ].map((criteria, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{criteria}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br ${benefit.color} text-white`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
}

