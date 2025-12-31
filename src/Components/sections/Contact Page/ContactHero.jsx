import React from "react";
import { motion } from "framer-motion";

const Styles = {
  section: " flex flex-col items-center justify-between pt-20 pb-5 gap-5",
  main_heading: "text-4xl md:text-6xl font-bold leading-tight mb-6",
  text: "text-gray-600 text-center text-lg md:w-3/4 mb-8",
};

const ContactHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={Styles.section}
    >
      <h2 className={Styles.main_heading}>
        Let’s Build Something Great Together
      </h2>
      <p className={Styles.text}>
        I’m open to collaborations, freelance work, and full-time opportunities.
        If you have an idea, a project, or just want to say hi — reach out.
      </p>
    </motion.section>
  );
};

export default ContactHero;
