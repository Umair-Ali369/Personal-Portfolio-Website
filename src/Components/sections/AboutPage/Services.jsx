import React from "react";
import { servicesSummary } from "../../../Data/SkillsPreview";
import { motion } from "framer-motion";

const Styles = {
  section: "py-20 flex flex-col items-center justify-center px-6 w-full",

  sectionTitle: "text-3xl md:text-4xl lg:text-6xl font-bold mb-12",
  subtext: "text-gray-600 text-center text-lg md:text-xl md:w-3/4 mb-8",
  Servicesgrid: "grid md:grid-cols-3 gap-10 text-center",
  SerivceCard:
    "bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition p-6 border",
  cardTitle: "text-xl lg:text-2xl text-gray-700 font-bold mb-4",
  serviesList: "flex flex-col text-start items-start gap-3 justify-center ml-10 list-disc",
};

const Services = () => {
  return (
    <motion.section 
     initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay : 0.3 }}
    className={Styles.section}>
      <h2 className={Styles.sectionTitle}>What I Do</h2>

      <div className={Styles.Servicesgrid}>
        {servicesSummary.map((s) => (
          <div className={Styles.SerivceCard}>
            <h4 className={Styles.cardTitle}> {s.title} </h4>
            <ul className={Styles.serviesList}>
              {s.services.map((e) => (
                <li key={e} className="text-sm md:text-base text-gray-600"> {e} </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
