import React from "react";
import AboutHero from "../Components/sections/AboutPage/AboutHero";
import WhoIAm from "../Components/sections/AboutPage/WhoIAm";
import MyJourney from "../Components/sections/AboutPage/MyJourney";
import Services from "../Components/sections/AboutPage/Services";
import FunFacts from "../Components/sections/AboutPage/FunFacts";
import CTA from "../Components/sections/AboutPage/CTA";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.4 } }}
    >
      <AboutHero />
      <WhoIAm />
      <MyJourney />
      <Services />
      <FunFacts />
      <CTA />
    </motion.main>
  );
};

export default About;
