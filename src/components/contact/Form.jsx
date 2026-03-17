import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiCheckCircle, FiUser, FiMail, FiMessageSquare, FiPhone, FiBriefcase } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create email body
    const subject = `Calibration Inquiry from ${formData.fullName}`;
    const body = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Company: ${formData.company}
Contact Number: ${formData.phone}

Calibration Needs:
${formData.message}
    `;
    
    // Open default email client
    window.location.href = `mailto:humprey149@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success
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
    }, 1000);
  };

  const inputVariants = {
    focused: { scale: 1.02, borderColor: "#22C55E", boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.2)" },
    blurred: { scale: 1, borderColor: "#E8F5E9", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)" }
  };

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#22C55E]/5" />
      
      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Send Us Your <span className="text-primary">Calibration Needs</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group"
        >
          {/* Glowing background effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-[#22C55E] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000" />
          
          <div className="relative bg-white dark:bg-[#1A2E1F] p-8 rounded-2xl shadow-2xl border border-[#E8F5E9] dark:border-[#2A3A2E] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#22C55E]/10 to-transparent rounded-tr-full" />
            
            <form onSubmit={handleSubmit} className="relative z-10">
              {/* Full Name */}
              <motion.div
                initial="blurred"
                animate={focusedField === "fullName" ? "focused" : "blurred"}
                variants={inputVariants}
                transition={{ duration: 0.2 }}
                className="relative mb-6"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <FiUser className="text-primary" />
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("fullName")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-[#F0FDF4] dark:bg-[#2A3A2E] border border-[#E8F5E9] dark:border-[#2A3A2E] rounded-xl focus:outline-none transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="John Doe"
                  required
                />
                <AnimatePresence>
                  {formData.fullName && focusedField === "fullName" && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute right-3 top-12 text-primary"
                    >
                      <FiCheckCircle />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Email */}
              <motion.div
                initial="blurred"
                animate={focusedField === "email" ? "focused" : "blurred"}
                variants={inputVariants}
                transition={{ duration: 0.2 }}
                className="relative mb-6"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <FiMail className="text-primary" />
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-[#F0FDF4] dark:bg-[#2A3A2E] border border-[#E8F5E9] dark:border-[#2A3A2E] rounded-xl focus:outline-none transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="you@company.com"
                  required
                />
                <AnimatePresence>
                  {formData.email && focusedField === "email" && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute right-3 top-12 text-primary"
                    >
                      <FiCheckCircle />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Company Name */}
              <motion.div
                initial="blurred"
                animate={focusedField === "company" ? "focused" : "blurred"}
                variants={inputVariants}
                transition={{ duration: 0.2 }}
                className="relative mb-6"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <FiBriefcase className="text-primary" />
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-[#F0FDF4] dark:bg-[#2A3A2E] border border-[#E8F5E9] dark:border-[#2A3A2E] rounded-xl focus:outline-none transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="Your Company Inc."
                />
              </motion.div>

              {/* Contact Number */}
              <motion.div
                initial="blurred"
                animate={focusedField === "phone" ? "focused" : "blurred"}
                variants={inputVariants}
                transition={{ duration: 0.2 }}
                className="relative mb-6"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <FiPhone className="text-primary" />
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-[#F0FDF4] dark:bg-[#2A3A2E] border border-[#E8F5E9] dark:border-[#2A3A2E] rounded-xl focus:outline-none transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="+63 912 345 6789"
                  required
                />
                <AnimatePresence>
                  {formData.phone && focusedField === "phone" && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute right-3 top-12 text-primary"
                    >
                      <FiCheckCircle />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Message */}
              <motion.div
                initial="blurred"
                animate={focusedField === "message" ? "focused" : "blurred"}
                variants={inputVariants}
                transition={{ duration: 0.2 }}
                className="relative mb-8"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <BiEnvelope className="text-primary" />
                  Tell us your calibration needs <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-[#F0FDF4] dark:bg-[#2A3A2E] border border-[#E8F5E9] dark:border-[#2A3A2E] rounded-xl focus:outline-none transition-all duration-300 text-gray-900 dark:text-white resize-none"
                  placeholder="Please describe the calibration services you need..."
                  required
                />
                <AnimatePresence>
                  {formData.message && focusedField === "message" && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute right-3 bottom-4 text-primary"
                    >
                      <FiCheckCircle />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full relative overflow-hidden group/btn bg-gradient-to-r from-primary to-[#22C55E] text-white py-4 rounded-xl font-bold text-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {/* Shine effect */}
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
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <FiCheckCircle className="text-2xl" />
                        Sent! Check your email
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <FiSend className="group-hover/btn:translate-x-2 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </motion.div>

              {/* Success Message */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl text-center"
                  >
                    🎉 Thank you! Your inquiry has been sent to humprey149@gmail.com
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Form;