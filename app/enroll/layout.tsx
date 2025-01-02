import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Enrollment | Impact Lab',
    description: 'Enrollment @ Impact Lab',
    keywords: 'impact,lab,emrollment',
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