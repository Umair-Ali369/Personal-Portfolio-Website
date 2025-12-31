import React from "react";
import ContactHero from "../Components/sections/Contact Page/ContactHero";
import ContactDetails from "../Components/sections/Contact Page/ContactDetails";
import Availability from "../Components/sections/Contact Page/Availability";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.4 } }}
    >
      <ContactHero />
      <ContactDetails />
      <Availability />
    </motion.main>
  );
};

export default Contact;
