import React, { useState } from "react";
import { navLinks } from "../Data/NavLinks";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

const Styles = {
  header:
    "fixed top-0 left-0 w-full backdrop-blur-lg bg-white/70 shadow-sm z-50",
  div: "mx-auto px-4 md:px-8 lg:px-16 h-16 flex items-center justify-between",
  Logo: "text-xl font-bold tracking-wide",
  nav: "hidden md:flex items-center gap-8 text-sm font-medium",
  navLink: "hover:text-blue-600 transition",
  toggleBTN: "text-2xl md:hidden",

  mobileNav: "md:hidden bg-white border-t shadow-sm px-4 pb-4",
  mobileNavLink: "block py-2 text-gray-700 font-medium hover:text-blue-600",
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={Styles.header}
    >
      <div className={Styles.div}>
        {/* Logo */}
        <Link to="/" className={Styles.Logo}>
          Ali Tech <span className="text-blue-600"> Code </span>
        </Link>

        {/* desktop menu */}
        <nav className={Styles.nav}>
          {navLinks.map((nav) => (
            <Link
              className={Styles.navLink}
              key={nav.name}
              to={nav.link}
              onClick={() => setMenuOpen(false)}
            >
              {nav.name}
            </Link>
          ))}
        </nav>

        {/* toggle btn */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={Styles.toggleBTN}
        >
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className={Styles.mobileNav}>
          {navLinks.map((nav) => (
            <Link
              className={Styles.mobileNavLink}
              key={nav.name}
              to={nav.link}
              onClick={() => setMenuOpen(false)}
            >
              {nav.name}
            </Link>
          ))}
        </nav>
      )}
    </motion.header>
  );
};

export default NavBar;
