import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { FiBriefcase, FiMapPin, FiMail, FiUsers, FiTrendingUp, FiHeart, FiStar, FiAward, FiClock, FiChevronRight, FiSend, FiCheckCircle } from "react-icons/fi";
import { GiMicroscope, GiGearHammer, GiWeightScale, GiElectric } from "react-icons/gi";
import { useState } from "react";

const Careers = () => {
  const [hoveredPosition, setHoveredPosition] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);

  // Mouse position for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const positions = [
    {
      id: 1,
      title: "Admin Officer / Assistant",
      type: "Full-time",
      department: "Administration",
      description: "Any 4-year course graduate. Proficient in Word, Excel, and PowerPoint. Responsible for administrative tasks, documentation, and office management.",
      requirements: [
        "Any 4-year course",
        "Proficient in MS Office (Word, Excel, PowerPoint)",
        "Excellent communication skills",
        "Organized and detail-oriented",
        "Fresh graduates are welcome to apply"
      ],
      icon: FiBriefcase,
      color: "from-primary to-[#22C55E]",
      featured: true
    },
    {
      id: 2,
      title: "Calibration Officer",
      type: "Full-time",
      department: "Technical",
      description: "With any technical-related course or experience in calibration. Responsible for performing calibration services and maintaining laboratory equipment.",
      requirements: [
        "Technical-related course or calibration experience",
        "Knowledge of measuring instruments",
        "Attention to detail and precision",
        "Willing to learn and be trained",
        "Fresh graduates are welcome to apply"
      ],
      icon: GiMicroscope,
      color: "from-blue-500 to-cyan-500",
      featured: true
    }
  ];

  const benefits = [
    { icon: FiTrendingUp, title: "Career Growth", description: "Opportunities for professional development and advancement" },
    { icon: FiHeart, title: "Health Benefits", description: "Comprehensive health insurance and wellness programs" },
    { icon: FiAward, title: "Training", description: "Continuous learning and certification programs" },
    { icon: FiClock, title: "Flexible Schedule", description: "Work-life balance with flexible working hours" },
    { icon: FiUsers, title: "Great Team", description: "Collaborative and supportive work environment" },
    { icon: FiStar, title: "Recognition", description: "Performance bonuses and employee recognition" }
  ];

  return (
    <div className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-[#F8FAF0] via-white to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1A2E1F] dark:to-[#0F2A12]">
      {/* Spectacular Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? 'rgba(22, 101, 52, 0.2)' : 'rgba(34, 197, 94, 0.2)'
              } 0%, transparent 70%)`,
            }}
          />
        ))}

        {/* Animated grid */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(22, 101, 52, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(22, 101, 52, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
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

        {/* Career-specific decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-40 h-40 border-2 border-primary/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-20 w-60 h-60 border-2 border-[#22C55E]/20 rounded-full"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header with 3D Effect */}
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary via-[#22C55E] to-primary bg-[length:200%_200%] animate-gradient px-6 py-2 rounded-full mb-4 shadow-lg"
          >
            <FiUsers className="text-white animate-pulse" />
            <span className="text-sm font-medium text-white">JOIN OUR TEAM</span>
            <FiUsers className="text-white animate-pulse" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Elevate Your Career <span className="text-primary relative">
              With Us
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-[#22C55E] to-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            <span className="bg-[#F0FDF4] dark:bg-[#1A2E1F] px-4 py-2 rounded-full text-primary font-medium border border-primary/20">
              WE ARE HIRING!
            </span>
            <span className="bg-[#F0FDF4] dark:bg-[#1A2E1F] px-4 py-2 rounded-full text-primary font-medium border border-primary/20">
              FRESH GRADUATES ARE WELCOME
            </span>
          </motion.div>
        </motion.div>

        {/* Location Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-[#1A2E1F] p-5 rounded-xl border border-[#E8F5E9] dark:border-[#2A3A2E] shadow-lg flex items-center justify-center gap-3">
            <FiMapPin className="text-primary text-xl" />
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Location:</span> Palm Tower, UG07 tower B THE, 7706 Saint Paul Road, VILLAGE, Makati, 1203 Metro Manila
            </p>
          </div>
        </motion.div>

        {/* Open Positions Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <FiBriefcase className="text-primary" />
            Open Positions
            <span className="text-sm font-normal text-gray-500 ml-2">({positions.length} positions available)</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                onHoverStart={() => setHoveredPosition(position.id)}
                onHoverEnd={() => setHoveredPosition(null)}
                onClick={() => setSelectedPosition(selectedPosition === position.id ? null : position.id)}
                className="relative group cursor-pointer"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"
                  animate={{ opacity: hoveredPosition === position.id ? 0.5 : 0 }}
                />
                
                <div className="relative bg-white dark:bg-[#1A2E1F] p-6 rounded-xl border border-[#E8F5E9] dark:border-[#2A3A2E] shadow-xl overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"
                    animate={{ opacity: hoveredPosition === position.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${position.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <position.icon className="text-white text-2xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                            {position.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {position.type}
                            </span>
                            <span className="text-xs bg-gray-100 dark:bg-[#2A3A2E] text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                              {position.department}
                            </span>
                          </div>
                        </div>
                      </div>
                      {position.featured && (
                        <span className="bg-gradient-to-r from-primary to-[#22C55E] text-white text-xs px-3 py-1 rounded-full shadow-lg">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {position.description}
                    </p>

                    <AnimatePresence>
                      {selectedPosition === position.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-[#E8F5E9] dark:border-[#2A3A2E]">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                              <FiCheckCircle className="text-primary" />
                              Requirements:
                            </h4>
                            <ul className="space-y-2 mb-4">
                              {position.requirements.map((req, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                                >
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                  {req}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center justify-between mt-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPosition(selectedPosition === position.id ? null : position.id);
                        }}
                        className="text-primary font-medium flex items-center gap-1 group/btn"
                      >
                        {selectedPosition === position.id ? "Show less" : "View requirements"}
                        <FiChevronRight className={`group-hover/btn:translate-x-1 transition-transform ${selectedPosition === position.id ? "rotate-90" : ""}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Join Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <FiStar className="text-primary" />
            Why Join Us?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-[#1A2E1F] p-5 rounded-xl border border-[#E8F5E9] dark:border-[#2A3A2E] shadow-md hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F0FDF4] dark:bg-[#2A3A2E] rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <benefit.icon className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Email CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-12"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-[#22C55E] to-primary rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />
            
            <div className="relative bg-white dark:bg-[#1A2E1F] p-10 rounded-2xl text-center">
              <div className="w-20 h-20 bg-[#F0FDF4] dark:bg-[#2A3A2E] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FiMail className="text-primary text-4xl" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Join Our Team?
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Send your resume to:
              </p>
              
              <motion.a
                href="mailto:hr@instrutechgroup.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-[#22C55E] text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl group/btn"
              >
                <FiMail className="text-2xl group-hover/btn:rotate-12 transition-transform" />
                hr@instrutechgroup.com
                <FiSend className="group-hover/btn:translate-x-2 transition-transform" />
              </motion.a>
              
              <p className="text-sm text-gray-500 mt-6">
                We look forward to hearing from you! ✨
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-4 bg-gradient-to-r from-primary/5 to-[#22C55E]/5 rounded-xl border border-primary/20"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ✦ For inquiries, email us at <span className="text-primary font-semibold">hr@instrutechgroup.com</span> ✦
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Add keyframes for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Careers;