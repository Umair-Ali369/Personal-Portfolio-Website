import React from 'react'
import ProjectHero from '../Components/sections/Projects Page/ProjectHero'
import ProjectsGrid from '../Components/sections/Projects Page/ProjectsGrid'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.main
    initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0, transition : {duration:.6}}}
      exit={{opacity:0, y:-30, transition:{duration:.4}}}
    >
      <ProjectHero/>
      <ProjectsGrid/>
    </motion.main>
  )
}

export default Projects