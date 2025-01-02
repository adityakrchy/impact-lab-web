import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Eligibility and Benefits',
    description: 'Eligibility and Benefits @ Impact Lab',
    keywords: 'impact,lab,eligibility,benefits',
}

const layout = ({children}:{
    children: React.ReactNode
}) => {
  return (
    <div>
    {children}
  </div>
  )
}

export default layout