import { BiMap, BiTime, BiPhone, BiEnvelope } from "react-icons/bi";
import { FiMail, FiPhone, FiSmartphone, FiClock, FiMapPin } from "react-icons/fi";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ContactInfo = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
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

  const locations = [
    {
      id: 1,
      country: "Philippines",
      icon: BiMap,
      address: [
        "Palm Tower, UG07 tower B THE,",
        "7706 Saint Paul Road, VILLAGE,",
        "Makati, 1203 Metro Manila"
      ],
      email: "sales@instrutechgroup.com",
      phone: "(63)2 8403 0292",
      mobile: ["(63)917 187 9383 (GLOBE/TM)", "(63)998 982 1012 (SMART/TNT)"],
      color: "from-primary to-[#22C55E]"
    },
    {
      id: 2,
      country: "Bangkok Thailand",
      icon: BiMap,
      address: [
        "449/89 Panya Indra Rd.,",
        "Samwatawantok, Klongsamwa,",
        "Bangkok, Thailand 10510"
      ],
      email: "salesth@instrutechgroup.com",
      phone: "(66)84 722 5335",
      mobile: [],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const workHours = {
    days: "Monday to Friday",
    hours: "8:30am – 5:30pm",
    icon: BiTime
  };

  const emails = [
    "sales@instrutechgroup.com",
    "admin@instrutechgroup.com",
    "salesth@instrutechgroup.com"
  ];

  const phones = [
    { type: "Landline PH", number: "(63)2 8403 0292", icon: FiPhone },
    { type: "Thailand", number: "(66)84 722 5335", icon: FiPhone },
  ];

  const mobiles = [
    { provider: "GLOBE/TM", number: "(63)917 187 9383" },
    { provider: "SMART/TNT", number: "(63)998 982 1012" },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
  };

  return (
    <div className="relative py-16 overflow-hidden bg-gradient-to-br from-[#F8FAF0] via-white to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1A2E1F] dark:to-[#0F2A12]">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Floating orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [1, 1.3, 1],
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
                i % 2 === 0 ? 'rgba(22, 101, 52, 0.1)' : 'rgba(34, 197, 94, 0.1)'
              } 0%, transparent 70%)`,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(22, 101, 52, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(22, 101, 52, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-[#22C55E]/10 px-4 py-2 rounded-full mb-4 border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact <span className="text-primary">Information</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Reach out to us through any of our offices or contact channels. We're here to help!
          </p>
        </motion.div>

        {/* Location Cards with 3D Effect */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
        >
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{
                rotateX,
                rotateY,
                perspective: 1000,
              }}
              onHoverStart={() => setHoveredCard(location.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"
                animate={{ opacity: hoveredCard === location.id ? 0.5 : 0 }}
              />
              
              <div className="relative bg-white dark:bg-[#1A2E1F] p-8 rounded-2xl border border-[#E8F5E9] dark:border-[#2A3A2E] shadow-xl overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
                
                <div className="relative z-10">
                  {/* Header with flag effect */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${location.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <location.icon className="text-white text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        {location.country}
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-primary to-[#22C55E] rounded-full mt-1" />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-6">
                    {location.address.map((line, i) => (
                      <p key={i} className="text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        {i === 0 && <FiMapPin className="text-primary mt-1 flex-shrink-0" />}
                        <span className={i === 0 ? "" : "ml-6"}>{line}</span>
                      </p>
                    ))}
                  </div>

                  {/* Email with copy */}
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 mb-4 p-3 bg-[#F0FDF4] dark:bg-[#2A3A2E] rounded-xl cursor-pointer group/email"
                    onClick={() => handleCopy(location.email)}
                  >
                    <FiMail className="text-primary text-xl" />
                    <span className="text-gray-700 dark:text-gray-300 flex-1">{location.email}</span>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full opacity-0 group-hover/email:opacity-100 transition-opacity">
                      Copy
                    </span>
                  </motion.div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <FiPhone className="text-primary text-xl" />
                    <span className="text-gray-700 dark:text-gray-300">{location.phone}</span>
                  </div>

                  {/* Mobile numbers */}
                  {location.mobile.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-[#E8F5E9] dark:border-[#2A3A2E]">
                      {location.mobile.map((mobile, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2 last:mb-0 cursor-pointer group/mobile"
                          onClick={() => handleCopy(mobile.split(' ')[0])}
                        >
                          <FiSmartphone className="text-primary/70 text-sm" />
                          <span>{mobile}</span>
                          <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full opacity-0 group-hover/mobile:opacity-100 transition-opacity ml-auto">
                            Copy
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Work Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white dark:bg-[#1A2E1F] p-6 rounded-xl border border-[#E8F5E9] dark:border-[#2A3A2E] shadow-lg hover:shadow-xl transition-all group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#F0FDF4] dark:bg-[#2A3A2E] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <FiClock className="text-primary text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">Work Hours</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Monday to Friday</p>
            <p className="text-primary text-xl font-bold mt-2">8:30am – 5:30pm</p>
          </motion.div>

          {/* Email Addresses Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white dark:bg-[#1A2E1F] p-6 rounded-xl border border-[#E8F5E9] dark:border-[#2A3A2E] shadow-lg hover:shadow-xl transition-all group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#F0FDF4] dark:bg-[#2A3A2E] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <BiEnvelope className="text-primary text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">Email Addresses</h4>
            </div>
            <div className="space-y-3">
              {emails.map((email, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 cursor-pointer group/email"
                  onClick={() => handleCopy(email)}
                >
                  <FiMail className="text-primary/70 text-sm" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{email}</span>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full opacity-0 group-hover/email:opacity-100 transition-opacity ml-auto">
                    Copy
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phone Numbers Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white dark:bg-[#1A2E1F] p-6 rounded-xl border border-[#E8F5E9] dark:border-[#2A3A2E] shadow-lg hover:shadow-xl transition-all group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#F0FDF4] dark:bg-[#2A3A2E] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <BiPhone className="text-primary text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">Phone Numbers</h4>
            </div>
            <div className="space-y-3">
              {phones.map((phone, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{phone.type}:</span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="text-primary font-medium cursor-pointer"
                    onClick={() => handleCopy(phone.number)}
                  >
                    {phone.number}
                  </motion.span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#E8F5E9] dark:border-[#2A3A2E]">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mobile:</p>
              {mobiles.map((mobile, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1 cursor-pointer group/mobile"
                  onClick={() => handleCopy(mobile.number)}
                >
                  <FiSmartphone className="text-primary/70 text-xs" />
                  <span>{mobile.provider}: {mobile.number}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;