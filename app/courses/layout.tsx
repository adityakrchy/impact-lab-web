import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Courses',
    description: 'Courses - Impact Lab',
    keywords: 'impact,lab,courses',
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