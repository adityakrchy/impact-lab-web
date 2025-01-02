import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Career',
    description: 'Career @ Impact Lab',
    keywords: 'impact,lab,career',
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