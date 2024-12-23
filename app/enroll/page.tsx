'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { 
  User, Mail, Phone, GraduationCap, Users, FileText, 
  MapPin, Calendar, Book, Building, Home, 
  Clock, Wallet
} from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import Section from '@/components/layout/Section'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { UseFormRegister, FieldErrors } from 'react-hook-form'

type FormData = {
  // Personal Information
  name: string
  dateOfBirth: string
  age: number
  gender: string
  email: string
  phone: string
  alternatePhone: string
  
  // Address Information
  address: string
  city: string
  state: string
  pincode: string

  // Educational Background
  education: string
  institute: string
  yearOfPassing: string
  percentage: string
  
  // Course Preferences
  preferredCourse: string
  preferredBatch: string
  
  // Additional Information
  category: string
  familyIncome: string
  document: FileList
  declaration: boolean
}

type FieldType = {
  name: keyof FormData;
  label: string;
  type: string;
  icon: React.ReactNode;
  placeholder?: string;
  options?: string[];
  validation?: object;
}

type RenderFormFieldProps = {
  field: FieldType;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  index: number;
}

export default function EnrollPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    setSubmitMessage('Registration submitted successfully! Please check your email for further instructions.')
    setIsSubmitting(false)
  }

  const sections: Record<string, FieldType[]> = {
    personal: [
      {
        name: "name",
        label: "Full Name (as per records)",
        type: "text",
        icon: <User className="w-5 h-5 text-gray-500" />,
        placeholder: "Enter your full name",
        validation: { required: 'Name is required' }
      },
      {
        name: "dateOfBirth",
        label: "Date of Birth",
        type: "date",
        icon: <Calendar className="w-5 h-5 text-gray-500" />,
        validation: { required: 'Date of birth is required' }
      },
      {
        name: "gender",
        label: "Gender",
        type: "select",
        icon: <Users className="w-5 h-5 text-gray-500" />,
        options: ["Select gender", "Male", "Female", "Other"],
        validation: { required: 'Gender is required' }
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        icon: <Mail className="w-5 h-5 text-gray-500" />,
        placeholder: "Enter your email",
        validation: {
          required: 'Email is required',
          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
        }
      },
      {
        name: "phone",
        label: "Primary Phone Number",
        type: "tel",
        icon: <Phone className="w-5 h-5 text-gray-500" />,
        placeholder: "Enter your phone number",
        validation: {
          required: 'Phone number is required',
          pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' }
        }
      },
      {
        name: "alternatePhone",
        label: "Alternate Phone Number (Optional)",
        type: "tel",
        icon: <Phone className="w-5 h-5 text-gray-500" />,
        placeholder: "Enter alternate phone number",
      }
    ],
    address: [
      {
        name: "address",
        label: "Complete Address",
        type: "textarea",
        icon: <Home className="w-5 h-5 text-gray-500" />,
        placeholder: "Enter your complete address",
        validation: { required: 'Address is required' }
      },
      {
        name: "city",
        label: "City",
        type: "text",
        icon: <Building className="w-5 h-5 text-gray-500" />,
        placeholder: "Enter your city",
        validation: { required: 'City is required' }
      },
      {
        name: "state",
        label: "State",
        type: "text",
        icon: <MapPin className="w-5 h-5 text-gray-500" />,
        placeholder: "Enter your state",
        validation: { required: 'State is required' }
      },
      {
        name: "pincode",
        label: "PIN Code",
        type: "text",
        icon: <MapPin className="w-5 h-5 text-gray-500" />,
        placeholder: "Enter PIN code",
        validation: {
          required: 'PIN code is required',
          pattern: { value: /^[0-9]{6}$/, message: 'Invalid PIN code' }
        }
      }
    ],
    education: [
      {
        name: "education",
        label: "Highest Education",
        type: "select",
        icon: <GraduationCap className="w-5 h-5 text-gray-500" />,
        options: ["Select education", "10th", "12th", "Graduate", "Post Graduate"],
        validation: { required: 'Education is required' }
      },
      {
        name: "institute",
        label: "Institute/School Name",
        type: "text",
        icon: <Building className="w-5 h-5 text-gray-500" />,
        placeholder: "Enter your institute name",
        validation: { required: 'Institute name is required' }
      },
      {
        name: "yearOfPassing",
        label: "Year of Passing",
        type: "number",
        icon: <Calendar className="w-5 h-5 text-gray-500" />,
        placeholder: "Enter passing year",
        validation: { required: 'Year of passing is required' }
      },
      {
        name: "percentage",
        label: "Percentage/CGPA",
        type: "text",
        icon: <Book className="w-5 h-5 text-gray-500" />,
        placeholder: "Enter percentage or CGPA",
        validation: { required: 'Percentage/CGPA is required' }
      }
    ],
    course: [
      {
        name: "preferredCourse",
        label: "Preferred Course",
        type: "select",
        icon: <Book className="w-5 h-5 text-gray-500" />,
        options: [
          "Select course",
          "BS-CIT (IT Skills)",
          "BS-CLS (Language Skills)",
          "BS-CSS (Soft Skills)",
          "BS-CFA (Financial Accounting)"
        ],
        validation: { required: 'Course selection is required' }
      },
      {
        name: "preferredBatch",
        label: "Preferred Batch Timing",
        type: "select",
        icon: <Clock className="w-5 h-5 text-gray-500" />,
        options: [
          "Select batch timing",
          "Morning (9 AM - 12 PM)",
          "Afternoon (2 PM - 5 PM)",
          "Evening (6 PM - 9 PM)"
        ],
        validation: { required: 'Batch timing is required' }
      }
    ],
    additional: [
      {
        name: "familyIncome",
        label: "Annual Family Income",
        type: "text",
        icon: <Wallet className="w-5 h-5 text-gray-500" />,
        placeholder: "Enter annual family income",
        validation: { required: 'Family income is required' }
      },
      {
        name: "category",
        label: "Category",
        type: "select",
        icon: <Users className="w-5 h-5 text-gray-500" />,
        options: ["Select category", "General", "OBC", "SC", "ST"],
        validation: { required: 'Category is required' }
      }
    ]
  }

  return (
    <PageWrapper>
      <Section
        title="Enroll in Our Program"
        subtitle="Join our skill development program and transform your future"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sections.personal.map((field, index) => (
                    <RenderFormField key={field.name} field={field} register={register} errors={errors} index={index} />
                  ))}
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Address Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sections.address.map((field, index) => (
                    <RenderFormField key={field.name} field={field} register={register} errors={errors} index={index} />
                  ))}
                </div>
              </div>

              {/* Educational Background */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Educational Background</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sections.education.map((field, index) => (
                    <RenderFormField key={field.name} field={field} register={register} errors={errors} index={index} />
                  ))}
                </div>
              </div>

              {/* Course Preferences */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Course Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sections.course.map((field, index) => (
                    <RenderFormField key={field.name} field={field} register={register} errors={errors} index={index} />
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Additional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sections.additional.map((field, index) => (
                    <RenderFormField key={field.name} field={field} register={register} errors={errors} index={index} />
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="col-span-2"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Documents (PDF only)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FileText className="w-5 h-5 text-gray-500" />
                      </div>
                      <input
                        type="file"
                        accept=".pdf"
                        {...register('document', { required: 'Document is required' })}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    {errors.document && (
                      <p className="mt-1 text-sm text-red-500">{errors.document.message}</p>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Declaration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-4"
              >
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    {...register('declaration', { required: 'Please accept the declaration' })}
                    className="mt-1 mr-2"
                  />
                  <label className="text-sm text-gray-700">
                    I hereby declare that all the information provided above is true to the best of my knowledge.
                    I understand that any false information may result in the rejection of my application.
                  </label>
                </div>
                {errors.declaration && (
                  <p className="text-sm text-red-500">{errors.declaration.message}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </Button>
              </motion.div>
            </form>

            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg"
              >
                {submitMessage}
              </motion.div>
            )}
          </motion.div>

          {/* Instructions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Important Instructions</h2>
            <ul className="space-y-3">
              {[
                "Fill all the mandatory fields marked with *",
                "Ensure your email and phone number are active as they will be used for communication",
                "Upload clear scanned copies of your documents in PDF format",
                "Double-check all information before submission",
                "Keep a note of your registration details for future reference",
                "You will receive a confirmation email after successful submission",
                "Original documents will be verified during the admission process",
                "Incomplete applications will not be processed"
              ].map((instruction, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center text-gray-700"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  {instruction}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>
    </PageWrapper>
  )
}

// Helper component to render form fields
const RenderFormField: React.FC<RenderFormFieldProps> = ({ field, register, errors, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={field.type === 'textarea' ? 'col-span-2' : ''}
    >
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {field.label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {field.icon}
        </div>
        {field.type === 'select' && field.options ? (
          <select
            {...register(field.name, field.validation)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            {field.options.map((option) => (
              <option key={option} value={option === `Select ${field.name}` ? '' : option}>
                {option}
              </option>
            ))}
          </select>
        ) : field.type === 'textarea' ? (
          <Textarea
            {...register(field.name, field.validation)}
            placeholder={field.placeholder}
            className="pl-10"
            rows={4}
          />
        ) : (
          <Input
            type={field.type}
            placeholder={field.placeholder}
            {...register(field.name, field.validation)}
            className="pl-10"
          />
        )}
      </div>
      {errors[field.name] && (
        <p className="mt-1 text-sm text-red-500">
          {errors[field.name]?.message}
        </p>
      )}
    </motion.div>
  )
}

