import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail, FiPhone, FiAward, FiTool } from "react-icons/fi";
import { GiMicroscope, GiGearHammer, GiElectric } from "react-icons/gi";
import { motion } from "framer-motion";
import { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Robert Aggangan",
    role: "Lead Calibration Engineer",
    image: "https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-vert.png",
    icon: GiMicroscope,
    color: "from-blue-500 to-cyan-500",
    email: "admin@instrutechgroup.com",
    phone: "+63 917 123 4567",
    expertise: "Dimensional Metrology",
    qualification: "ISO 17025 Lead Auditor",
    experience: "15+ years"
  },
  {
    id: 2,
    name: "Chrisma Mina",
    role: "Quality Assurance Manager",
    image: "https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-vert.png",
    icon: FiAward,
    color: "from-green-500 to-emerald-500",
    email: "admin@instrutechgroup.com",
    phone: "+63 918 234 5678",
    expertise: "ISO 17025 Compliance",
    qualification: "Quality Management Systems",
    experience: "12+ years"
  },
  {
    id: 3,
    name: "Deo Lorenz Reyes",
    role: "Electrical Calibration Specialist",
    image: "https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-vert.png",
    icon: GiElectric,
    color: "from-yellow-500 to-orange-500",
    email: "lab@instrutechgroup.com",
    phone: "+63 919 345 6789",
    expertise: "Multimeters, Oscilloscopes",
    qualification: "Certified Electronics Technician",
    experience: "10+ years"
  },
  {
    id: 4,
    name: "Tessanie Guillermo",
    role: "Sales & Quotation Specialist",
    image: "https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-vert.png",
    icon: FiAward,
    color: "from-primary to-[#22C55E]",
    email: "sales@instrutechgroup.com",
    phone: "+63 920 456 7890",
    expertise: "Sales & Customer Relations",
    qualification: "Business Administration",
    experience: "8+ years"
  },
  {
    id: 5,
    name: "Adin Rome Santos",
    role: "Mechanical Calibration Engineer",
    image: "https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-vert.png",
    icon: GiGearHammer,
    color: "from-purple-500 to-indigo-500",
    email: "lab@instrutechgroup.com",
    phone: "+63 921 567 8901",
    expertise: "Torque, Pressure, Force Gauges",
    qualification: "Mechanical Engineering",
    experience: "14+ years"
  },
  {
    id: 6,
    name: "Janine Benesa",
    role: "Sales & Quotation Specialist",
    image: "https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-vert.png",
    icon: FiAward,
    color: "from-teal-500 to-cyan-500",
    email: "sales@instrutechgroup.com",
    phone: "+63 922 678 9012",
    expertise: "Quotations & Client Support",
    qualification: "Marketing Management",
    experience: "6+ years"
  }
];

const Team = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="w-full py-20 bg-white dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-[#22C55E]/20 px-6 py-2 rounded-full mb-4 border border-primary/30"
          >
            <GiMicroscope className="text-primary" />
            <span className="text-sm font-medium text-primary">OUR EXPERTS</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our{" "}
            <span className="text-primary relative">
              Calibration Specialists
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            Our team of certified professionals brings years of experience in metrology and calibration services, 
            ensuring precision and accuracy in every measurement.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(member.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition duration-500"
                animate={{ opacity: hoveredCard === member.id ? 0.4 : 0 }}
              />

              {/* Card */}
              <div className="relative bg-white dark:bg-[#1A2E1F] rounded-2xl shadow-xl overflow-hidden border border-[#E8F5E9] dark:border-[#2A3A2E]">
                {/* Header with gradient */}
                <div className={`h-2 w-full bg-gradient-to-r ${member.color}`} />

                <div className="p-6">
                  <div className="flex flex-col items-center text-center">
                    {/* Image with floating icon */}
                    <div className="relative mb-4">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Floating expertise icon */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center shadow-lg`}
                      >
                        {(() => {
                          const IconComponent = member.icon;
                          return <IconComponent className="text-white text-sm" />;
                        })()}
                      </motion.div>

                      {/* Experience badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -top-2 -left-2 bg-primary text-white text-[10px] px-2 py-1 rounded-full font-bold shadow-lg"
                      >
                        {member.experience}
                      </motion.div>
                    </div>

                    {/* Name and Role */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>

                    {/* Expertise tag */}
                    <div className="inline-flex items-center gap-1 bg-[#F0FDF4] dark:bg-[#2A3A2E] px-3 py-1 rounded-full mb-3">
                      <FiTool className="text-primary text-xs" />
                      <span className="text-xs text-gray-700 dark:text-gray-300">
                        {member.expertise}
                      </span>
                    </div>

                    {/* Qualification */}
                    <div className="flex items-center gap-1 mb-4">
                      <FiAward className="text-yellow-500 text-sm" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {member.qualification}
                      </span>
                    </div>

                    {/* Contact Info - Non-clickable */}
                    <div className="w-full space-y-2 mb-4">
                      <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                        <FiMail className="text-primary text-sm" />
                        <span className="text-xs">{member.email}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                        <FiPhone className="text-primary text-sm" />
                        <span className="text-xs">{member.phone}</span>
                      </div>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center justify-center gap-3 pt-3 border-t border-[#E8F5E9] dark:border-[#2A3A2E]">
                      {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                        <motion.a
                          key={i}
                          href="#"
                          whileHover={{ scale: 1.2, y: -2 }}
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          <Icon className="text-sm" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {[
            { value: "50+", label: "Years Combined Experience", icon: FiAward },
            { value: "100%", label: "ISO 17025 Certified", icon: GiMicroscope },
            { value: "10k+", label: "Calibrations Completed", icon: GiGearHammer },
            { value: "24/7", label: "Technical Support", icon: FiPhone },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/50 dark:bg-[#1A2E1F]/50 backdrop-blur-sm p-4 rounded-xl border border-[#E8F5E9] dark:border-[#2A3A2E] text-center group"
            >
              <stat.icon className="text-primary text-2xl mx-auto mb-2 group-hover:rotate-12 transition-transform" />
              <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-[#22C55E]/10 px-6 py-3 rounded-full border border-primary/30">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Our team is ready to assist with your calibration needs
            </span>
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-[#15803D] transition-all"
            >
              Contact Us →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;