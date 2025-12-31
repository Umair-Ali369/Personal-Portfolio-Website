import React from 'react'
import ProjectCard from '../ProjectCard'
import { projects } from '../../Data/Projects'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Styles = {
    section : "py-20",
    div : "flex flex-col items-center justify-center px-6 w-full",
    sectionTitle : "text-3xl md:text-4xl lg:text-6xl font-bold mb-12",
    projectsGrid : "grid md:grid-cols-3 gap-10",
    button : "px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
}

const ProjectPreview = () => {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay : 0.3 }}
    className={Styles.section}>
        <div className={Styles.div}>
            {/* seciton heading */}
            <h2 className={Styles.sectionTitle} >
                Featured Projects
            </h2>

            {/* Projecs Grid */}
            <div className={Styles.projectsGrid}>
                {projects.map((p)=> (
                    <ProjectCard key={p.id} project={p}/>
                ))}

                
            </div>
            {/* View all projects */}
                <div className=' mt-12'>
                    <Link to='/projects' className={Styles.button}>
                    View All Projects
                    </Link>
                </div>
        </div>
    </motion.section>
  )
}

export default ProjectPreview