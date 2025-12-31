import React from 'react'
import { Link } from 'react-router-dom'

const Styles = {
    cardDiv : "bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition p-6 border",
    title : "text-xl lg:text-2xl text-gray-700 font-bold mb-2",
    description : "text-gray-600  text-sm md:text-base mb-4",
    techs : "flex gap-2 flex-wrap mb-4",
    t : "px-3 py-1 bg-gray-200 text-sm rounded-lg",
    detialsBtn : 'text-blue-600 font-medium hover:underline'
}

const ProjectCard = ({project}) => {
  return (
    <div className={Styles.cardDiv}>
        <h3 className={Styles.title}> {project.title} </h3>
        <p className={Styles.description}> {project.desc} </p>
        {/* Tech Pills */}
        <div className={Styles.techs}>
            {project.tech.map((t)=> (
                <span key={t} className={Styles.t}>
                    {t}
                </span>
            ))}
        </div>

        {/* View Project Button */}
        <Link to='/projects' className={Styles.detialsBtn}>
         View Details
        </Link>
    </div>
  )
}

export default ProjectCard