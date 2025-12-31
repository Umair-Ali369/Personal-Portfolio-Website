import React from "react";
import Image from "../../../assets/image.png";
import { motion } from "framer-motion";

const Styles = {
  section:
    "min-h-[80vh] flex flex-col md:flex-row items-center  justify-center md:justify-between gap-10 pt-10 lg:py-20",
  badge: "text-blue-600 font-medium mb-3",
  main_heading: "text-3xl md:text-5xl font-bold leading-tight mb-6",
  subtext: "text-gray-600 text-lg md:w-3/4 mb-8",
};

const AboutHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={Styles.section}
    >
      <div className="flex-1">
        <h1 className={Styles.badge}> About Me </h1>
        <h2 className={Styles.main_heading}>
          Crafting Digital Experience with Code, Creativity & Consistency{" "}
        </h2>
        <p className={Styles.subtext}>
          I’m Ali Khan — a frontend-focused full-stack developer who loves
          building clean, functional, and meaningful digital products. I care
          about great UI, smooth UX, and writing code that actually solves real
          problems.
        </p>
      </div>

      {/* right Side */}
      <div className="hidden md:block">
        <img src={Image} alt="Ali Tech Code" className="w-72 md:w-96" />
      </div>
    </motion.section>
  );
};

export default AboutHero;
