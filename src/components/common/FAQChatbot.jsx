import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const FAQChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "🤖 Hello! I'm CaliBot, your friendly calibration assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 1.2, y: 1.2 });
  const [eyeBlink, setEyeBlink] = useState(false);
  const messagesEndRef = useRef(null);
  const robotRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  // Random eye blink
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setEyeBlink(true);
      setTimeout(() => setEyeBlink(false), 150);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Initialize robot position
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRobotPosition({
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100)
      });
    }
  }, []);

  // Floating animation logic
  useEffect(() => {
    if (isOpen) return;

    const animate = () => {
      setRobotPosition(prev => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;
        let newVelocityX = velocity.x;
        let newVelocityY = velocity.y;

        if (newX <= 20) {
          newX = 20;
          newVelocityX = Math.abs(velocity.x);
        } else if (newX >= window.innerWidth - 100) {
          newX = window.innerWidth - 100;
          newVelocityX = -Math.abs(velocity.x);
        }

        if (newY <= 20) {
          newY = 20;
          newVelocityY = Math.abs(velocity.y);
        } else if (newY >= window.innerHeight - 100) {
          newY = window.innerHeight - 100;
          newVelocityY = -Math.abs(velocity.y);
        }

        if (newVelocityX !== velocity.x || newVelocityY !== velocity.y) {
          setVelocity({ x: newVelocityX, y: newVelocityY });
        }

        return { x: newX, y: newY };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isOpen, velocity]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setRobotPosition(prev => ({
        x: Math.min(Math.max(prev.x, 20), window.innerWidth - 100),
        y: Math.min(Math.max(prev.y, 20), window.innerHeight - 100)
      }));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSendMessage = (question) => {
    if (!question.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      text: question,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const lowerInput = question.toLowerCase();
      let responseText = "";
      
      if (lowerInput.includes("certification")) {
        responseText = "✅ We are ISO/IEC 17025:2017 accredited by the Philippines Accreditation Bureau (PAB). Laboratory Accreditation No. LA-2018-324B. All calibrations are traceable to international standards! 🏆";
      } 
      else if (lowerInput.includes("on-site") || lowerInput.includes("onsite")) {
        responseText = "📍 Yes! We offer on-site calibration for surface plates, large equipment, and industrial machinery. Our technicians can visit your facility. When would you like to schedule?";
      }
      else if (lowerInput.includes("how long") || lowerInput.includes("time") || lowerInput.includes("turnaround")) {
        responseText = "⏱️ Standard calibration takes 3-5 business days. We also offer rush services (24-48 hours) for urgent requirements. When do you need it?";
      }
      else if (lowerInput.includes("service") || lowerInput.includes("offer") || lowerInput.includes("calibrate")) {
        responseText = "We offer Dimensional, Electrical, Temperature, Mechanical, Mass & Weight calibration services. All are ISO/IEC 17025:2017 accredited. Would you like to know more about a specific service? 🔬";
      } 
      else if (lowerInput.includes("quotation") || lowerInput.includes("quote") || lowerInput.includes("price") || lowerInput.includes("cost")) {
        responseText = "💰 To request a quotation, please email us at sales@instrutechgroup.com or call us at (63)2 8403 0292. Our team will respond within 24 hours with a customized quote! 📧";
      }
      else if (lowerInput.includes("business hours") || lowerInput.includes("hours")) {
        responseText = "🕐 Our business hours are Monday to Friday, 8:00 AM to 5:00 PM. We're closed on weekends and public holidays. Feel free to email us anytime, and we'll respond on the next business day!";
      }
      else {
        responseText = "Thanks for reaching out! I'm here to help with calibration services, certifications, on-site calibration, turnaround times, quotations, and business hours. What would you like to know? 🤖";
      }
      
      const botMessage = {
        id: messages.length + 2,
        type: "bot",
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const faqs = [
    "What certifications do you have?",
    "Do you provide on-site calibration?",
    "How long does calibration take?",
    "What calibration services do you offer?",
    "How do I request a quotation?",
    "What are your business hours?"
  ];

  return (
    <>
      {/* Friendly CaliBot Design */}
      <motion.div
        ref={robotRef}
        animate={{
          x: robotPosition.x,
          y: robotPosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          mass: 0.5
        }}
        className="fixed z-50 cursor-pointer group"
        style={{
          left: 0,
          top: 0,
          position: 'fixed'
        }}
      >
        {/* Floating Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-primary to-[#22C55E] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
        >
          Ask CaliBot! 🤖 
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></div>
        </motion.div>

        {/* Main Robot Design */}
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="relative"
        >
          {/* Main Body - Friendly Round Shape */}
          <div className="relative w-20 h-20">
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-md"></div>
            
            {/* Main Body */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#22C55E] rounded-full shadow-2xl"></div>
            
            {/* Face Container */}
            <div className="absolute inset-2 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
              {/* Friendly Eyes */}
              <div className="flex gap-4 mb-2">
                {/* Left Eye */}
                <motion.div
                  animate={{ scaleY: eyeBlink ? 0.1 : 1 }}
                  transition={{ duration: 0.1 }}
                  className="relative"
                >
                  <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                </motion.div>
                
                {/* Right Eye */}
                <motion.div
                  animate={{ scaleY: eyeBlink ? 0.1 : 1 }}
                  transition={{ duration: 0.1 }}
                  className="relative"
                >
                  <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                </motion.div>
              </div>
              
              {/* Friendly Smile */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg width="24" height="12" viewBox="0 0 24 12">
                  <path
                    d="M4 4 C8 8, 16 8, 20 4"
                    stroke="#22C55E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </motion.div>
              
              {/* Blush */}
              <div className="absolute -bottom-1 left-2 flex gap-1">
                <div className="w-1.5 h-1.5 bg-pink-300 rounded-full opacity-60"></div>
                <div className="w-1.5 h-1.5 bg-pink-300 rounded-full opacity-60"></div>
              </div>
              <div className="absolute -bottom-1 right-2 flex gap-1">
                <div className="w-1.5 h-1.5 bg-pink-300 rounded-full opacity-60"></div>
                <div className="w-1.5 h-1.5 bg-pink-300 rounded-full opacity-60"></div>
              </div>
            </div>
            
            {/* Cute Antenna */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="w-0.5 h-4 bg-white"></div>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-yellow-300 rounded-full shadow-md flex items-center justify-center text-[8px]"
              >
                ⚙️
              </motion.div>
            </div>
            
            {/* Friendly Ears */}
            <div className="absolute -left-2 top-5">
              <div className="w-3 h-5 bg-gradient-to-r from-primary to-[#22C55E] rounded-full opacity-80"></div>
            </div>
            <div className="absolute -right-2 top-5">
              <div className="w-3 h-5 bg-gradient-to-l from-primary to-[#22C55E] rounded-full opacity-80"></div>
            </div>
          </div>
          
          {/* Friendly Pulse Ring */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-white/60"
          />
          
          {/* Status Dot */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-lg"
          />
          
          {/* Friendly Floating Particles */}
          <motion.div
            animate={{ y: [0, -8, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="absolute -top-2 -left-2 text-xs"
          >
            ✨
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0], x: [0, 2, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }}
            className="absolute -bottom-1 -right-2 text-[10px]"
          >
            💚
          </motion.div>
          <motion.div
            animate={{ y: [0, -5, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 1.2 }}
            className="absolute top-1 right-0 text-[8px]"
          >
            ⭐
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] h-[500px] bg-white dark:bg-[#1A2E1F] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#E8F5E9] dark:border-[#2A3A2E]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-[#22C55E] p-3 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-lg">
                    🤖
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Frequently Asked Questions</h3>
                    <p className="text-xs text-white/80">Hi, I'm Calibot!</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
                >
                  <FiX className="text-white text-sm" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50 dark:bg-[#0F172A] min-h-0">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.type === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-[#22C55E] flex items-center justify-center mr-1.5 flex-shrink-0 mt-1">
                      <span className="text-xs">🤖</span>
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] p-2 rounded-xl ${
                      msg.type === "user"
                        ? "bg-primary text-white rounded-tr-none"
                        : "bg-white dark:bg-[#2A3A2E] text-gray-900 dark:text-gray-100 rounded-tl-none shadow-sm border border-gray-200 dark:border-[#3A4A3E]"
                    }`}
                  >
                    <p className={`text-xs leading-relaxed font-medium ${msg.type === "user" ? "text-white" : "text-gray-900 dark:text-gray-100"}`}>
                      {msg.text}
                    </p>
                    <span className={`text-[9px] mt-0.5 block text-right ${msg.type === "user" ? "text-white/70" : "text-gray-500 dark:text-gray-400"}`}>
                      {msg.time}
                    </span>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-[#22C55E] flex items-center justify-center mr-1.5">
                    <span className="text-xs">🤖</span>
                  </div>
                  <div className="bg-white dark:bg-[#2A3A2E] p-2 rounded-xl rounded-tl-none shadow-sm border border-gray-200 dark:border-[#3A4A3E]">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* FAQ Questions */}
            <div className="border-t border-gray-200 dark:border-[#2A3A2E] p-3 bg-gray-50 dark:bg-[#0F172A]">
              <p className="text-xs text-gray-700 dark:text-gray-300 mb-2 font-semibold">📋 Click a question to ask CaliBot:</p>
              <div className="grid grid-cols-2 gap-1.5 max-h-[100px] overflow-y-auto">
                {faqs.map((faq, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSendMessage(faq)}
                    className="text-[11px] font-medium bg-white dark:bg-[#2A3A2E] text-primary dark:text-[#4ADE80] px-2 py-1.5 rounded-lg border border-primary/40 dark:border-[#4ADE80]/40 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all text-left truncate"
                  >
                    {faq}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-2 border-t border-gray-200 dark:border-[#2A3A2E] bg-white dark:bg-[#1A2E1F]">
              <p className="text-[9px] text-gray-600 dark:text-gray-400 text-center font-medium">
                CaliBot • Your Friendly Calibration Assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FAQChatbot;