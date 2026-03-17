import { FiArrowRight, FiMessageSquare, FiMail, FiPhone, FiHelpCircle } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuoteSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCallHovered, setIsCallHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gradient-to-r from-primary to-[#22C55E] py-6">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-xl"
        >
          {/* Cute Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 right-0 w-32 h-32 bg-white/15 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                x: [0, -40, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-0 left-0 w-32 h-32 bg-white/15 rounded-full blur-2xl"
            />
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 10px 10px, white 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-3 px-5 py-5">
            {/* Left Side - Cute Icon with Floating Effect */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative"
            >
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <BiMessageDetail className="text-white text-2xl" />
              </div>
              
              {/* Floating mini icons */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                className="absolute -top-1 -right-1 bg-white/20 backdrop-blur-sm p-1.5 rounded-full"
              >
                <FiMail className="text-white text-xs" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="absolute -bottom-1 -left-1 bg-white/20 backdrop-blur-sm p-1.5 rounded-full"
              >
                <FiPhone className="text-white text-xs" />
              </motion.div>
            </motion.div>

            {/* Middle - Cute Content */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-1">
                  <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" />
                  <span className="text-[10px] font-medium text-white">✨ WE'RE HERE TO HELP</span>
                </div>
                
                <h2 className="text-lg font-bold text-white mb-0.5">
                  Need a <span className="text-yellow-300">Quote?</span>
                </h2>
                
                <p className="text-white/90 text-xs max-w-md">
                  Questions about calibration? We've got you covered!
                </p>
              </motion.div>
            </div>

            {/* Right Side - Cute Buttons */}
            <div className="flex flex-row gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={() => navigate("/contact")}
                className="px-3 py-1.5 bg-white text-primary font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-1 text-xs"
              >
                <FiMessageSquare className="text-sm" />
                <span>Quote</span>
                <motion.span animate={{ x: isHovered ? 2 : 0 }}>
                  <FiArrowRight />
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsCallHovered(true)}
                onHoverEnd={() => setIsCallHovered(false)}
                onClick={() => navigate("/contact")}
                className="px-3 py-1.5 bg-transparent border border-white/50 text-white font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-1 text-xs"
              >
                <FiPhone className="text-sm" />
                <span>Call</span>
                <motion.span animate={{ rotate: isCallHovered ? 10 : 0 }}>
                  <FiHelpCircle className="text-xs" />
                </motion.span>
              </motion.button>
            </div>
          </div>

          {/* Cute Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3 px-5 pb-3 text-white/80 text-[10px]"
          >
            <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full">
              <FiMail className="text-white" />
              <span>sales@instrutechgroup.com</span>
            </div>
            <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full">
              <FiPhone className="text-white" />
              <span>(63)2 8403 0292</span>
            </div>
            <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full">
              <span className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
              <span>⏱️ 24h response</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuoteSection;