import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Impact Lab',
  keywords: 'impact,lab,about',
}

const layout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default layout