import React, { useEffect, useState, useRef } from "react";
import { motion} from "framer-motion";
import { FaQuoteRight, FaStar, FaCertificate } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight, BsCalendarCheck, BsBuilding, BsShieldCheck } from "react-icons/bs";
import { GiGearHammer, GiThermometerHot, GiElectric, GiMicroscope } from "react-icons/gi";
import { FiAward, FiClock, FiThumbsUp } from "react-icons/fi";
import { RiShieldStarLine } from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi";

const testimonials = [
  {
    id: 1,
    logo: "https://media.licdn.com/dms/image/v2/C560BAQELDYSUWwop2A/company-logo_200_200/company-logo_200_200/0/1673603986401/aviationpartnershipph_logo?e=2147483647&v=beta&t=TDvSy6UyWWzHPyszNgWe1HQGzYJ7C-ldiWHapJF7kbw",
    name: "Aviation Partnership Corp.",
    role: "Manufacturing Partner",
    reviewText: "Instrutech's calibration services have been instrumental in maintaining our ISO standards. Their dimensional calibration accuracy is unmatched, and their turnaround time keeps our production line running smoothly.",
    industry: "Manufacturing",
    icon: GiGearHammer,
    color: "from-blue-500 to-cyan-500",
    rating: 5,
    year: "Since 2019",
    certified: ["ISO 9001", "IATF 16949"],
    calibrationType: "Dimensional Calibration",
    bgPattern: "radial-gradient(circle at 30% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)"
  },
  {
    id: 2,
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFF4Ruw_ut2jg/company-logo_200_200/company-logo_200_200/0/1630636874212/yamaha_motor_philippines_inc__logo?e=2147483647&v=beta&t=ho6emqljg2-eHCEgwgbY0YK-lQZioQn8yP9OBh6rwSk",
    name: "Yamaha Motor Philippines",
    role: "Automotive Industry",
    reviewText: "We've trusted Instrutech for our torque wrench and pressure gauge calibration for over 5 years. Their ISO/IEC 17025:2017 accreditation gives us confidence in every measurement. Excellent service and technical expertise.",
    industry: "Automotive",
    icon: FiAward,
    color: "from-red-500 to-orange-500",
    rating: 5,
    year: "Since 2018",
    certified: ["ISO 17025", "JIS Q 17025"],
    calibrationType: "Torque & Pressure",
    bgPattern: "radial-gradient(circle at 70% 30%, rgba(239,68,68,0.1) 0%, transparent 50%)"
  },
  {
    id: 3,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOihaYMAR9NzTZrTd1dxXd8cdvJ8hCrHGO_w&s",
    name: "AIT Technical Testing Services",
    role: "Technical",
    reviewText: "Temperature calibration is critical for our lab equipment. Instrutech's precision and reliability have made them our go-to calibration partner. Their team understands the strict requirements of pharmaceutical standards.",
    industry: "Pharmaceutical",
    icon: GiThermometerHot,
    color: "from-green-500 to-emerald-500",
    rating: 5,
    year: "Since 2020",
    certified: ["ISO 17025", "GMP"],
    calibrationType: "Temperature",
    bgPattern: "radial-gradient(circle at 40% 60%, rgba(34,197,94,0.1) 0%, transparent 50%)"
  },
  {
    id: 4,
    logo: "https://macroasiacorp.com/images/resource/12.png",
    name: "Macroasia Sats Inflight Services Corporation",
    role: "Electronics Manufacturing",
    reviewText: "The electrical calibration services provided by Instrutech are top-notch. They calibrate our multimeters and oscilloscopes with precision, and their documentation for ISO audits is always complete and timely.",
    industry: "Electronics",
    icon: GiElectric,
    color: "from-purple-500 to-pink-500",
    rating: 5,
    year: "Since 2017",
    certified: ["ISO 17025", "IEC 17025"],
    calibrationType: "Electrical",
    bgPattern: "radial-gradient(circle at 60% 40%, rgba(168,85,247,0.1) 0%, transparent 50%)"
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const autoplayRef = useRef(null);

  useEffect(() => {
    if (isAutoPlaying) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className="w-full py-20 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Animated gradient rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-80 h-80 border-2 border-primary/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-96 h-96 border-2 border-[#22C55E]/20 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Floating sparkles */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-0 left-1/4 text-primary/30 text-4xl"
          >
            <HiOutlineSparkles />
          </motion.div>
          <motion.div
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-0 right-1/4 text-[#22C55E]/30 text-4xl"
          >
            <HiOutlineSparkles />
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-[#22C55E]/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4 border border-primary/30 shadow-lg"
          >
            <RiShieldStarLine className="text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary tracking-wider">TRUSTED EXCELLENCE</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our{" "}
            <span className="text-primary relative">
              Clients Say
              <motion.div
                className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-primary via-[#22C55E] to-primary rounded-full"
                initial={{ width: 0, left: "50%" }}
                animate={{ width: "100%", left: "0%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust our ISO/IEC 17025:2017 accredited calibration services
          </p>
        </motion.div>

        {/* Main Interactive Card */}
        <div className="relative max-w-5xl mx-auto">
          {/* Progress indicators with numbers */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className="group relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <div
                    className={`h-2 rounded-full transition-all ${
                      i === currentIndex 
                        ? "w-10 bg-primary" 
                        : "w-2 bg-gray-300 dark:bg-gray-600 group-hover:bg-primary/50"
                    }`}
                  />
                  {i === currentIndex && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/50 rounded-full"
                      layoutId="activeDot"
                    />
                  )}
                </motion.button>
              ))}
            </div>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary/10 px-3 py-1 rounded-full"
            >
              <span className="text-xs font-bold text-primary">
                {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </motion.div>
          </div>

          {/* 3D Card with Mouse Follow Effect */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: mousePosition.y,
              rotateY: mousePosition.x,
              transformStyle: "preserve-3d",
            }}
            className="relative group"
          >
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main Card */}
            <div className="relative bg-white dark:bg-[#1A2E1F] rounded-2xl shadow-2xl overflow-hidden border-2 border-transparent group-hover:border-primary/30 transition-all duration-500">
              {/* Animated background pattern */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{ backgroundImage: testimonials[currentIndex].bgPattern }}
              />

              {/* Decorative floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-32 h-32 border border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-40 h-40 border border-[#22C55E]/20 rounded-full"
              />

              <div className="relative z-10 p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Left Side - 3D Logo with Effects */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
                    className="relative perspective"
                  >
                    {/* Multiple layers for depth */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-[#22C55E]/30 rounded-2xl blur-xl opacity-50" />
                    
                    <div className={`relative w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br ${testimonials[currentIndex].color} p-1 shadow-2xl`}>
                      <div className="w-full h-full bg-white dark:bg-[#1A2E1F] rounded-xl overflow-hidden">
                        <img
                          src={testimonials[currentIndex].logo}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Floating elements around logo */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-xl"
                    >
                      <FaStar className="text-white text-sm" />
                    </motion.div>

                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-primary to-[#22C55E] rounded-full flex items-center justify-center shadow-xl"
                    >
                      {React.createElement(testimonials[currentIndex].icon, {
                        className: "text-white text-sm"
                      })}
                    </motion.div>

                    {/* Year badge */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute -top-2 -left-2 bg-white dark:bg-[#1A2E1F] px-3 py-1 rounded-full shadow-lg border border-primary/30"
                    >
                      <span className="text-[10px] font-bold text-primary">{testimonials[currentIndex].year}</span>
                    </motion.div>
                  </motion.div>

                  {/* Right Side - Content with Staggered Animation */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Industry Tag with Animation */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-2 mb-4 justify-center md:justify-start"
                    >
                      <span className={`text-xs px-3 py-1.5 rounded-full bg-gradient-to-r ${testimonials[currentIndex].color} text-white font-medium shadow-lg flex items-center gap-1`}>
                        <BsShieldCheck className="text-white text-xs" />
                        {testimonials[currentIndex].industry}
                      </span>
                      
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                      />
                      
                      <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <BsCalendarCheck /> {testimonials[currentIndex].year}
                      </span>
                    </motion.div>

                    {/* Company Name with Gradient */}
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                    >
                      {testimonials[currentIndex].name}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-primary font-medium mb-3"
                    >
                      {testimonials[currentIndex].role}
                    </motion.p>

                    {/* Calibration Type Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="inline-flex items-center gap-2 bg-[#F0FDF4] dark:bg-[#2A3A2E] px-4 py-2 rounded-full mb-4 shadow-md"
                    >
                      <GiMicroscope className="text-primary" />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {testimonials[currentIndex].calibrationType}
                      </span>
                    </motion.div>

                    {/* Quote with Animated Quote Icon */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="relative mb-4"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <FaQuoteRight className="absolute -top-6 -left-2 text-primary/20 text-6xl" />
                      </motion.div>
                      <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed pl-4 relative z-10">
                        "{testimonials[currentIndex].reviewText}"
                      </p>
                    </motion.div>

                    {/* Certifications with Hover Effects */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="flex flex-wrap items-center gap-2 mt-4 justify-center md:justify-start"
                    >
                      {testimonials[currentIndex].certified.map((cert, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center gap-1.5 bg-white dark:bg-[#1A2E1F] border border-[#E8F5E9] dark:border-[#2A3A2E] px-3 py-1.5 rounded-lg shadow-md group"
                        >
                          <FaCertificate className="text-primary text-xs group-hover:rotate-12 transition-transform" />
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{cert}</span>
                          <FiThumbsUp className="text-primary/50 text-[10px] group-hover:text-primary transition-colors" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons with 3D Effect */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="w-12 h-12 bg-white dark:bg-[#1A2E1F] shadow-xl rounded-full text-primary border-2 border-primary/30 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#22C55E]/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <BsChevronLeft className="relative z-10 text-lg group-hover:scale-110 transition-transform" />
            </motion.button>

            {/* Floating Numbers */}
            <motion.div
              key={currentIndex}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-4 py-2 bg-primary/10 rounded-full"
            >
              <span className="text-sm font-bold text-primary">{currentIndex + 1}</span>
              <span className="text-xs text-gray-400 mx-1">/</span>
              <span className="text-xs text-gray-500">{testimonials.length}</span>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="w-12 h-12 bg-white dark:bg-[#1A2E1F] shadow-xl rounded-full text-primary border-2 border-primary/30 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#22C55E]/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <BsChevronRight className="relative z-10 text-lg group-hover:scale-110 transition-transform" />
            </motion.button>
          </div>

          {/* Trust Indicators Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10"
          >
            {[
              { icon: FiAward, text: "ISO 17025 Accredited", value: "100%" },
              { icon: FaStar, text: "Client Satisfaction", value: "5.0 ★" },
              { icon: FiClock, text: "Avg. Turnaround", value: "24h" },
              { icon: BsBuilding, text: "Active Partners", value: "150+" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/50 dark:bg-[#1A2E1F]/50 backdrop-blur-sm p-3 rounded-xl border border-[#E8F5E9] dark:border-[#2A3A2E] text-center group"
              >
                <item.icon className="text-primary text-xl mx-auto mb-1 group-hover:rotate-12 transition-transform" />
                <div className="text-lg font-bold text-gray-900 dark:text-white">{item.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{item.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;