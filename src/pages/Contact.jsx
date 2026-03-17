import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { 
  FiMapPin, FiMail, FiPhone, FiSmartphone, FiClock, 
  FiSend, FiCheckCircle, FiUser, FiMessageSquare, FiCopy,
  FiInstagram, FiFacebook, FiLinkedin, FiTwitter, FiGlobe,
  FiDollarSign, FiBriefcase, FiHeart, FiStar
} from "react-icons/fi";
import { BiMap, BiTime, BiEnvelope, BiPhone, BiWorld } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(null);
  const [activeTab, setActiveTab] = useState("philippines");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const formRef = useRef();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  // Mouse position for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseMoveCard = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const locations = [
    {
      id: 1,
      country: "Philippines",
      flag: "🇵🇭",
      code: "ph",
      image: "https://media.istockphoto.com/id/904288674/photo/manila-makati-at-twilight.jpg?s=612x612&w=0&k=20&c=wgaKMx1urKixlCQDt6GocVw9o_UT8qrWRRliKTcn6VQ=",
      address: [
        "Palm Tower, UG07 tower B THE,",
        "7706 Saint Paul Road, VILLAGE,",
        "Makati, 1203 Metro Manila"
      ],
      email: "sales@instrutechgroup.com",
      phone: "(63)2 8403 0292",
      mobile: ["(63)917 187 9383 (GLOBE/TM)", "(63)998 982 1012 (SMART/TNT)"],
      color: "from-emerald-500 to-green-500",
      bgPattern: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
    },
    {
      id: 2,
      country: "Bangkok Thailand",
      flag: "🇹🇭",
      code: "th",
      image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      address: [
        "449/89 Panya Indra Rd.,",
        "Samwatawantok, Klongsamwa,",
        "Bangkok, Thailand 10510"
      ],
      email: "salesth@instrutechgroup.com",
      phone: "(66)84 722 5335",
      mobile: [],
      color: "from-blue-500 to-cyan-500",
      bgPattern: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)"
    }
  ];

  const emails = [
    "sales@instrutechgroup.com",
    "admin@instrutechgroup.com",
    "salesth@instrutechgroup.com"
  ];

  const phones = [
    { type: "Landline PH", number: "(63)2 8403 0292" },
    { type: "Thailand", number: "(66)84 722 5335" },
  ];

  const mobiles = [
    { provider: "GLOBE/TM", number: "(63)917 187 9383" },
    { provider: "SMART/TNT", number: "(63)998 982 1012" },
  ];

  const socialLinks = [
    { icon: FiFacebook, url: "#", color: "hover:bg-blue-600", label: "Facebook" },
    { icon: FiTwitter, url: "#", color: "hover:bg-sky-500", label: "Twitter" },
    { icon: FiLinkedin, url: "#", color: "hover:bg-blue-700", label: "LinkedIn" },
    { icon: FiInstagram, url: "#", color: "hover:bg-pink-600", label: "Instagram" },
  ];

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Your EmailJS credentials
    const serviceId = 'service_gkqhy8i';
    const templateId = 'template_p2w9fxd';
    const publicKey = 'SqibtVhvsg8yaydio';
    
    // Add timestamp to the data being sent
    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      message: formData.message,
      time: new Date().toLocaleString()
      // 'name' parameter removed
    };
    
    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          setIsSubmitting(false);
          setIsSubmitted(true);
          
          // Reset form after success
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
              fullName: "",
              email: "",
              company: "",
              phone: "",
              message: ""
            });
          }, 3000);
        },
        (error) => {
          console.log('Failed to send email:', error.text);
          setIsSubmitting(false);
          alert('Failed to send email. Please try again or email us directly at humprey149@gmail.com');
        }
      );
  };

  const inputVariants = {
    focused: { 
      scale: 1.02, 
      borderColor: "#22C55E", 
      boxShadow: "0 20px 30px -10px rgba(34, 197, 94, 0.3)",
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    blurred: { 
      scale: 1, 
      borderColor: "#E8F5E9", 
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-[#F8FAF0] via-white to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1A2E1F] dark:to-[#0F2A12]">
      {/* Animated Background with Particles */}
      <div className="absolute inset-0 w-full h-full">
        {/* Gradient orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 300 - 150, 0],
              y: [0, Math.random() * 300 - 150, 0],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.2, 0.1],
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
                i % 2 === 0 ? 'rgba(22, 101, 52, 0.15)' : 'rgba(34, 197, 94, 0.15)'
              } 0%, transparent 70%)`,
            }}
          />
        ))}

        {/* Animated grid */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0px 0px", "40px 40px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage: `
                linear-gradient(rgba(22, 101, 52, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(22, 101, 52, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

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
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Spectacular Header with Parallax */}
        <motion.div
          style={{
            y: mousePosition.y,
            x: mousePosition.x,
          }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary via-[#22C55E] to-primary bg-[length:200%_200%] animate-gradient px-6 py-3 rounded-full mb-4 shadow-xl"
          >
            <BiWorld className="text-white animate-pulse" />
            <span className="text-sm font-bold text-white tracking-wider">CONNECT WITH US</span>
            <BiWorld className="text-white animate-pulse" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Get in <span className="text-primary relative">
              Touch
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-[#22C55E] to-primary rounded-full"
                initial={{ width: 0, left: "50%" }}
                animate={{ width: "100%", left: "0%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
          >
            We're here to help with all your calibration needs. 
            Reach out through any of our channels below.
          </motion.p>
        </motion.div>

        {/* Country Toggle Tabs with Floating Hearts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center gap-4 mb-8"
        >
          {locations.map((loc) => (
            <motion.button
              key={loc.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(loc.code)}
              className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === loc.code
                  ? `bg-gradient-to-r ${loc.color} text-white shadow-xl`
                  : "bg-white/80 dark:bg-[#1A2E1F]/80 text-gray-700 dark:text-gray-300 hover:bg-[#F0FDF4] border border-[#E8F5E9] dark:border-[#2A3A2E]"
              }`}
            >
              <span className="text-xl">{loc.flag}</span>
              <span>{loc.country}</span>
              {activeTab === loc.code && (
                <motion.div
                  layoutId="activeTabHeart"
                  className="absolute -top-2 -right-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  <FiHeart className="text-pink-300 text-xs fill-pink-300" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Location Card with 3D Effect and Floating Elements */}
        <AnimatePresence mode="wait">
          {locations.filter(loc => loc.code === activeTab).map((location) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onMouseMove={handleMouseMoveCard}
              onMouseLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
              }}
              style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative group mb-8"
            >
              {/* Animated glow rings */}
              <motion.div
                className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${location.color.includes('emerald') ? '#10b981' : '#3b82f6'} 0%, transparent 70%)`,
                  filter: 'blur(20px)',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="relative bg-white dark:bg-[#1A2E1F] rounded-xl shadow-2xl overflow-hidden border-2 border-transparent group-hover:border-primary/30 transition-all duration-300">
                {/* Decorative floating stars */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-20 h-20 opacity-10"
                >
                  <FiStar className="w-full h-full text-primary" />
                </motion.div>
                
                <div className="flex flex-col md:flex-row">
                  {/* Image Side with Overlay and Floating Badges */}
                  <div className="md:w-2/5 relative overflow-hidden group/image">
                    <motion.img 
                      src={location.image}
                      alt={location.country}
                      className="w-full h-64 md:h-80 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                    
                    {/* Floating badge with animation */}
                    <motion.div
                      animate={{ 
                        y: [0, -8, 0],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                    >
                      <span className="text-primary font-medium text-sm flex items-center gap-2">
                        <FiMapPin /> {location.country}
                      </span>
                    </motion.div>

                    {/* Floating hearts */}
                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="absolute bottom-4 right-4"
                    >
                      <FiHeart className="text-pink-300 text-xl opacity-50" />
                    </motion.div>
                  </div>

                  {/* Content Side with Hover Effects */}
                  <div className="md:w-3/5 p-6 flex flex-col justify-between h-80 relative">
                    {/* Background pattern */}
                    <div 
                      className="absolute inset-0 opacity-5"
                      style={{ backgroundImage: location.bgPattern }}
                    />
                    
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                      {/* Address Card */}
                      <motion.div 
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="col-span-2 bg-gradient-to-br from-[#F0FDF4] to-[#E8F5E9] dark:from-[#2A3A2E] dark:to-[#1A2E1F] p-4 rounded-xl border border-primary/20 shadow-md"
                      >
                        <h4 className="text-xs font-semibold text-primary mb-2 flex items-center gap-1">
                          <FiMapPin className="text-primary" /> ADDRESS
                        </h4>
                        {location.address.map((line, i) => (
                          <p key={i} className="text-sm text-gray-700 dark:text-gray-300">{line}</p>
                        ))}
                      </motion.div>

                      {/* Email Card with Copy */}
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="col-span-1 bg-white dark:bg-[#1A2E1F] p-3 rounded-xl border border-[#E8F5E9] dark:border-[#2A3A2E] shadow-md cursor-pointer group/email"
                        onClick={() => handleCopy(location.email, `featured-email`)}
                      >
                        <h4 className="text-xs font-semibold text-primary mb-1">EMAIL</h4>
                        <div className="flex items-center gap-2">
                          <FiMail className="text-primary text-sm" />
                          <span className="text-xs text-gray-700 dark:text-gray-300 truncate">{location.email}</span>
                          <AnimatePresence>
                            {copied === `featured-email` ? (
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="text-[10px] bg-green-500 text-white px-1.5 py-0.5 rounded-full"
                              >
                                ✓
                              </motion.span>
                            ) : (
                              <FiCopy className="text-primary/40 text-xs group-hover/email:text-primary transition-colors" />
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>

                      {/* Phone Card */}
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="col-span-1 bg-white dark:bg-[#1A2E1F] p-3 rounded-xl border border-[#E8F5E9] dark:border-[#2A3A2E] shadow-md"
                      >
                        <h4 className="text-xs font-semibold text-primary mb-1">PHONE</h4>
                        <div className="flex items-center gap-2">
                          <FiPhone className="text-primary text-sm" />
                          <span className="text-xs text-gray-700 dark:text-gray-300">{location.phone}</span>
                        </div>
                      </motion.div>

                      {/* Mobile Numbers */}
                      {location.mobile.length > 0 && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="col-span-2 mt-2"
                        >
                          <h4 className="text-xs font-semibold text-primary mb-2 flex items-center gap-1">
                            <FiSmartphone className="text-primary" /> MOBILE
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {location.mobile.map((mobile, i) => (
                              <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 p-2 bg-[#F0FDF4] dark:bg-[#2A3A2E] rounded-lg border border-[#E8F5E9] dark:border-[#2A3A2E] cursor-pointer group/mobile"
                                onClick={() => handleCopy(mobile.split(' ')[0], `featured-mobile-${i}`)}
                              >
                                <FiSmartphone className="text-primary/60 text-xs" />
                                <span className="text-xs text-gray-600 dark:text-gray-400 truncate">{mobile}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Quotation Banner with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="relative group mb-8"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
          <div className="relative bg-gradient-to-r from-primary/10 to-[#22C55E]/10 p-6 rounded-xl border-2 border-primary/30 overflow-hidden">
            {/* Floating stars */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-5 -right-5 text-primary/20 text-4xl"
            >
              ✦
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-5 -left-5 text-primary/20 text-4xl"
            >
              ✦
            </motion.div>
            
            <div className="relative z-10 text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiDollarSign className="text-primary text-3xl mx-auto mb-2" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Need a Quotation?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Fill out the form below and we'll get back to you with a customized quote within 24 hours.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Details Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Work Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="relative group h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#22C55E]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-white dark:bg-[#1A2E1F] p-5 rounded-xl border-2 border-transparent group-hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-[#22C55E] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <FiClock className="text-white text-lg" />
                </div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white">Work Hours</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Monday to Friday</p>
              <p className="text-primary text-xl font-bold mt-1">8:30am – 5:30pm</p>
            </div>
          </motion.div>

          {/* Email Addresses Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="relative group h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#22C55E]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-white dark:bg-[#1A2E1F] p-5 rounded-xl border-2 border-transparent group-hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-[#22C55E] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <BiEnvelope className="text-white text-lg" />
                </div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white">Email</h4>
              </div>
              <div className="space-y-2 flex-1">
                {emails.map((email, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 p-2 bg-[#F0FDF4] dark:bg-[#2A3A2E] rounded-lg cursor-pointer group/email border border-transparent hover:border-primary/30 transition-all"
                    onClick={() => handleCopy(email, `email-card-${i}`)}
                  >
                    <FiMail className="text-primary text-sm" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 flex-1 truncate">{email}</span>
                    <AnimatePresence>
                      {copied === `email-card-${i}` ? (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="text-[10px] bg-green-500 text-white px-1.5 py-0.5 rounded-full"
                        >
                          ✓
                        </motion.span>
                      ) : (
                        <FiCopy className="text-primary/40 text-xs group-hover/email:text-primary transition-colors" />
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Phone Numbers Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="relative group h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#22C55E]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-white dark:bg-[#1A2E1F] p-5 rounded-xl border-2 border-transparent group-hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-[#22C55E] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <BiPhone className="text-white text-lg" />
                </div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white">Phone</h4>
              </div>
              <div className="space-y-2 mb-3">
                {phones.map((phone, i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-[#F0FDF4] dark:bg-[#2A3A2E] rounded-lg border border-transparent hover:border-primary/30 transition-all">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{phone.type}:</span>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="text-primary font-medium cursor-pointer"
                      onClick={() => handleCopy(phone.number, `phone-card-${i}`)}
                    >
                      {phone.number}
                    </motion.span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#E8F5E9] dark:border-[#2A3A2E] pt-3 mt-auto">
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                  <FiSmartphone className="text-primary" /> Mobile:
                </p>
                {mobiles.map((mobile, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2 cursor-pointer group/mobile"
                    onClick={() => handleCopy(mobile.number, `mobile-card-${i}`)}
                  >
                    <FiSmartphone className="text-primary/60 text-xs" />
                    <span className="text-xs">{mobile.provider}:</span>
                    <span className="text-xs font-medium text-primary">{mobile.number}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form with Floating Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="relative group max-w-2xl mx-auto mb-8"
        >
          {/* Animated background rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-40 h-40 border-2 border-primary/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -left-10 w-40 h-40 border-2 border-[#22C55E]/20 rounded-full"
          />

          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
          
          <div className="relative bg-white dark:bg-[#1A2E1F] p-6 rounded-xl shadow-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300">
            {/* Decorative hearts */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              className="absolute top-2 right-2"
            >
              <FiHeart className="text-pink-200 text-lg" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              className="absolute bottom-2 left-2"
            >
              <FiHeart className="text-pink-200 text-lg" />
            </motion.div>
            
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5 text-center">
              Message Us for <span className="text-primary">Quotations</span>
            </h2>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <motion.div
                initial="blurred"
                animate={focusedField === "fullName" ? "focused" : "blurred"}
                variants={inputVariants}
                className="relative"
              >
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("fullName")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-3 py-2.5 text-sm bg-[#F0FDF4] dark:bg-[#2A3A2E] border border-[#E8F5E9] dark:border-[#2A3A2E] rounded-lg focus:outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="Full Name *"
                  required
                />
                <AnimatePresence>
                  {formData.fullName && focusedField === "fullName" && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute right-2 top-3 text-primary"
                    >
                      <FiCheckCircle className="text-xs" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Email */}
              <motion.div
                initial="blurred"
                animate={focusedField === "email" ? "focused" : "blurred"}
                variants={inputVariants}
                className="relative"
              >
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-3 py-2.5 text-sm bg-[#F0FDF4] dark:bg-[#2A3A2E] border border-[#E8F5E9] dark:border-[#2A3A2E] rounded-lg focus:outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="Email Address *"
                  required
                />
                <AnimatePresence>
                  {formData.email && focusedField === "email" && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute right-2 top-3 text-primary"
                    >
                      <FiCheckCircle className="text-xs" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Company */}
              <motion.div
                initial="blurred"
                animate={focusedField === "company" ? "focused" : "blurred"}
                variants={inputVariants}
                className="relative"
              >
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-3 py-2.5 text-sm bg-[#F0FDF4] dark:bg-[#2A3A2E] border border-[#E8F5E9] dark:border-[#2A3A2E] rounded-lg focus:outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="Company Name"
                />
              </motion.div>

              {/* Phone */}
              <motion.div
                initial="blurred"
                animate={focusedField === "phone" ? "focused" : "blurred"}
                variants={inputVariants}
                className="relative"
              >
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-3 py-2.5 text-sm bg-[#F0FDF4] dark:bg-[#2A3A2E] border border-[#E8F5E9] dark:border-[#2A3A2E] rounded-lg focus:outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="Contact Number *"
                  required
                />
                <AnimatePresence>
                  {formData.phone && focusedField === "phone" && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute right-2 top-3 text-primary"
                    >
                      <FiCheckCircle className="text-xs" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Message */}
              <motion.div
                initial="blurred"
                animate={focusedField === "message" ? "focused" : "blurred"}
                variants={inputVariants}
                className="relative"
              >
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-3 py-2.5 text-sm bg-[#F0FDF4] dark:bg-[#2A3A2E] border border-[#E8F5E9] dark:border-[#2A3A2E] rounded-lg focus:outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your calibration needs... *"
                  required
                />
                <AnimatePresence>
                  {formData.message && focusedField === "message" && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute right-2 bottom-2 text-primary"
                    >
                      <FiCheckCircle className="text-xs" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative overflow-hidden bg-gradient-to-r from-primary to-[#22C55E] text-white py-3 rounded-lg text-sm font-bold shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isSubmitting ? 0 : Infinity,
                    ease: "linear",
                  }}
                  style={{
                    transform: "skewX(-20deg)",
                  }}
                />
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <FiCheckCircle className="text-lg" />
                      Sent!
                    </>
                  ) : (
                    <>
                      Request Quotation
                      <FiSend className="text-sm group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </motion.button>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm"
                  >
                    🎉 Thank you! Your inquiry has been sent successfully!
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>

        {/* Social Links with Hover Effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center gap-3"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
              title={social.label}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#22C55E]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`relative w-8 h-8 bg-white dark:bg-[#1A2E1F] rounded-full flex items-center justify-center shadow-md hover:text-white transition-all duration-300 ${social.color}`}>
                <social.icon className="text-sm" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="text-center mt-6"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400">
            ✦ For urgent inquiries, please call during business hours ✦
          </p>
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

export default Contact;