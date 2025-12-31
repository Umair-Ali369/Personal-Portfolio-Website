import React from "react";
import { skills } from "../../Data/SkillsPreview";
import { motion } from 'framer-motion'

const Styles = {
  section: "py-20",
  div: "flex flex-col items-center justify-center px-6 w-full",
  sectionTitle: "text-3xl md:text-4xl lg:text-6xl font-bold mb-12",
  subtext: "text-gray-600 text-center text-lg md:text-xl md:w-3/4 mb-8",
  skillgrid: "grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center",
  skillCard : "bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition p-6 border",
  cardTitle: "text-xl lg:text-2xl text-gray-700 font-bold mb-2",
  skillsGrid: "grid grid-cols-2 gap-4",
  skill: "px-3 py-1 bg-gray-200 text-sm rounded-lg",
};

const SkillsPreview = () => {
  return (
    <motion.section 
     initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay : 0.3 }}
    className={Styles.section}>
      <div className={Styles.div}>
        <h2 className={Styles.sectionTitle}>Skills & Technologies</h2>
        <p className={Styles.subtext}>
          A collection of tools and technologies I use to design, build, and
          ship full-stack applications with performance, scalability, and clean
          aesthetics.
        </p>
        <div className={Styles.skillgrid}>
          {skills.map((skill) => (
            <div key={skill.title} className={Styles.skillCard}>
              <h3 className={Styles.cardTitle}> {skill.title} </h3>
              <div className={Styles.skillsGrid}>
                {skill.skills.map((s) => (
                  <span className={Styles.skill} key={s}>
                    {" "}
                    {s}{" "}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsPreview;
