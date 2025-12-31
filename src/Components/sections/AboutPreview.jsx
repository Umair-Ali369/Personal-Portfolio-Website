import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Styles = {
  section: "py-20",
  div: "flex flex-col items-center justify-center gap-3 px-6 w-full",
  sectionTitle: "text-3xl md:text-4xl lg:text-6xl font-bold mb-12",
  subtext: "text-gray-600 text-center text-lg md:text-xl md:w-3/4 mb-8",
  btn: "px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",
};

const AboutPreview = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className={Styles.section}
    >
      <div className={Styles.div}>
        <h2 className={Styles.sectionTitle}>About Me</h2>
        <p className={Styles.subtext}>
          I’m a MERN Stack Developer focused on building modern web applications
          with clean UI, powerful backend logic, and smooth user experiences. I
          love turning ideas into real products and constantly improving my
          craft.
        </p>
        <Link to="/about" className={Styles.btn}>
          Learn More
        </Link>
      </div>
    </motion.section>
  );
};

export default AboutPreview;
