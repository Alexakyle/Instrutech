import { BiPhone, BiEnvelope, BiMessage, BiMapPin } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const QuickContact = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 relative -mt-10 sm:-mt-32 z-20">
      <div className="bg-white/90 dark:bg-[#1A2E1F]/90 backdrop-blur-lg p-8 rounded-3xl border border-[#E8F5E9] dark:border-[#2A3A2E] shadow-2xl hover:shadow-3xl transition-all duration-500">
        
        {/* Decorative top line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-full"></div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left side - Contact Info with Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10">
            
            {/* Phone */}
            <motion.div 
              className="flex items-center gap-4 group cursor-pointer"
              onMouseEnter={() => setHovered('phone')}
              onMouseLeave={() => setHovered(null)}
              onClick={() => window.location.href = 'tel:+63212345678'}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F0FDF4] to-[#E8F5E9] dark:from-[#1A2E1F] dark:to-[#0F2A12] flex items-center justify-center group-hover:shadow-lg transition-all duration-300 ${hovered === 'phone' ? 'shadow-primary/30' : ''}`}>
                <BiPhone className={`text-2xl text-primary transition-all duration-300 ${hovered === 'phone' ? 'scale-110 rotate-6' : ''}`} />
                {hovered === 'phone' && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                )}
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">Call us</p>
                <p className="font-bold text-gray-800 dark:text-white text-lg group-hover:text-primary transition-colors">(02) 8403 0292</p>
              </div>
            </motion.div>
            
            <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-[#E8F5E9] dark:via-[#2A3A2E] to-transparent"></div>
            
            {/* Email */}
            <motion.div 
              className="flex items-center gap-4 group cursor-pointer"
              onMouseEnter={() => setHovered('email')}
              onMouseLeave={() => setHovered(null)}
              onClick={() => window.location.href = 'mailto:info@instrutech.com'}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F0FDF4] to-[#E8F5E9] dark:from-[#1A2E1F] dark:to-[#0F2A12] flex items-center justify-center group-hover:shadow-lg transition-all duration-300 ${hovered === 'email' ? 'shadow-primary/30' : ''}`}>
                <BiEnvelope className={`text-2xl text-primary transition-all duration-300 ${hovered === 'email' ? 'scale-110 -translate-y-1' : ''}`} />
                {hovered === 'email' && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                )}
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">Email us</p>
                <p className="font-bold text-gray-800 dark:text-white text-lg group-hover:text-primary transition-colors">sales@instrutech.com</p>
              </div>
            </motion.div>
            
            <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-[#E8F5E9] dark:via-[#2A3A2E] to-transparent"></div>
            
            {/* Location */}
            <motion.div 
              className="flex items-center gap-4 group cursor-pointer"
              onMouseEnter={() => setHovered('location')}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F0FDF4] to-[#E8F5E9] dark:from-[#1A2E1F] dark:to-[#0F2A12] flex items-center justify-center group-hover:shadow-lg transition-all duration-300 ${hovered === 'location' ? 'shadow-primary/30' : ''}`}>
                <BiMapPin className={`text-2xl text-primary transition-all duration-300 ${hovered === 'location' ? 'scale-110 translate-y-1' : ''}`} />
                {hovered === 'location' && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#22C55E] rounded-full animate-pulse"></span>
                )}
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">Visit us</p>
                <p className="font-bold text-gray-800 dark:text-white text-lg group-hover:text-primary transition-colors">Palm Towers, Makati City</p>
              </div>
            </motion.div>
            
          </div>
          
          {/* Right side - Animated CTA Button */}
          <motion.button 
            className="relative group bg-gradient-to-r from-primary to-[#22C55E] text-white px-8 py-4 rounded-2xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 overflow-hidden flex items-center gap-3"
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated background effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#22C55E] to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            
            {/* Shine effect */}
            <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-shine"></span>
            
            <BiMessage className="text-xl relative z-10 group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-lg relative z-10">Get a Free Quote</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            
            {/* Floating dots */}
            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white/40 rounded-full"></span>
            <span className="absolute -top-1 -left-1 w-2 h-2 bg-white/40 rounded-full"></span>
          </motion.button>
          
        </div>
        
        {/* Bottom decorative elements */}
        <div className="flex justify-center gap-2 mt-4">
          <span className="w-2 h-2 bg-primary/30 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
        </div>
        
      </div>
    </div>
  );
};

export default QuickContact;