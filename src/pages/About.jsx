import React from 'react'
import HeroSection from '../components/HeroSection'

const About = () => {
  const data = {
    name: 'Ecommerce Store'
}
  return (
    <div>
      <HeroSection data = {data} />
    </div>
  )
}

export default About
