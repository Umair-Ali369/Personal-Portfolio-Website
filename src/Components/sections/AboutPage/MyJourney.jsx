import React from 'react'
import { journey } from '../../../Data/JourneyPreview'
import { motion } from 'framer-motion'


const Styles = {
   section: "py-20",
  div: "flex flex-col items-center justify-center px-6 w-full",
  sectionTitle: "text-3xl md:text-4xl lg:text-6xl font-bold mb-12",
  subtext: "text-gray-600 text-center text-lg md:text-xl md:w-3/4 mb-8",
  Journeygrid: "grid md:grid-cols-2 gap-10 text-center",
  Card : "bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition p-6 border flex flex-col items-center justify-center",
  year :"font-bold text-gray-400 text-3xl md:text-4xl mb-4",
  cardTitle: "text-xl lg:text-2xl text-gray-800 font-bold mb-2",
  cardText: "text-gray-600  text-sm md:text-base mb-4"
}

const MyJourney = () => {
  return (
    <motion.section 
     initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay : 0.3 }}
    className={Styles.section}>
      <div className={Styles.div}>
        <h2 className={Styles.sectionTitle}>My Journey</h2>
        <p className={Styles.subtext}>I've been learning, imporving and building every single day, foucs on writting clean code, creating real world projects, and mastering modern technologies</p>

{/* Journey details gird */}
        <div className={Styles.Journeygrid}>
          {journey.map((step)=> (
            <div className={Styles.Card}>
              <span className={Styles.year}> {step.year} </span>
              <h4 className={Styles.cardTitle}> {step.learning} </h4>
              <p className={Styles.cardText}> {step.desc} </p>
            </div>
          ))}

        </div>
      </div>
    </motion.section>
  )
}

export default MyJourney