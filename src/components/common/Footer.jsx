/* eslint-disable jsx-a11y/anchor-is-valid */

import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiCheckCircle, FiAward } from "react-icons/fi";
import { GiMicroscope, GiThermometerHot, GiElectric, GiWeightScale } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <footer className="relative w-full bg-gradient-to-b from-white to-gray-50 dark:from-[#0F172A] dark:to-[#0B1120] border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#22C55E]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Animated floating badge */}
        <motion.div
          className="absolute top-8 right-8 hidden lg:block"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="bg-gradient-to-r from-primary to-[#22C55E] text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
            <FiAward className="text-yellow-300" />
            <span className="text-sm font-medium">ISO 17025 Accredited</span>
          </div>
        </motion.div>

        {/* Top decorative line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info - Animated */}
          <motion.div variants={itemVariants} className="space-y-5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative inline-block"
            >
              <Link to="/" className="inline-block">
                <img 
                  src="/images/instrulogo.png" 
                  alt="Instrutech Metrology" 
                  className="h-14 w-auto relative z-10"
                />
              </Link>
              <motion.div
                className="absolute -inset-2 bg-primary/20 rounded-full blur-xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              ISO/IEC 17025:2017 accredited calibration laboratory providing precision calibration services, equipment supply, and training.
            </motion.p>

            {/* Animated contact items */}
            <motion.div variants={itemVariants} className="space-y-3">
              {[
                { icon: FiMapPin, text: "Palm Tower, UG07 tower B THE, Makati City" },
                { icon: FiPhone, text: "(63)2 8403 0292" },
                { icon: FiMail, text: "sales@instrutechgroup.com" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary text-sm" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 flex-1">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links with animations */}
            <motion.div variants={itemVariants} className="flex gap-3 pt-4">
              {[
                { icon: FaFacebook, color: "hover:bg-blue-600" },
                { icon: FaTwitter, color: "hover:bg-sky-500" },
                { icon: FaInstagram, color: "hover:bg-pink-600" },
                { icon: FaLinkedin, color: "hover:bg-blue-700" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gray-100 dark:bg-[#2A3A2E] ${social.color} rounded-xl flex items-center justify-center transition-all hover:shadow-lg hover:text-white group relative overflow-hidden`}
                >
                  <social.icon className="text-gray-600 dark:text-gray-400 group-hover:text-white text-sm relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-[#22C55E] opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Our Services - Animated */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              variants={itemVariants}
              className="text-lg font-bold text-gray-900 dark:text-white mb-6 relative inline-block"
            >
              Our Services
              <motion.div
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </motion.h2>

            <ul className="space-y-3">
              {[
                { icon: GiMicroscope, name: "Dimensional Calibration", color: "from-blue-500 to-cyan-500" },
                { icon: GiElectric, name: "Electrical Calibration", color: "from-yellow-500 to-orange-500" },
                { icon: GiThermometerHot, name: "Temperature Calibration", color: "from-red-500 to-pink-500" },
                { icon: GiWeightScale, name: "Force & Mass Calibration", color: "from-purple-500 to-indigo-500" },

              ].map((service, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="group"
                >
                  <Link
                    to="/services"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    {service.icon && (
                      <div className={`w-6 h-6 bg-gradient-to-r ${service.color} rounded-md flex items-center justify-center text-white text-xs`}>
                        <service.icon className="text-xs" />
                      </div>
                    )}
                    <span className="text-sm">{service.name}</span>
                    <FiArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-xs ml-auto" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links - Animated */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              variants={itemVariants}
              className="text-lg font-bold text-gray-900 dark:text-white mb-6 relative inline-block"
            >
              Quick Links
              <motion.div
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </motion.h2>

            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about-2" },
                { name: "Services", path: "/services" },
                { name: "Certifications", path: "/blog" },
                { name: "Careers", path: "/careers" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="group"
                >
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/60 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all" />
                    <span className="text-sm">{link.name}</span>
                    <FiArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-xs ml-auto" />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Quick contact badge */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-[#22C55E]/5 rounded-xl border border-primary/20"
              whileHover={{ scale: 1.02 }}
            >
              
            </motion.div>
          </motion.div>

          {/* Policies & Certifications - Animated */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              variants={itemVariants}
              className="text-lg font-bold text-gray-900 dark:text-white mb-6 relative inline-block"
            >
              Policies
              <motion.div
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </motion.h2>

            <ul className="space-y-3">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "ISO Accreditation",
                "Quality Policy",
              ].map((policy, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="group"
                >
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    <FiCheckCircle className="text-primary/60 text-xs group-hover:text-primary group-hover:scale-110 transition-all" />
                    <span className="text-sm">{policy}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Certification Badge with Animation */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-5 bg-gradient-to-br from-primary to-[#22C55E] rounded-2xl shadow-xl relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated background particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full"
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                  }}
                />
              ))}

              <div className="relative z-10 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <FiAward className="text-yellow-300 text-2xl" />
                  </motion.div>
                  <h3 className="font-bold">ISO/IEC 17025:2017</h3>
                </div>
                <p className="text-xs text-white/90 mb-2">Laboratory Accreditation</p>
                <p className="text-[10px] text-white/70 font-mono">Lab No. LA-2018-324B</p>
                <motion.div
                  className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="border-t border-gray-200 dark:border-gray-800 relative"
      >
        {/* Animated line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p 
              className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span>© {currentYear} Instrutech Metrology.</span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span>All rights reserved.</span>
            </motion.p>

            <motion.p 
              className="text-xs text-gray-500 dark:text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              Created with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
              <span className="text-primary font-medium">Alexa Kyle Poblacion</span>
            </motion.p>

            <div className="flex gap-6">
              {["Privacy", "Terms", "Sitemap"].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary transition-colors relative group"
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;