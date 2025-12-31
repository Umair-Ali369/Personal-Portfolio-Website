import React from "react";
import { motion } from "framer-motion";

const Styles = {
  section: "py-20 flex flex-col items-center justify-center gap-3 px-6 w-full",
  Title: "text-3xl md:text-4xl lg:text-6xl font-bold mb-12",
  subtext: "text-gray-600 text-center text-lg md:text-xl md:w-3/4 mb-8",
};

const WhoIAm = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={Styles.section}
    >
      <h2 className={Styles.Title}>Who I Am</h2>
      <p className={Styles.subtext}>
        I’m a passionate developer who shifted from curiosity to consistency.
        Every day, I push myself to learn, build, break things, fix things, and
        repeat. I don’t just write code— I think about systems, user behavior,
        scalability, and how small details create big impacts.
      </p>
      <p className={Styles.subtext}>
        <strong>My focus is simple:</strong> build products that feel good to
        use. Whether it’s an interactive website, a dashboard, or a backend API
        — I enjoy crafting digital experiences that combine performance with
        beauty.
      </p>
    </motion.section>
  );
};

export default WhoIAm;
