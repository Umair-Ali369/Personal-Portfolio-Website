import React from 'react'
import HeroSection from '../Components/sections/HeroSection'
import ProjectPreview from '../Components/sections/ProjectPreview'
import AboutPreview from '../Components/sections/AboutPreview'
import SkillsPreview from '../Components/sections/SkillsPreview'
import JourneySection from '../Components/sections/JourneySection'
import ServicesSection from '../Components/sections/ServicesSection'
import TechExpertise from '../Components/sections/TechExpertise'
import CTAsection from '../Components/sections/CTAsection'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.main
    initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0, transition : {duration:.6}}}
      exit={{opacity:0, y:-30, transition:{duration:.4}}}
    >
      <HeroSection/>
      <AboutPreview/>
      <ProjectPreview/>
      <SkillsPreview/>
      <JourneySection/>
      <ServicesSection/>
      <TechExpertise/>
      <CTAsection/>
    </motion.main>
  )
}

export default Home