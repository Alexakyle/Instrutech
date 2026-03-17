import { useNavigate } from "react-router-dom";
import Card from "../../common/page-componets/Card";
import { FiCheckCircle, FiClock, FiAward, FiUsers } from "react-icons/fi";

const Hero = () => {
  const navigate = useNavigate(); 

  return (
    <div className="relative flex flex-wrap min-h-screen gap-2 md:-mt-10 bg-white dark:bg-[#0F172A]">
      {/* Left side - Text content */}
      <div className="flex-1 basis-[25rem] text-gray-800 dark:text-gray-200 px-[3%] md:px-[6%] mt-20 z-10">
        {/* Quality | Accuracy | Precision */}
        <div className="mb-2 text-sm font-medium tracking-wider text-primary uppercase flex items-center gap-2">
          <span className="w-8 h-[2px] bg-primary"></span>
          Quality | Accuracy | Precision
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl font-bold lg:text-5xl text-gray-900 dark:text-white leading-tight">
          Aims to be One-Stop <br className="hidden sm:block" />
          <span className="text-primary">Calibration Service</span> Provider
        </h1>
        
        {/* Description */}
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          and become a premier laboratory in the world of metrology with ISO/IEC 17025:2017 accreditation.
        </p>
        
        {/* Stats/Highlights */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="bg-[#F0FDF4] dark:bg-[#1A2E1F] p-3 rounded-xl text-center">
            <FiAward className="text-primary text-2xl mx-auto mb-1" />
            <p className="text-sm font-bold text-gray-900 dark:text-white">ISO</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Accredited</p>
          </div>
          <div className="bg-[#F0FDF4] dark:bg-[#1A2E1F] p-3 rounded-xl text-center">
            <FiClock className="text-primary text-2xl mx-auto mb-1" />
            <p className="text-sm font-bold text-gray-900 dark:text-white">15+</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Years</p>
          </div>
          <div className="bg-[#F0FDF4] dark:bg-[#1A2E1F] p-3 rounded-xl text-center">
            <FiUsers className="text-primary text-2xl mx-auto mb-1" />
            <p className="text-sm font-bold text-gray-900 dark:text-white">100+</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Clients</p>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="mt-6 flex-align-center gap-x-4">
          <button
            className="btn bg-primary text-white hover:bg-[#15803D] transition-a px-5 py-2 text-sm shadow-lg shadow-primary/30 rounded-full"
            onClick={() => navigate("/about")}  
          >
            Learn more
          </button>
          <button
            className="btn bg-transparent text-primary border border-primary hover:bg-[#F0FDF4] dark:hover:bg-[#166534]/20 transition-a px-5 py-2 text-sm flex items-center gap-1 rounded-full"
            onClick={() => navigate("/services")}  
          >
            Services <span>→</span>
          </button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1 bg-gray-50 dark:bg-[#1A2E1F]/50 px-2 py-1 rounded-full">
            <FiCheckCircle className="text-primary text-xs" /> Quick Turnaround
          </span>
          <span className="flex items-center gap-1 bg-gray-50 dark:bg-[#1A2E1F]/50 px-2 py-1 rounded-full">
            <FiCheckCircle className="text-primary text-xs" /> Professional
          </span>
          <span className="flex items-center gap-1 bg-gray-50 dark:bg-[#1A2E1F]/50 px-2 py-1 rounded-full">
            <FiCheckCircle className="text-primary text-xs" /> Quality First
          </span>
        </div>
      </div>
      
      {/* Right side - Card with decorative green lines background */}
      <div className="flex-1 basis-[30rem] h-[700px] relative mt-2 mr-6 flex items-start justify-center pt-10">
        {/* Decorative green lines background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Diagonal lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                style={{
                  top: `${i * 60}px`,
                  left: '-50%',
                  transform: `rotate(${i * 5}deg)`,
                  animation: `slide ${20 + i * 2}s linear infinite`,
                }}
              />
            ))}
          </div>
          
          {/* Vertical lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-[2px] h-[200%] bg-gradient-to-b from-transparent via-[#22C55E]/20 to-transparent"
                style={{
                  left: `${i * 80}px`,
                  top: '-50%',
                  transform: `rotate(${i * 10}deg)`,
                  animation: `slideVertical ${15 + i * 3}s linear infinite`,
                }}
              />
            ))}
          </div>
          
          {/* Circles/Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#22C55E]/10 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, rgba(22, 101, 52, 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}>
          </div>
        </div>
        
        {/* Card container - Positioned UPPER and a little bit to the LEFT */}
        <div className="relative z-10 transform scale-100 hover:scale-105 transition-transform duration-500 -mt-20 -ml-100">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full animate-pulse"></div>
          
          {/* Card */}
          <div className="relative">
            <Card />
          </div>
        </div>
        
        {/* Floating green elements */}
        <div className="absolute top-20 right-10 w-24 h-24 border-2 border-primary/30 rounded-full animate-ping opacity-20"></div>
        <div className="absolute bottom-40 left-10 w-36 h-36 border border-[#22C55E]/30 rounded-full animate-pulse"></div>
        
        {/* Badges - adjusted for left shift */}
        <div className="absolute top-20 -right-8 bg-white dark:bg-[#1A2E1F] px-4 py-2 rounded-full shadow-lg text-sm font-semibold text-primary border-2 border-primary/30">
          ISO 17025
        </div>
        <div className="absolute bottom-48 -left-8 bg-white dark:bg-[#1A2E1F] px-4 py-2 rounded-full shadow-lg text-sm font-semibold text-[#22C55E] border-2 border-[#22C55E]/30">
          Accredited
        </div>
        <div className="absolute top-40 -right-10 bg-white dark:bg-[#1A2E1F] px-4 py-2 rounded-full shadow-lg text-sm font-semibold text-primary/80 border-2 border-primary/20">
          Precision
        </div>
      </div>

      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%) rotate(5deg); }
          100% { transform: translateX(100%) rotate(5deg); }
        }
        @keyframes slideVertical {
          0% { transform: translateY(-100%) rotate(10deg); }
          100% { transform: translateY(100%) rotate(10deg); }
        }
      `}</style>
    </div>
  );
};

export default Hero;