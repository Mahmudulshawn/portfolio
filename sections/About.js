import Card from '@/components/Card'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <SectionHeader 
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do and what inspires me."
      />

      <Card>
        <div></div>
      </Card>
    </div>
  )
}

export default About