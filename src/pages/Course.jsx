import React from 'react'

import Hero1 from '../Component/hero_section/Hero1'

import Courses1 from '../Component/course_section/Courses1'
import Category from '../Component/Category'
import Teacher from '../Component/Teacher'
import InTouch from '../Component/InTouch'
import AboutSection from '../Component/GetToKnowUs'

function Course() {
  return (
    <div>
        
        <Hero1/>
        <AboutSection/>
        <Courses1/>
        <Category/>
        <Teacher/>        
        
    </div>
  )
}

export default Course