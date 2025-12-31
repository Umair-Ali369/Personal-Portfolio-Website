import React from 'react'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

const Styles = {
    section : "flex flex-col  justify-center items-center py-10 px-5 gap-4 w-full",
    heading : "text-2xl md:text-3xl text-center font-bold text-blue-500 ",
    li : "flex gap-2 px-4 py-2 rounded-sm shadow-md border my-2 text-xl font-semibold "
}
const Availability = () => {
  return (
    <motion.section 
     initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    className={Styles.section}>
        <h2 className={Styles.heading}>Availability</h2>
        <ul>
           {
           [
            " Open for freelance and collaborations",
            "Available for full-time roles",
            "Usually reply within 12–24 hours"
           ].map((i, index) => (
            <li key={index} className={Styles.li}>
                <Check size={30} className='text-green-500'/>
                {i}
            </li>
           ))
           }
        </ul>
    </motion.section>
  )
}

export default Availability