import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const Styles = {
  section: "py-20 flex flex-col items-center justify-center px-6 w-full",
  Title: "text-3xl md:text-4xl lg:text-6xl font-bold mb-12",
  subtext: "text-gray-600 text-center text-lg md:text-xl md:w-3/4 mb-8",

  btn: "px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300",
};

const CTAsection = () => {
  return (
    <motion.section 
     initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay : 0.3 }}
    className={Styles.section}>
      <h2 className={Styles.Title}>Let's Build Something Great Together</h2>
      <p className={Styles.subtext}>
        Wether you want a website, dashboard , or complelte product, I can help
        turn your idea into reality
      </p>
      <Link to="/contact" className={Styles.btn}>
        Get In touch
      </Link>
    </motion.section>
  );
};

export default CTAsection;
