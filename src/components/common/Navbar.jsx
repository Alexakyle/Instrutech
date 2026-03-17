/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FiDelete, FiMoon, FiSun } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  closeDropdown,
  closeSidebar,
  openSidebar,
  toggleDarkMode,
  uiStore,
} from "../../features/uiSlice";
import { navLinks } from "../../data/navLinks";
import SingleLink from "./SingleLink";

const Navbar = () => {
  const rootDoc = document.querySelector(":root");
  const { darkMode, isSidebarOpen } = useSelector(uiStore);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle
  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  // Store darkmode value to localStorage;
  useEffect(() => {
    if (darkMode) rootDoc.classList.add("dark");
    else rootDoc.classList.remove("dark");
    localStorage.setItem("Instrutech-theme-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleClose = (e) => {
    if (!e.target.classList.contains("link")) {
      dispatch(closeDropdown());
    }
  };

  const handleCloseSidebar = (e) => {
    if (e.target.classList.contains("mobile-modal")) dispatch(closeSidebar());
  };

  // Navbar variants for animation
  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        duration: 0.8 
      }
    }
  };

  return (
    <motion.div
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      className="navbar fixed w-full z-50 top-0 left-0"
      onMouseOver={handleClose}
    >
      {/* Background with blur effect */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg dark:bg-[#1A2E1F]/95" 
          : "bg-white/80 backdrop-blur-sm dark:bg-[#1A2E1F]/80"
      }`} />
      
      {/* Animated gradient line at bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-3 flex-center-between">
        {/* Logo with hover effect */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Link to="/" className="flex-shrink-0 block">
            <img
              src="/images/instrulogo.png"
              alt="Instrutech Logo"
              className="w-auto h-12 object-contain relative z-10"
            />
          </Link>
          {/* Glow effect behind logo */}
          <motion.div
            className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <div className="flex-align-center gap-x-4">
          {/*-------------------------------------- Desktop Menu with hover effects ------------------------------------- */}
          <ul className="hidden md:flex-align-center gap-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredLink(link.id)}
                onHoverEnd={() => setHoveredLink(null)}
                className="relative"
              >
                <SingleLink {...link} />
                
                {/* Animated dot indicator on hover */}
                <AnimatePresence>
                  {hoveredLink === link.id && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </ul>

          {/*---------------------------------------- Mobile Menu with animations ------------------------------------- */}
          <div
            className={`lg:hidden mobile-modal fixed w-screen h-screen top-0 left-0 bg-black/50 z-50 opacity-0 pointer-events-none transition-all duration-500 ${
              isSidebarOpen && "open opacity-100 pointer-events-auto"
            }`}
            onClick={handleCloseSidebar}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: isSidebarOpen ? 0 : "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 h-screen w-full max-w-[350px] bg-white dark:bg-[#1A2E1F] shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile menu header with gradient */}
              <div className="relative h-32 bg-gradient-to-br from-primary to-[#22C55E] p-6 flex items-center justify-between">
                <img
                  src="/images/instrulogo.png"
                  alt="Instrutech Logo"
                  className="w-auto h-10 object-contain brightness-0 invert"
                />
                <button
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
                  onClick={() => dispatch(closeSidebar())}
                >
                  <FiDelete className="text-white text-xl" />
                </button>
                
                {/* Decorative circles */}
                <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-white/10 rounded-full" />
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full" />
              </div>

              {/* Mobile menu links */}
              <div className="p-6 space-y-4">
                {navLinks?.map(({ id, linkText, url, subLinks }, index) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0"
                  >
                    <NavLink
                      to={url}
                      end
                      className={({ isActive }) => 
                        `block text-lg font-medium transition-all duration-300 ${
                          isActive 
                            ? "text-primary pl-4 border-l-4 border-primary" 
                            : "text-gray-700 dark:text-gray-300 hover:text-primary hover:pl-4"
                        }`
                      }
                      onClick={() => dispatch(closeSidebar())}
                    >
                      {linkText}
                    </NavLink>
                    
                    {subLinks?.map(({ id, linkText, url }) => (
                      <NavLink
                        key={id}
                        to={url}
                        end
                        className={({ isActive }) => 
                          `block mt-2 ml-6 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-all ${
                            isActive ? "text-primary font-medium" : ""
                          }`
                        }
                        onClick={() => dispatch(closeSidebar())}
                      >
                        {linkText}
                      </NavLink>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Mobile menu footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 dark:bg-[#2A3A2E]">
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  © 2025 Instrutech Metrology
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex-align-center gap-x-2">
            {/*----------------------------- Dark mode toggle with animation ------------------------------------------------ */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              <div
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#2A3A2E] flex items-center justify-center cursor-pointer border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all relative overflow-hidden"
                onClick={handleDarkMode}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#22C55E]/20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon with rotation animation */}
                <motion.div
                  animate={{ rotate: darkMode ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {darkMode ? 
                    <FiSun className="text-yellow-500 text-lg relative z-10" /> : 
                    <FiMoon className="text-primary text-lg relative z-10" />
                  }
                </motion.div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {darkMode ? "Light mode" : "Dark mode"}
              </div>
            </motion.div>
            
            {/*------------------------------- Mobile Menu Toggle with animation ------------------------- */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden relative group"
            >
              <div
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#2A3A2E] flex items-center justify-center cursor-pointer border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                onClick={() => dispatch(openSidebar())}
              >
                <BiMenu className="text-gray-700 dark:text-gray-300 text-lg" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Menu
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-[#22C55E]"
        style={{ 
          width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` 
        }}
      />
    </motion.div>
  );
};

export default Navbar;