'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  age: number
  email: string
  phone: string
  aadhaar: string
  education: string
  category: string
  document: FileList
}

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    setSubmitMessage('Registration submitted successfully!')
    setIsSubmitting(false)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Register for Kushal Yuva Program</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block mb-2">Age</label>
          <input
            type="number"
            id="age"
            {...register('age', { required: 'Age is required', min: { value: 15, message: 'Minimum age is 15' }, max: { value: 33, message: 'Maximum age is 33' } })}
            className="w-full p-2 border rounded"
          />
          {errors.age && <p className="text-red-500 mt-1">{errors.age.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { required: 'Phone number is required', pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' } })}
            className="w-full p-2 border rounded"
          />
          {errors.phone && <p className="text-red-500 mt-1">{errors.phone.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="aadhaar" className="block mb-2">Aadhaar Number</label>
          <input
            type="text"
            id="aadhaar"
            {...register('aadhaar', { required: 'Aadhaar number is required', pattern: { value: /^[0-9]{12}$/, message: 'Invalid Aadhaar number' } })}
            className="w-full p-2 border rounded"
          />
          {errors.aadhaar && <p className="text-red-500 mt-1">{errors.aadhaar.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="education" className="block mb-2">Highest Education</label>
          <select
            id="education"
            {...register('education', { required: 'Education is required' })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select your highest education</option>
            <option value="10th">10th Pass</option>
            <option value="12th">12th Pass</option>
            <option value="graduate">Graduate</option>
            <option value="postgraduate">Post Graduate</option>
          </select>
          {errors.education && <p className="text-red-500 mt-1">{errors.education.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block mb-2">Category</label>
          <select
            id="category"
            {...register('category', { required: 'Category is required' })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select your category</option>
            <option value="general">General</option>
            <option value="obc">OBC</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
          </select>
          {errors.category && <p className="text-red-500 mt-1">{errors.category.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="document" className="block mb-2">Upload Documents (PDF only)</label>
          <input
            type="file"
            id="document"
            accept=".pdf"
            {...register('document', { required: 'Document is required' })}
            className="w-full p-2 border rounded"
          />
          {errors.document && <p className="text-red-500 mt-1">{errors.document.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Registration'}
        </button>
      </form>

      {submitMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          {submitMessage}
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Registration Instructions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Ensure all fields are filled correctly.</li>
          <li>Upload all required documents in PDF format.</li>
          <li>Double-check your Aadhaar number and other personal details.</li>
          <li>Make sure you meet the eligibility criteria before applying.</li>
          <li>After submission, you will receive a confirmation email.</li>
        </ul>
      </div>
    </div>
  )
}

