import React from "react";
import { motion } from 'framer-motion'
const Styles = {
    section : "min-h-[80vh] flex flex-col items-center justify-between gap-5 py-20",
      main_heading : "text-4xl md:text-6xl font-bold leading-tight mb-6",
      subHeading : "text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-3 max-w-4xl",
      text : "text-gray-600 text-center text-lg md:w-3/4 mb-8",
}

const ProjectHero = () => {
  return (
    <motion.section 
     initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease : "easeOut" }}
        viewport={{ once : true}}
    className={Styles.section}>
      <h2 className={Styles.main_heading}>Projects That Build My Journey</h2>
      <h5 className={Styles.subHeading}>
        A collection of products, experiments, and real-world applications I
        built to master full-stack development.
      </h5>
      <p className={Styles.text}>
        {" "}
        From clean UI designs to production-ready full-stack systems, these
        projects represent my dedication to learning, improving, and building
        things that solve real problems. Each project helped me think like an
        engineer, designer, and entrepreneur
      </p>
    </motion.section>
  );
};

export default ProjectHero;
