import React from 'react'
import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from 'framer-motion'

const Styles = {
     section: "py-20",
  div: "flex flex-col items-center justify-center px-6 w-full",
  sectionTitle: "text-3xl md:text-4xl lg:text-6xl font-bold mb-12",
  subtext: "text-gray-600 text-center text-lg md:text-xl md:w-3/4 mb-8",
  Servicesgrid: "grid  md:grid-cols-2 gap-10 text-center",
  SerivceCard:
    "bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition p-6 border",
  icon: "mx-auto my-3 w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center",
  cardTitle: "text-xl lg:text-2xl text-gray-800 font-bold mb-2",

  tooGrid  : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6",
  icons : "mx-auto my-3 w-24 h-24 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center hover:bg-indigo-200"
}


const TechExpertise = () => {
  return (
   <motion.section 
    initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay : 0.3 }}
   className={Styles.section}>
    <div className={Styles.div}>
        <h2 className={Styles.sectionTitle}>
            Technologies & Tools
        </h2>
        <p className={Styles.subtext}>
            These are the tools and technologies I use to craft modern web applications
        </p>

        <div className={Styles.tooGrid}>
          {[<FaReact size={40}/>,<SiTailwindcss size={40}/>,<DiJavascript size={40}/>,<FaGitAlt size={40}/>, <IoLogoGithub size={40}/>, <FaNodeJs size={40}/>, <TbBrandFramerMotion size={40}/>]
          .map((tool, index)=> (
            <div key={index} className={Styles.icons}>

              {tool}

          
              
            </div>
          ))
          }
        </div>
    </div>
   </motion.section>
  )
}

export default TechExpertise