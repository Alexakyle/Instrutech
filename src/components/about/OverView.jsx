import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { GiMicroscope, GiGearHammer } from "react-icons/gi";
import { useState } from "react";

const OverView = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="pt-20 pb-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-40 right-20 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="flex flex-wrap gap-8 relative">
        {/* Left side - Text content with animations */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 basis-[18rem]"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#F0FDF4] dark:bg-[#1A2E1F] px-4 py-2 rounded-full mb-4"
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-primary rounded-full"
            />
            <span className="text-sm font-medium text-primary">About Us</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Aims to be One-Stop <br />
            <span className="text-primary relative">
              Calibration Service Provider
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2"
          >
            <GiMicroscope className="text-primary" />
            Welcome to INSTRU-TECH PHILIPPINES INC.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-600 dark:text-gray-400 mb-4"
          >
            A Thai-Philippine company with expertise in metrology equipment, specifically 
            dimensional reference measuring equipment such as gauge blocks and surface plates. 
            We are an accredited calibration laboratory committed to precision and excellence.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-600 dark:text-gray-400 mb-4"
          >
            We provide in-house calibration (gauge blocks and small tools) and on-site calibration 
            (surface plates). As an equipment supplier, we offer different types of measuring 
            instruments and reference standards for customers with in-house calibration laboratories.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-600 dark:text-gray-400 mb-6"
          >
            Our customized training programs are based on existing industrial practices as per ISO 
            standards, ensuring traceability of the calibration process.
          </motion.p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-[#15803D] transition-all shadow-lg shadow-primary/30 font-medium flex items-center gap-2 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Learn More About Us
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiArrowRight />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Right side - Image and objectives */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 basis-[18rem]"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl group"
          >
            <img 
              src="/images/about/a2.JPG"
              alt="Calibration Laboratory Interior"
              className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Animated overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Floating badges */}
            <motion.div 
              className="absolute top-4 left-4 bg-white/90 dark:bg-[#1A2E1F]/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="text-xs font-medium text-primary flex items-center gap-1">
                <GiGearHammer className="text-xs" />
                ISO 17025 Certified
              </span>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-4 right-4 bg-white/90 dark:bg-[#1A2E1F]/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <span className="text-xs font-medium text-primary flex items-center gap-1">
                <FiCheckCircle className="text-xs" />
                Accredited Lab
              </span>
            </motion.div>
          </motion.div>

          {/* Objectives section with animations */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 p-5 bg-gradient-to-br from-[#F0FDF4] to-[#E8F5E9] dark:from-[#1A2E1F] dark:to-[#0F2A12] rounded-xl border border-[#E8F5E9] dark:border-[#2A3A2E] relative overflow-hidden group"
          >
            {/* Background pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 10px 10px, #22C55E 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
            />
            
            <div className="relative z-10">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                Our Objectives
              </h3>
              
              <div className="space-y-3">
                {[
                  "Quality of products and services always comes first",
                  "Quicker turnaround time and delivery of products and services",
                  "Professional service will always be given to every customer",
                  "Customer's needs are always taken care of",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-2 group/item"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.5 }}
                      className="w-1.5 h-1.5 bg-primary rounded-full mt-2 group-hover/item:bg-[#22C55E] transition-colors"
                    />
                    <p className="text-sm text-gray-700 dark:text-gray-300 flex-1">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OverView;