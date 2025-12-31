import React from "react";
import { services } from "../../Data/ServicesData";
import { motion } from 'framer-motion'

const Styles = {
  section: "py-20",
  div: "flex flex-col items-center justify-center px-6 w-full",
  sectionTitle: "text-3xl md:text-4xl lg:text-6xl font-bold mb-12",
  subtext: "text-gray-600 text-center text-lg md:text-xl md:w-3/4 mb-8",
  Servicesgrid: "grid  md:grid-cols-2 gap-10 text-center",
  SerivceCard:
    "bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition p-6 border",
  icon: "mx-auto my-3 w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center",
  cardTitle: "text-xl lg:text-2xl text-gray-800 font-bold mb-2",
  cardText: "text-gray-600  text-sm md:text-base mb-4",
};

const ServicesSection = () => {
  return (
    <motion.section 
     initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay : 0.3 }}
    className={Styles.section}>
      <div className={Styles.div}>
        <h2 className={Styles.sectionTitle}>What I Can Do For You</h2>
        <p className={Styles.subtext}>
          I design & develop modern, fast, user friendly digital experiences
          that help brands grow and stand out
        </p>

        <div className={Styles.Servicesgrid}>
          {services.map((s, index) => (
            <div className={Styles.SerivceCard} key={index}>
              <div className={Styles.icon}>
                <s.icon size={30} />
              </div>

              <h3 className={Styles.cardTitle}> {s.title} </h3>
              <p className={Styles.desc}> {s.desc} </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
