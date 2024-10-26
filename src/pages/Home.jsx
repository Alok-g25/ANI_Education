import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/hero_section/Hero'
import FeatureCards from '../Component/FeatureCard'
import Courses from '../Component/course_section/Courses'
import Knowledge from '../Component/Knowledge'
import Testimonial from '../Component/Testimonial'
import Footer from '../Component/Footer'
import InTouch from '../Component/InTouch'

function Home() {
  return (
    <div>
      
      <Hero/>
      <FeatureCards/>
      <Courses/>
      <Knowledge/>
      <Testimonial/>
    </div>
  )
}

export default Home