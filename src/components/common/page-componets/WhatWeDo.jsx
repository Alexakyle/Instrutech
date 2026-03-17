import { GiCrosshair, GiElectric, GiThermometerHot, GiGearHammer, GiWeightScale, GiMicroscope } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const WhatWeDo = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 bg-white dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F0FDF4] dark:bg-[#1A2E1F] px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <h1 className="text-sm font-medium text-primary uppercase tracking-wider">what we do</h1>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Precision Calibration & <span className="text-primary">Metrology Services</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ISO/IEC 17025:2017 accredited laboratory providing accurate calibration solutions for various measuring instruments
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Service 1 - Dimensional Calibration */}
          <div
            className="group relative p-6 bg-white dark:bg-[#1A2E1F] rounded-2xl border border-[#E8F5E9] dark:border-[#2A3A2E] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              {/* Icon with animated background */}
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#22C55E] rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300 flex items-center justify-center">
                  <GiCrosshair className="text-3xl text-white" />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                Dimensional Calibration
              </h1>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Precision calibration of gauge blocks, calipers, micrometers, and other dimensional measuring instruments.
              </p>
              
              {/* Features list */}
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Gauge Blocks & Surface Plates
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Calipers & Micrometers
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Height Gauges & Indicators
                </li>
              </ul>
              
              <button 
                className="inline-flex items-center gap-2 text-primary font-medium group/btn"
                onClick={() => navigate("/services/dimensional")}
              >
                Learn More 
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Service 2 - Electrical Calibration */}
          <div
            className="group relative p-6 bg-white dark:bg-[#1A2E1F] rounded-2xl border border-[#E8F5E9] dark:border-[#2A3A2E] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#22C55E] rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300 flex items-center justify-center">
                  <GiElectric className="text-3xl text-white" />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                Electrical Calibration
              </h1>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Accurate calibration of multimeters, oscilloscopes, power supplies, and LCR meters.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Digital Multimeters
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Oscilloscopes
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  LCR Meters
                </li>
              </ul>
              
              <button 
                className="inline-flex items-center gap-2 text-primary font-medium group/btn"
                onClick={() => navigate("/services/electrical")}
              >
                Learn More 
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Service 3 - Temperature Calibration */}
          <div
            className="group relative p-6 bg-white dark:bg-[#1A2E1F] rounded-2xl border border-[#E8F5E9] dark:border-[#2A3A2E] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#22C55E] rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300 flex items-center justify-center">
                  <GiThermometerHot className="text-3xl text-white" />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                Temperature Calibration
              </h1>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Precise calibration of thermometers, thermocouples, and temperature chambers.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Thermometers & Probes
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Temperature Chambers
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Thermocouples & RTDs
                </li>
              </ul>
              
              <button 
                className="inline-flex items-center gap-2 text-primary font-medium group/btn"
                onClick={() => navigate("/services/temperature")}
              >
                Learn More 
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Service 4 - Mechanical Calibration */}
          <div
            className="group relative p-6 bg-white dark:bg-[#1A2E1F] rounded-2xl border border-[#E8F5E9] dark:border-[#2A3A2E] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#22C55E] rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300 flex items-center justify-center">
                  <GiGearHammer className="text-3xl text-white" />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                Mechanical Calibration
              </h1>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Torque wrenches, pressure gauges, force gauges, and mechanical test equipment.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Torque Wrenches
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Pressure Gauges
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Force Gauges
                </li>
              </ul>
              
              <button 
                className="inline-flex items-center gap-2 text-primary font-medium group/btn"
                onClick={() => navigate("/services/mechanical")}
              >
                Learn More 
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Service 5 - Mass/Weight Calibration */}
          <div
            className="group relative p-6 bg-white dark:bg-[#1A2E1F] rounded-2xl border border-[#E8F5E9] dark:border-[#2A3A2E] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#22C55E] rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300 flex items-center justify-center">
                  <GiWeightScale className="text-3xl text-white" />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                Mass & Weight Calibration
              </h1>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Precision calibration of analytical balances, weights, and mass standards.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Analytical Balances
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Test Weights
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Mass Standards
                </li>
              </ul>
              
              <button 
                className="inline-flex items-center gap-2 text-primary font-medium group/btn"
                onClick={() => navigate("/services/mass")}
              >
                Learn More 
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Service 6 - Training Programs */}
          <div
            className="group relative p-6 bg-white dark:bg-[#1A2E1F] rounded-2xl border border-[#E8F5E9] dark:border-[#2A3A2E] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#22C55E] rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300 flex items-center justify-center">
                  <GiMicroscope className="text-3xl text-white" />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                Training Programs
              </h1>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Customized training courses related to calibration procedures and metrology.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Calibration Fundamentals
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  ISO 17025 Awareness
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Measurement Uncertainty
                </li>
              </ul>
              
              <button 
                className="inline-flex items-center gap-2 text-primary font-medium group/btn"
                onClick={() => navigate("/services/training")}
              >
                Learn More 
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button 
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl hover:bg-[#15803D] transition-all duration-300 shadow-lg shadow-primary/30 group"
            onClick={() => navigate("/services")}
          >
            <span className="font-medium">View All Services</span>
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;