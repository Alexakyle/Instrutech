import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiAward, FiClock, FiCheckCircle, FiTarget, FiTrendingUp, FiShield } from "react-icons/fi";
import { GiMicroscope, GiWeightScale, GiGearHammer, GiThermometerHot, GiElectric } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Featured = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  
  // Mouse position for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const tabs = [
    { id: 0, label: "Our Mission", icon: FiTarget },
    { id: 1, label: "Our Expertise", icon: GiMicroscope },
    { id: 2, label: "Our Commitment", icon: FiShield },
  ];

  const stats = [
    { icon: FiAward, value: "15+", label: "Years Experience", color: "from-primary to-[#22C55E]" },
    { icon: FiCheckCircle, value: "100+", label: "Clients Served", color: "from-[#22C55E] to-primary" },
    { icon: GiMicroscope, value: "50+", label: "Equipment Types", color: "from-primary to-[#22C55E]" },
    { icon: FiClock, value: "24/7", label: "Support", color: "from-[#22C55E] to-primary" },
  ];

  const services = [
    { icon: GiMicroscope, name: "Dimensional", description: "Gauge blocks, calipers, micrometers" },
    { icon: GiElectric, name: "Electrical", description: "Multimeters, oscilloscopes, LCR meters" },
    { icon: GiThermometerHot, name: "Temperature", description: "Ovens, thermometers, thermocouples" },
    { icon: GiWeightScale, name: "Force & Mass", description: "Scales, torque wrenches, pressure gauges" },
    { icon: GiGearHammer, name: "Mechanical", description: "Hardness testers, force gauges" },
    { icon: FiTarget, name: "Training", description: "ISO 17025, calibration fundamentals" },
  ];

  return (
    <div className="w-full py-10 pb-16 relative overflow-hidden">
      {/* Animated Background Design */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, -150, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -200, 0],
            y: [0, 150, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-[#22C55E]/5 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
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

        {/* Moving diagonal lines */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
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
              className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"
              style={{ 
                top: `${i * 8}%`,
                transform: `rotate(${i * 3}deg)`
              }}
            />
          ))}
        </div>

        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(22, 101, 52, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(22, 101, 52, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        >
          <motion.div
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20px 20px, rgba(34, 197, 94, 0.1) 2px, transparent 2px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary/10 rounded-2xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/3 w-40 h-40 border-2 border-[#22C55E]/10 rotate-45"
        />

        {/* Glowing dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-2 h-2 bg-primary/20 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header with parallax */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            perspective: 1000,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-[#22C55E]/10 backdrop-blur-sm px-6 py-2 rounded-full border border-primary/20 dark:border-primary/30 mb-4"
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-primary rounded-full"
            />
            <span className="text-sm font-medium text-primary">About Instrutech Metrology</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Precision in <span className="text-primary relative">
              Every Measurement
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            ISO/IEC 17025:2017 accredited laboratory providing calibration services, 
            equipment supply, and customized training for various measuring instruments.
          </motion.p>
        </motion.div>

        {/* Interactive Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-sm ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white/70 dark:bg-[#1A2E1F]/70 text-gray-700 dark:text-gray-300 hover:bg-[#F0FDF4]/80 dark:hover:bg-[#2A3A2E]/80 border border-[#E8F5E9] dark:border-[#2A3A2E]"
              }`}
            >
              <tab.icon className="text-lg" />
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Animated Content Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            {activeTab === 0 && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredCard(0)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative bg-white/80 dark:bg-[#1A2E1F]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#E8F5E9] dark:border-[#2A3A2E] shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                    animate={{ opacity: hoveredCard === 0 ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-[#F0FDF4] dark:bg-[#2A3A2E] rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                      <GiMicroscope className="text-primary text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                      Premier Laboratory
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      To become a premier laboratory in the world of metrology, providing 
                      accurate and reliable calibration services to industries worldwide.
                    </p>
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-b-2xl"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredCard === 0 ? "100%" : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredCard(1)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative bg-white/80 dark:bg-[#1A2E1F]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#E8F5E9] dark:border-[#2A3A2E] shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                    animate={{ opacity: hoveredCard === 1 ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#22C55E]/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-[#F0FDF4] dark:bg-[#2A3A2E] rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                      <FiTarget className="text-primary text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                      One-Stop Solution
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Aims to be a complete one-stop calibration service provider for all 
                      your measurement needs, from equipment to training.
                    </p>
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-b-2xl"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredCard === 1 ? "100%" : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredCard(2)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative bg-white/80 dark:bg-[#1A2E1F]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#E8F5E9] dark:border-[#2A3A2E] shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                    animate={{ opacity: hoveredCard === 2 ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-[#F0FDF4] dark:bg-[#2A3A2E] rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                      <FiTrendingUp className="text-primary text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                      Continuous Excellence
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Committed to continuous improvement and maintaining the highest 
                      standards in calibration and metrology services.
                    </p>
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-b-2xl"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredCard === 2 ? "100%" : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </>
            )}

            {activeTab === 1 && (
              <div className="col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/80 dark:bg-[#1A2E1F]/80 backdrop-blur-sm p-6 rounded-xl border border-[#E8F5E9] dark:border-[#2A3A2E] hover:border-primary/50 transition-all group"
                    >
                      <service.icon className="text-primary text-2xl mb-3 group-hover:rotate-12 transition-transform" />
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">{service.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="col-span-3">
                <div className="bg-gradient-to-br from-primary/5 to-[#22C55E]/5 backdrop-blur-sm p-8 rounded-3xl border border-[#E8F5E9] dark:border-[#2A3A2E]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { title: "Quality First", desc: "Quality of products and services always comes first" },
                      { title: "Quick Turnaround", desc: "Quicker turnaround time and delivery of products and services" },
                      { title: "Professional Service", desc: "Professional service will always be given to every customer" },
                      { title: "Customer Care", desc: "Customer's needs are always taken care of" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <FiCheckCircle className="text-white text-sm" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Stats with 3D effect */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.1,
                rotateX: 10,
                rotateY: 10,
                z: 20,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
              className="relative bg-white/80 dark:bg-[#1A2E1F]/80 backdrop-blur-sm p-6 rounded-2xl border border-[#E8F5E9] dark:border-[#2A3A2E] text-center group cursor-pointer shadow-xl hover:shadow-2xl"
            >
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${stat.color.split(' ')[0]} 0%, ${stat.color.split(' ')[2]} 100%)`,
                  filter: "blur(8px)",
                  zIndex: -1,
                }}
              />
              <stat.icon className="text-primary text-3xl mx-auto mb-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-[#22C55E] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button with 3D effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(22, 101, 52, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/about-2")}
            className="relative group bg-gradient-to-r from-primary to-[#22C55E] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transform: "skewX(-20deg)",
              }}
            />
            <span className="relative z-10 flex items-center gap-3">
              Discover Our Story
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiArrowRight className="text-xl" />
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Floating Accreditation Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="flex justify-center mt-8"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-[#22C55E]/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/30 shadow-lg">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FiShield className="text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              ISO/IEC 17025:2017 Accredited Laboratory
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;