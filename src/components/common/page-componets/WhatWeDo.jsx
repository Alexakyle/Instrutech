import { motion } from "framer-motion";
import { GiCrosshair, GiElectric, GiThermometerHot, GiGearHammer, GiWeightScale, GiMicroscope } from "react-icons/gi";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const WhatWeDo = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      id: 1,
      title: "Dimensional and Length",
      icon: GiCrosshair,
      description: "Gauge blocks, calipers, micrometers",
      category: "dimensional",
      image: "https://alsaqrengg.com/wp-content/uploads/2025/08/Dimensional-Calibration-Services.jpg"
    },
    {
      id: 2,
      title: "Electrical/RH",
      icon: GiElectric,
      description: "Multimeters, oscilloscopes, LCR",
      category: "electrical",
      image: "https://static.vecteezy.com/system/resources/thumbnails/024/581/488/small/caucasian-electrician-holding-multimeter-repairing-electrical-equipment-with-expertise-generated-by-ai-free-photo.jpg"
    },
    {
      id: 3,
      title: "Temperature/RH",
      icon: GiThermometerHot,
      description: "Thermometers, chambers, RTDs",
      category: "temperature",
      image: "https://thumbs.dreamstime.com/b/calibration-process-field-conductometer-portable-conductivity-meter-accurate-water-measurements-430722093.jpg"
    },
    {
      id: 4,
      title: "Force, Mass, Pressure",
      icon: GiGearHammer,
      description: "Torque, pressure, force gauges",
      category: "mechanical",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      title: "Analytical",
      icon: GiWeightScale,
      description: "Balances, test weights, mass",
      category: "mass",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="w-full py-20 relative overflow-hidden bg-gradient-to-br from-[#F8FAF0] via-white to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1A2E1F] dark:to-[#0F2A12]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-[#22C55E]/10 rounded-full blur-3xl"
        />

        {/* Moving diagonal lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.5,
              }}
              className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
              style={{ top: `${i * 12}%` }}
            />
          ))}
        </div>

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-[#22C55E]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-primary/30"
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-primary rounded-full"
            />
            <span className="text-sm font-medium text-primary">What We Do</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Precision That
            <span className="relative ml-3">
              <span className="text-primary">Matters</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ISO 17025 accredited calibration services across 6 specialized disciplines
          </p>
        </motion.div>

        {/* Interactive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className="relative group cursor-pointer"
              onClick={() => navigate(`/services/${service.category}`)}
            >
              {/* Background Glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"
                animate={activeIndex === index ? { scale: 1.1 } : { scale: 1 }}
              />

              {/* Card with image background */}
              <div className="relative bg-white dark:bg-[#1A2E1F] rounded-xl border border-[#E8F5E9] dark:border-[#2A3A2E] overflow-hidden hover:border-primary/50 transition-all">
                
                {/* Image background with overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image}
                    alt=""
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1A2E1F] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  {/* Icon with animation */}
                  <motion.div
                    animate={activeIndex === index ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 0.5 }}
                    className="relative mb-4"
                  >
                    <div className="w-14 h-14 bg-white dark:bg-[#2A3A2E] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                      <service.icon className="text-2xl text-primary" />
                    </div>
                    
                    {/* Floating dot */}
                    <motion.div
                      animate={activeIndex === index ? { scale: [1, 1.5, 1] } : {}}
                      className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>

                  {/* Interactive indicator */}
                  <motion.div
                    animate={activeIndex === index ? { x: 5 } : { x: 0 }}
                    className="flex items-center gap-2 text-primary text-sm font-medium"
                  >
                    <span>Learn more</span>
                    <FiArrowRight className="text-sm" />
                  </motion.div>

                  {/* Bottom progress bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-[#22C55E]"
                    initial={{ width: 0 }}
                    animate={{ width: activeIndex === index ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/services")}
            className="relative px-8 py-3 bg-gradient-to-r from-primary to-[#22C55E] text-white rounded-lg font-medium overflow-hidden group shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore All Services
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              style={{ transform: "skewX(-20deg)" }}
            />
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          {["ISO 17025", "PAB Accredited", "10+ Years", "500+ Clients"].map((badge, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="px-3 py-1 bg-white/50 dark:bg-[#1A2E1F]/50 backdrop-blur-sm rounded-full border border-[#E8F5E9] dark:border-[#2A3A2E] text-xs text-gray-600 dark:text-gray-400"
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;