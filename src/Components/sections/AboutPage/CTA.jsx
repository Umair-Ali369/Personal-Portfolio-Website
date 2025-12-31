import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
const CTA = () => {
  const Styles = {
    section: "py-20 flex flex-col items-center justify-center px-6 w-full",
    Title: "text-3xl md:text-4xl lg:text-6xl font-bold mb-12",
    subtext: "text-gray-600 text-center text-lg md:text-xl md:w-3/4 mb-8",
     btnDiv : "flex items-center gap-4",
    btn_primary : "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",
    btn_secondary : "px-6 py-3 border border-gray-400 rounded-lg hover:border-blue-600 hover:text-blue-600 transition",
  };
  return (
    <motion.section 
     initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay : 0.3 }}
    className={Styles.section}>
      <h2 className={Styles.Title}> Let's Build Something Amazing</h2>
      <p className={Styles.subtext}>
        I’m always open for projects, collaborations, or just a good
        conversation.
      </p>
      <div className={Styles.btnDiv}>
        <Link to='/projects' className={Styles.btn_primary}>
         View My Projects
        </Link>
        <Link to='/contact' className={Styles.btn_secondary}> Contact Me</Link>
      </div>
    </motion.section>
  );
};

export default CTA;
