import { useState } from "react";
import { 
  GiGearHammer, 
  GiMicroscope, 
  GiWeightScale, 
  GiElectric, 
  GiThermometerHot,
  GiVial,
  GiPlainCircle,
  GiCrosshair,
  GiSpanner
} from "react-icons/gi";
import { FiTool, FiArrowRight, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("dimensional");
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    { id: "dimensional", name: "Dimensional", icon: FiTool, count: 12 },
    { id: "electrical", name: "Electrical", icon: GiElectric, count: 8 },
    { id: "temperature", name: "Temperature", icon: GiThermometerHot, count: 6 },
    { id: "force", name: "Force & Mass", icon: GiWeightScale, count: 7 },
    { id: "analytical", name: "Analytical", icon: GiMicroscope, count: 5 },
    { id: "lapping", name: "Lapping", icon: GiGearHammer, count: 3 },
  ];

  const services = {
    dimensional: [
      { name: "Gauge Blocks", description: "Ceramic / Steel / Carbide (ISO 3650:1998)", icon: FiTool, certified: true },
      { name: "Surface Plates", description: "Granite / Steel calibration", icon: FiTool, certified: true },
      { name: "Pin / Plug Gauges", description: "Precision pin and plug gauge calibration", icon: FiTool, certified: true },
      { name: "Ring / Setting Rings", description: "Thread and plain ring gauges", icon: FiTool, certified: false },
      { name: "Profile Projectors", description: "Optical comparators and measuring microscopes", icon: GiCrosshair, certified: true },
      { name: "Calipers", description: "Vernier / Dial / Digital", icon: FiTool, certified: true },
      { name: "Micrometers", description: "Internal & External micrometers", icon: FiTool, certified: true },
      { name: "Height Gauges", description: "Digital / Dial / Vernier", icon: FiTool, certified: false },
      { name: "Dial Indicators", description: "Test indicators and bore gauges", icon: GiPlainCircle, certified: true },
      { name: "Steel Rules", description: "Precision steel rules and tapes", icon: FiTool, certified: false },
      { name: "Straight Edges", description: "Granite and steel straight edges", icon: FiTool, certified: true },
      { name: "Protractors", description: "Bevel / Digital / Universal", icon: FiTool, certified: false },
    ],
    electrical: [
      { name: "Digital Multimeters", description: "6.5 digit precision multimeters", icon: GiElectric, certified: true },
      { name: "Clamp Meters", description: "AC/DC current measurement", icon: GiElectric, certified: true },
      { name: "LCR Meters", description: "Inductance, capacitance, resistance", icon: GiElectric, certified: true },
      { name: "Insulation Testers", description: "Megger and insulation resistance", icon: GiElectric, certified: true },
      { name: "High Voltage Testers", description: "Withstanding voltage up to 10kV", icon: GiElectric, certified: true },
      { name: "Oscilloscopes", description: "Digital storage oscilloscopes", icon: GiElectric, certified: false },
      { name: "Power Supplies", description: "DC programmable power supplies", icon: GiElectric, certified: false },
      { name: "Function Generators", description: "Arbitrary waveform generators", icon: GiElectric, certified: true },
    ],
    temperature: [
      { name: "Ovens & Incubators", description: "Laboratory ovens and incubators", icon: GiThermometerHot, certified: true },
      { name: "Autoclaves", description: "Steam sterilizers", icon: GiThermometerHot, certified: true },
      { name: "Freezers & Chillers", description: "Ultra-low temperature freezers", icon: GiThermometerHot, certified: true },
      { name: "Liquid Baths", description: "Precision temperature baths", icon: GiThermometerHot, certified: true },
      { name: "Digital Thermometers", description: "Handheld and panel mount", icon: GiThermometerHot, certified: true },
      { name: "Thermocouples", description: "Type K, J, T, R, S", icon: GiThermometerHot, certified: true },
    ],
    force: [
      { name: "Weighing Scales", description: "Analytical and precision balances", icon: GiWeightScale, certified: true },
      { name: "Test Weights", description: "Class F1, F2, M1 test weights", icon: GiWeightScale, certified: true },
      { name: "Torque Wrenches", description: "Click and digital torque tools", icon: GiSpanner, certified: true },
      { name: "Pressure Gauges", description: "Hydraulic and pneumatic", icon: GiPlainCircle, certified: true },
      { name: "Vacuum Gauges", description: "Digital and analog vacuum", icon: GiPlainCircle, certified: true },
      { name: "Hardness Testers", description: "Rockwell, Vickers, Brinell", icon: GiGearHammer, certified: true },
      { name: "Force Gauges", description: "Digital force gauges", icon: GiWeightScale, certified: false },
    ],
    analytical: [
      { name: "pH Meters", description: "Benchtop and portable", icon: GiVial, certified: true },
      { name: "Conductivity Meters", description: "EC/TDS meters", icon: GiVial, certified: true },
      { name: "Spectrophotometers", description: "UV-VIS spectrophotometers", icon: GiMicroscope, certified: true },
      { name: "Refractometers", description: "Digital refractometers", icon: GiMicroscope, certified: false },
      { name: "Viscosity Meters", description: "Rotational viscometers", icon: GiVial, certified: true },
    ],
    lapping: [
      { name: "Gauge Block Lapping", description: "Reconditioning and calibration", icon: GiGearHammer, certified: true },
      { name: "Surface Plate Lapping", description: "Granite surface plate reconditioning", icon: GiGearHammer, certified: true },
      { name: "Precision Lapping", description: "Custom component lapping", icon: GiGearHammer, certified: true },
    ],
  };

  return (
    <div className="relative pt-24 max-w-7xl mx-auto px-4 pb-16 overflow-hidden bg-white dark:bg-[#0F172A]">
      {/* Animated Green Minimal Background - More Visible & Faster */}
      <div className="absolute inset-0">
        {/* Diagonal moving lines - More opaque */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
              className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              style={{ top: `${i * 7}%` }}
            />
          ))}
        </div>

        {/* Vertical moving lines - More opaque */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3,
              }}
              className="absolute w-[2px] h-[200%] bg-gradient-to-b from-transparent via-primary/30 to-transparent"
              style={{ left: `${i * 8}%` }}
            />
          ))}
        </div>

        {/* Floating circles/orbs - More visible and faster */}
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-[30rem] h-[30rem] bg-[#22C55E]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/4 w-[25rem] h-[25rem] bg-[#22C55E]/15 rounded-full blur-3xl"
        />

        {/* Grid pattern - More visible */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 15px 15px, rgba(22, 101, 52, 0.2) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Additional moving particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="p-3 bg-[#F0FDF4] dark:bg-[#1A2E1F] rounded-2xl"
          >
            <FiTool className="text-primary text-3xl" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Calibration & <span className="text-primary">Lapping</span>
          </h1>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="p-3 bg-[#F0FDF4] dark:bg-[#1A2E1F] rounded-2xl"
          >
            <GiMicroscope className="text-primary text-3xl" />
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          ISO/IEC 17025:2017 accredited laboratory providing precision calibration services 
          with <span className="text-primary font-semibold">fast turnaround</span> and 
          <span className="text-primary font-semibold"> certified results</span>
        </motion.p>

        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 h-1 w-24 bg-gradient-to-r from-primary to-[#22C55E] mx-auto rounded-full"
        />
      </motion.div>

      {/* Interactive Category Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-3 mb-10 relative z-10"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat.id)}
            className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 ${
              activeCategory === cat.id
                ? "bg-primary text-white shadow-lg shadow-primary/30"
                : "bg-white/80 dark:bg-[#1A2E1F]/80 text-gray-700 dark:text-gray-300 hover:bg-[#F0FDF4]/80 dark:hover:bg-[#2A3A2E]/80 border border-[#E8F5E9] dark:border-[#2A3A2E]"
            }`}
          >
            <cat.icon className="text-xl" />
            <span>{cat.name}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              activeCategory === cat.id
                ? "bg-white/20 text-white"
                : "bg-[#F0FDF4] dark:bg-[#2A3A2E] text-primary"
            }`}>
              {cat.count}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Services Grid with Animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10"
        >
          {services[activeCategory]?.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative bg-white dark:bg-[#1A2E1F] p-6 rounded-2xl border border-[#E8F5E9] dark:border-[#2A3A2E] hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Minimal green background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#F0FDF4] to-transparent dark:from-[#1A2E1F]/50 dark:to-transparent"
                animate={{
                  opacity: hoveredCard === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: hoveredCard === index ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-[#F0FDF4] dark:bg-[#2A3A2E] rounded-xl group-hover:shadow-md transition-shadow"
                  >
                    <service.icon className="text-primary text-2xl" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    {service.certified && (
                      <span className="inline-flex items-center gap-1 text-xs text-primary bg-[#F0FDF4] dark:bg-[#2A3A2E] px-2 py-1 rounded-full mt-1">
                        <FiCheckCircle className="text-xs" />
                        ISO 17025
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {service.description}
                </p>

                {/* Hover indicator - subtle green line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-[#22C55E] rounded-b-2xl"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredCard === index ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10"
      >
        {[
          { value: "15+", label: "Years Experience", icon: FiTool },
          { value: "500+", label: "Clients Served", icon: FiCheckCircle },
          { value: "50+", label: "ISO Standards", icon: GiMicroscope },
          { value: "24/7", label: "Support Available", icon: FiCalendar },
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-white dark:bg-[#1A2E1F] p-6 rounded-2xl border border-[#E8F5E9] dark:border-[#2A3A2E] text-center group cursor-pointer overflow-hidden"
          >
            {/* Hover gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#F0FDF4] to-transparent dark:from-[#1A2E1F]/50 dark:to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="relative z-10">
              <stat.icon className="text-primary text-3xl mx-auto mb-2 group-hover:rotate-12 transition-transform" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Banner - Original Design */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-16 bg-gradient-to-r from-primary to-[#22C55E] p-8 rounded-3xl text-white relative overflow-hidden group z-10"
      >
        <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Need Custom Calibration?</h2>
            <p className="text-white/90">Get a quote within 24 hours for your specific requirements</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center gap-2"
          >
            Request Quote
            <FiArrowRight />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;