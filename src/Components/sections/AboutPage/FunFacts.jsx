import React from 'react'
import { facts } from '../../../Data/funfacts'
import { motion } from 'framer-motion'

const Styles = {
     section: "py-20 flex flex-col items-center justify-center px-6 w-full",
  title: "text-3xl md:text-4xl lg:text-6xl font-bold mb-12",
  factList : "grid md:grid-cols-2 gap-4 mx-auto",
  fact : "bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition p-6 border text-sm md:text-base text-gray-600"
}

const FunFacts = () => {
  return (
    <motion.section 
     initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay : 0.3 }}
    className={Styles.section}>
        <h2 className={Styles.title}>Beyond The Code</h2>
        <div className={Styles.factList}>
            {facts.map((f)=> (
                <p key={f} className={Styles.fact}> {f} </p>
            ))}
        </div>
    </motion.section>
  )
}

export default FunFacts