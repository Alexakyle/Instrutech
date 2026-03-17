import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { FiAward, FiFileText, FiCheckCircle, FiExternalLink, FiEye, FiShield, FiStar, FiTrendingUp } from "react-icons/fi";
import { GiMicroscope } from "react-icons/gi";
import { useState } from "react";

const Certifications = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  
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

  const certificates = [
    {
      id: 1,
      title: "ISO/IEC 17025:2017 Accreditation",
      reference: "Laboratory Accreditation No. LA-2018-324B",
      issuer: "Philippines Accreditation Bureau (PAB)",
      description: "Full accreditation certificate for calibration laboratory demonstrating technical competence and compliance with international standards.",
      icon: FiAward,
      file: "https://instrutechmetrology.com/wp-content/uploads/2024/07/Certificate-of-Accreditation-INSTRU-TECH-RA-Calibration-1.pdf",
      image: "/images/cert.png",
      type: "Accreditation",
      category: "accreditation",
      color: "from-primary to-[#22C55E]",
      stats: ["ISO/IEC 17025:2017", "PNS Accreditation", "International Recognition"]
    },
    {
      id: 2,
      title: "SEC Certificate",
      reference: "Company Reg. No. CS201605125",
      issuer: "Securities and Exchange Commission",
      description: "Certificate of Filing of Amended Articles of Incorporation approved on June 2016.",
      icon: FiFileText,
      file: "https://instrutechmetrology.com/wp-content/uploads/2018/02/SEC-Cert.pdf",
      type: "Registration",
      category: "registration",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "BIR Registration",
      reference: "TIN: 009-248-329-00000",
      issuer: "Bureau of Internal Revenue",
      description: "Certificate of Registration for Domestic Corporation with VAT and withholding tax registration.",
      icon: FiFileText,
      file: "https://instrutechmetrology.com/wp-content/uploads/2024/07/BIR-UPDATE2303.pdf",
      type: "Registration",
      category: "registration",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "PHILGEPS Registration",
      reference: "PhilGEPS Certificate",
      issuer: "Philippine Government Electronic Procurement System",
      description: "Registration certificate for government procurement eligibility.",
      icon: FiShield,
      file: "https://instrutechmetrology.com/wp-content/uploads/2025/08/PHILGEPS-CETIFICATE.pdf",
      type: "Permit",
      category: "permit",
      color: "from-orange-500 to-red-500"
    }
  ];

  const permits = [
    {
      id: 5,
      name: "Business Permit 2025",
      number: "Permit No. 201603144",
      issuer: "City of Makati - Business Permits Office",
      icon: FiFileText,
      file: "https://instrutechmetrology.com/wp-content/uploads/2025/08/BUSINESS-PERMIT-2025.pdf",
      category: "permit",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 6,
      name: "Sanitary Permit",
      number: "Updated 2025",
      issuer: "City of Makati",
      icon: FiFileText,
      file: "https://instrutechmetrology.com/wp-content/uploads/2025/08/SANITARY-PERMIT-UPDATED-2025.pdf",
      category: "permit",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 7,
      name: "Barangay Clearance",
      number: "Barangay Business Clearance 2025",
      issuer: "Barangay San Antonio, Makati",
      icon: FiFileText,
      file: "https://instrutechmetrology.com/wp-content/uploads/2025/08/BARANGAY-BUSINESS-CLEARANCE-2025.pdf",
      category: "permit",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const allDocuments = [...certificates, ...permits];

  const scopeLink = "https://pabaccreditation.dti.gov.ph/7eeae03fc3f49de85313adae44137ddb062224c8901f578738e77281d271a1bde4c8a77ace737376c07c65ce5c9b213a8d?search=instru-tech&scheme&scope&status&fbclid=IwY2xjawQfwI9leHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeR2jLAiVe6aMgVI8z8LjRusSs51jVMy4BvCnq15o-iycjeg73I5T9px0eYWk_aem_W1s1_QFk9Gwy6oOpLUU1jw";

  const handleViewFile = (filePath) => {
    window.open(filePath, '_blank');
  };

  const filters = [
    { id: "all", label: "All Documents", icon: FiStar },
    { id: "accreditation", label: "Accreditations", icon: FiAward },
    { id: "registration", label: "Registrations", icon: FiShield },
    { id: "permit", label: "Permits", icon: FiCheckCircle },
  ];

  const getFilteredDocuments = () => {
    if (activeFilter === "all") {
      return allDocuments;
    }
    return allDocuments.filter(doc => doc.category === activeFilter);
  };

  return (
    <div className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-[#F8FAF0] via-white to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1A2E1F] dark:to-[#0F2A12]">
      {/* Spectacular Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Gradient orbs */}
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
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Spectacular Header with 3D Effect */}
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
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary via-[#22C55E] to-primary bg-[length:200%_200%] animate-gradient px-6 py-2 rounded-full mb-4 shadow-lg"
          >
            <FiStar className="text-white animate-pulse" />
            <span className="text-sm font-medium text-white">ISO ACCREDITATION & PERMITS</span>
            <FiStar className="text-white animate-pulse" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Certifications & <span className="text-primary relative">
              Permits
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-[#22C55E] to-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Laboratory Accreditation No. LA-2018-324B as per PNS ISO/IEC 17025:2017 
            by the Philippines Accreditation Bureau
          </motion.p>
        </motion.div>

        {/* Interactive Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`relative px-5 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-primary to-[#22C55E] text-white shadow-lg shadow-primary/30"
                  : "bg-white/80 dark:bg-[#1A2E1F]/80 text-gray-700 dark:text-gray-300 hover:bg-[#F0FDF4]/80 border border-[#E8F5E9] dark:border-[#2A3A2E] backdrop-blur-sm"
              }`}
            >
              <filter.icon className="text-sm" />
              <span>{filter.label}</span>
              <span className="ml-1 text-xs bg-white/20 px-1.5 py-0.5 rounded-full">
                {filter.id === "all" ? allDocuments.length : 
                 filter.id === "accreditation" ? certificates.filter(c => c.category === "accreditation").length :
                 filter.id === "registration" ? certificates.filter(c => c.category === "registration").length :
                 permits.length}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Conditionally show featured card only in "All Documents" */}
        {activeFilter === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12"
          >
            {/* Featured ISO Accreditation Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-[#22C55E] to-primary rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              <div className="relative bg-white dark:bg-[#1A2E1F] rounded-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Image side */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="lg:w-2/5 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-[#22C55E]/30 mix-blend-overlay" />
                    <img 
                      src="/images/cert.png"
                      alt="ISO/IEC 17025:2017 Accreditation"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 dark:bg-[#1A2E1F]/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        FEATURED
                      </span>
                    </div>
                  </motion.div>

                  {/* Content side */}
                  <div className="lg:w-3/5 p-8 md:p-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          ISO/IEC 17025:2017 
                          <span className="text-primary block text-xl mt-1">Accreditation</span>
                        </h2>
                      </div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 bg-gradient-to-r from-primary to-[#22C55E] rounded-xl flex items-center justify-center shadow-lg"
                      >
                        <FiAward className="text-white text-2xl" />
                      </motion.div>
                    </div>

                    {/* Reference */}
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="bg-[#F0FDF4] dark:bg-[#2A3A2E] p-4 rounded-xl mb-4 border-l-4 border-primary"
                    >
                      <p className="text-primary font-bold text-lg">{certificates[0].reference}</p>
                    </motion.div>

                    {/* Issuer */}
                    <div className="flex items-center gap-2 mb-4">
                      <FiCheckCircle className="text-primary text-lg" />
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Issued by:</span> {certificates[0].issuer}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {certificates[0].description}
                    </p>

                    {/* Stats grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {certificates[0].stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="bg-gradient-to-br from-primary/5 to-[#22C55E]/5 p-2 rounded-lg text-center"
                        >
                          <p className="text-xs text-gray-600 dark:text-gray-400">{stat}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleViewFile(certificates[0].file)}
                      className="relative group/btn w-full bg-gradient-to-r from-primary to-[#22C55E] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-xl overflow-hidden"
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
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <FiEye className="text-xl" />
                        View Certificate
                        <FiExternalLink className="text-lg group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Documents Grid - Regular Cards for All */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            {activeFilter === "all" ? "All Documents" : 
             activeFilter === "accreditation" ? "Accreditations" :
             activeFilter === "registration" ? "Registrations" : "Permits"}
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({getFilteredDocuments().filter(doc => activeFilter === "all" ? doc.id !== 1 : true).length} items)
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {getFilteredDocuments()
              .filter(doc => activeFilter === "all" ? doc.id !== 1 : true) // Hide featured doc in all view since it's shown separately
              .map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onHoverStart={() => setHoveredCard(doc.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => handleViewFile(doc.file)}
                className="relative group cursor-pointer"
              >
                <div className="relative bg-white dark:bg-[#1A2E1F] p-5 rounded-xl border border-[#E8F5E9] dark:border-[#2A3A2E] shadow-md hover:shadow-xl transition-all overflow-hidden">
                  {/* Hover background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"
                    animate={{ opacity: hoveredCard === doc.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    {/* Icon with gradient background */}
                    <div className={`w-12 h-12 bg-gradient-to-r ${doc.color || 'from-primary to-[#22C55E]'} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                      <doc.icon className="text-white text-lg" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">
                          {doc.title || doc.name}
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full whitespace-nowrap">
                          {doc.type || doc.category}
                        </span>
                      </div>
                      
                      {doc.reference && (
                        <p className="text-xs text-primary font-medium mb-1 line-clamp-1">{doc.reference}</p>
                      )}
                      
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 line-clamp-1">
                        {doc.issuer}
                      </p>
                      
                      {doc.description && (
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                          {doc.description}
                        </p>
                      )}
                      
                      {doc.number && (
                        <p className="text-xs text-gray-400">{doc.number}</p>
                      )}
                      
                      <div className="flex items-center justify-end mt-2 text-primary text-xs">
                        <span className="flex items-center gap-1">
                          Click to view <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scope of Accreditation Link */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-8"
        >
          <div 
            onClick={() => handleViewFile(scopeLink)}
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-[#22C55E] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative bg-white dark:bg-[#1A2E1F] p-5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#F0FDF4] dark:bg-[#2A3A2E] rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <GiMicroscope className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    Scope of Accreditation
                  </h3>
                  <p className="text-xs text-gray-500">View detailed scope on PAB website</p>
                </div>
              </div>
              <FiExternalLink className="text-primary text-lg group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>

        {/* Verification Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-4 bg-gradient-to-r from-primary/5 to-[#22C55E]/5 rounded-xl border border-primary/20"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              All certifications and permits are valid and regularly updated
            </p>
            <p className="text-xs text-primary font-medium mt-1">
              For verification: info@instrutech.com
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

export default Certifications;