import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiAward, FiCheckCircle, FiShield } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Certifications = () => {
  const containerRef = useRef(null);
  const [isScroll, setIsscroll] = useState(false);
  const navigate = useNavigate();

  const scrollContainer = (direction) => {
    direction === "right"
      ? (containerRef.current.scrollLeft += 200)
      : (containerRef.current.scrollLeft -= 200);
    containerRef.current.scrollLeft > 0
      ? setIsscroll(true)
      : setIsscroll(false);
  };

  const certifications = [
    {
      id: 1,
      name: "ISO/IEC 17025:2017",
      issuer: "Philippines Accreditation Bureau",
      icon: FiAward,
      description: "Laboratory Accreditation No. LA-2018-324B",
      color: "from-amber-500 to-yellow-500"
    },
    {
      id: 2,
      name: "PNS ISO/IEC 17025",
      issuer: "Department of Trade and Industry",
      icon: FiCheckCircle,
      description: "Philippine National Standard for calibration laboratories",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      name: "DTI Business Registration",
      issuer: "Department of Trade and Industry",
      icon: FiShield,
      description: "Registered business entity",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      name: "SEC Registration",
      issuer: "Securities and Exchange Commission",
      icon: FiAward,
      description: "Corporation registration",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="pt-10 pb-16">
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-[#F0FDF4] dark:bg-[#1A2E1F] rounded-full">
            Our Credentials
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certified for <span className="text-primary">Excellence</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We maintain the highest standards of quality and accuracy through our accredited certifications.
          </p>
          <button 
            onClick={() => navigate("/blog")} 
            className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-[#15803D] transition-all shadow-lg shadow-primary/30 font-medium"
          >
            View All Certifications
          </button>
        </div>

        <div className="md:col-span-3">
          <div className="justify-end flex-align-center gap-x-3">
            <button
              className={`p-3 rounded-full bg-white dark:bg-[#1A2E1F] shadow-md hover:shadow-lg transition-all ${
                !isScroll && "opacity-50 cursor-not-allowed"
              }`}
              onClick={() => scrollContainer("left")}
            >
              <FiChevronLeft className="text-primary" />
            </button>
            <button
              className="p-3 rounded-full bg-white dark:bg-[#1A2E1F] shadow-md hover:shadow-lg transition-all"
              onClick={() => scrollContainer("right")}
            >
              <FiChevronRight className="text-primary" />
            </button>
          </div>

          <div
            className="flex gap-4 mt-4 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
            ref={containerRef}
          >
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="flex-shrink-0 w-[280px] bg-white dark:bg-[#1A2E1F] rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-[#E8F5E9] dark:border-[#2A3A2E] group cursor-pointer"
                onClick={() => navigate("/blog")}
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
                <div className="p-6">
                  <div className="w-14 h-14 bg-[#F0FDF4] dark:bg-[#2A3A2E] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <cert.icon className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{cert.name}</h3>
                  <p className="text-xs text-primary font-medium mb-2">{cert.issuer}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>
                  <div className="mt-4 text-xs text-primary font-medium flex items-center gap-1">
                    View details <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;