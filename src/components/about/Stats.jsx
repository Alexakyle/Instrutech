import { motion } from "framer-motion";
import { FiAward, FiClock, FiUsers, FiCheckCircle } from "react-icons/fi";
import { GiMicroscope, GiWeightScale } from "react-icons/gi";
import { useState } from "react";

const Stats = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <div className="pt-10 pb-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#22C55E]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#F0FDF4] dark:bg-[#1A2E1F] px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-primary">About us</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Precision in Every Measurement <br /> 
            <span className="text-primary relative">
              Excellence in Every Service
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            ISO/IEC 17025:2017 accredited laboratory providing calibration services, 
            equipment supply, and customized training for various measuring instruments.
          </motion.p>
        </motion.div>
      </div>
      
      <div className="flex flex-wrap gap-24 mt-16 relative">
        {/* Left side - Image with animated stats card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex-1 basis-[18rem] group"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/images/about/a1.jpg"
              alt="Calibration Laboratory Equipment"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute w-4/5 p-4 -translate-x-1/2 rounded-2xl -bottom-10 left-1/2 bg-gradient-to-r from-primary to-[#22C55E] text-white shadow-2xl"
          >
            <div className="gap-3 flex-center-between">
              <div className="flex items-center gap-2">
                <FiAward className="text-2xl" />
                <h1 className="font-semibold text-sm">
                  ISO/IEC 17025:2017
                </h1>
              </div>

              <div className="text-right">
                <motion.p 
                  className="text-2xl font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                >
                  15+
                </motion.p>
                <p className="text-xs text-white/80">Years of Excellence</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Stats and progress bars */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex-1 basis-[22rem]"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <GiMicroscope className="text-primary" />
              Our Commitment to Quality
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              As a Thai-Philippine company, we specialize in dimensional reference measuring equipment 
              including gauge blocks and surface plates. We provide both in-house and on-site calibration services.
            </p>
          </div>

          <div className="space-y-5">
            {[
              { label: "ISO/IEC 17025:2017 Compliance", value: 100, icon: FiAward },
              { label: "Client Satisfaction Rate", value: 98, icon: FiUsers },
              { label: "On-Time Delivery", value: 95, icon: FiClock },
              { label: "Trained Professionals", value: 100, icon: FiCheckCircle },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
                className="relative"
              >
                <div className="flex-center-between mb-2">
                  <div className="flex items-center gap-2">
                    <stat.icon className={`text-primary transition-all duration-300 ${hoveredStat === index ? 'rotate-12 scale-110' : ''}`} />
                    <h1 className="font-semibold capitalize text-gray-700 dark:text-gray-300">
                      {stat.label}
                    </h1>
                  </div>
                  <motion.h1 
                    className="font-bold text-primary"
                    animate={{ scale: hoveredStat === index ? 1.2 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.value}%
                  </motion.h1>
                </div>
                <div className="w-full h-3 overflow-hidden rounded-full bg-gray-100 dark:bg-dark-light relative">
                  <motion.div 
                    className="h-full rounded-full bg-gradient-to-r from-primary to-[#22C55E] relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div 
                      className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full"
                      animate={{ 
                        x: [0, 10, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick stats cards */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { value: "500+", label: "Clients Served", icon: FiUsers },
              { value: "50+", label: "Equipment Types", icon: GiWeightScale },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-4 bg-white dark:bg-[#1A2E1F] rounded-xl border border-[#E8F5E9] dark:border-[#2A3A2E] text-center group cursor-pointer overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#F0FDF4] to-transparent dark:from-[#1A2E1F]/50 dark:to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <stat.icon className="text-primary text-2xl mx-auto mb-2 group-hover:rotate-12 transition-transform" />
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;