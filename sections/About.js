import Card from '@/components/Card'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

const About = () => {
  return (
    <div id='about pb-96'>
      <SectionHeader 
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do and what inspires me."
      />

      <div>
        <div className='circle1 bg-red-500/50 h-[400px] w-[400px] rounded-full '></div>
      </div>
    </div>
  )
}

export default About