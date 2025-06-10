import React from 'react';
import { Check, X } from 'lucide-react';
import Image from 'next/image';

const SmartHomePage = () => {
  const features = [
    // {
    //   number: "01",
    //   title: "Seamless Integration",
    //   description: "Power seamlessly integrates with leading smart home platforms such as Google Home, Amazon Alexa, Apple Home, and Apple HomeKit. Delivering effortless device and energy consumption management you never experienced or a mobile app.",
    //   image: "/smart3d1.png"
    // },
    {
      number: "01", 
      title: "Make Informed Decisions",
      description: "With Power, residents gain tools to make intelligent energy decisions, saving on bills, and reducing their environmental impact. AI-driven analytics identify inefficient and unpredictable patterns and schedules those during off-peak times.",
      image: "/app2.png"
    },
    {
      number: "02",
      title: "Environment Monitoring", 
      description: "In addition to managing your electricity consumption usage like traditional systems, Power will help you comprehend and manage your home efficiency, where you reduce your energy in some usage that even affected the quality of the air in your home.",
      image: "/app4.png"
    },
    {
      number: "03",
      title: "Machine Learning",
      description: "AI-drive algorithms Power constantly learns and algorithms effortless in energy monitoring, recommendations, and overall management solutions. By bringing the power of optimized real-time performance of smart technology promises the features designed to optimize efficiency.",
      image: "/app6.png"
    },
    // {
    //   number: "05", 
    //   title: "Sustainability",
    //   description: "Power's efforts extends beyond financial savings. It's about contributing to energy consumption. Power will aid in creating a cleaner consumer - fostering a more sustainable future.",
    //   image: "/smart3d5.png"
    // },
    // {
    //   number: "06",
    //   title: "Our Pledge",
    //   description: "Power is committed to ensuring renewable resource for home and energy",
    //   image: "/smart3d6.png"
    // }
  ];

  const comparisonData = [
    { feature: "EI  Sensor", essential: true, light: true, trinity: true },
    { feature: "Hub", essential: true, light: true, trinity: true },
    { feature: "Air Quality Sensor", essential: false, light: false, trinity: true },
    { feature: "Smart Thermostat", essential: true, light: true, trinity: true },
    { feature: "Water Leak Detection", essential: false, light: false, trinity: true },
    { feature: "Temperature Sensor", essential: false, light: false, trinity: true },
    { feature: "Humidity Sensor", essential: false, light: false, trinity: true },
    { feature: "Smart Light Bulbs", essential: false, light: true, trinity: true },
    { feature: "Smart Radiator Valves", essential: false, light: true, trinity: true },
    { feature: "Window Sensors", essential: false, light: false, trinity: true },
    { feature: "Occupancy Sensors", essential: false, light: false, trinity: true },
    { feature: "Smart Water Value", essential: false, light: false, trinity: true },
    { feature: "Smart Smoke Detectors", essential: false, light: false, trinity: true },
    // { feature: "Smart Plugs", essential: false, light: false, trinity: true }
  ];

  const efficiencyData = [
    { element: "Fire", essential: true, light: true, trinity: true },
    { element: "Earth", essential: true, light: true, trinity: true },
    { element: "Ether", essential: true, light: true, trinity: true },
    { element: "Air", essential: true, light: true, trinity: true },
    { element: "Water", essential: false, light: false, trinity: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl text-gray-700 md:text-6xl font-light mb-6 tracking-tight">
              SMART <span className="text-emerald-500 font-normal">HOME</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Power revolutionises home energy management, integrating seamlessly with your home. It monitors energy usage in real-time, offers AI-driven analytics, and evolves through machine learning.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative mb-16 overflow-hidden rounded-3xl shadow-xl">
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <Image
                src="/smart_home.jpg" 
                alt="Modern smart home living room" 
                className="w-full h-full object-cover"
                width={900}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Energy Intelligence Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 py-12 bg-white rounded-xl shadow-md">
  {/* Left Column - Heading */}
  <div>
    <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-gray-900">
      EMBRACE<br />
      ENERGY<br />
      <span className="text-emerald-500">INTELLIGENCE</span>
    </h2>
  </div>

  {/* Right Column - Paragraph */}
  <div>
    <p className="text-gray-600 leading-relaxed text-lg max-w-xl text-right lg:text-left">
      Power transcends the traditional smart home device category. It&apos;s an AI-comprehensive energy management system crafted to integrate flawlessly into any home setup. With Power, residents can now monitor and control their energy usage with unprecedented accuracy.
    </p>
  </div>
</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Energy Usage</span>
                  </div>
                  <span className="text-gray-400 text-xs bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center">i</span>
                </div>
                <div className="text-3xl font-light text-gray-800 mb-2">12.36</div>
                <div className="text-xs text-emerald-500 mb-4">↑13%</div>
                <div className="relative h-16 bg-gray-50 rounded-lg overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 200 60">
                    <path
                      d="M0,45 Q50,30 100,35 T200,25"
                      stroke="#10b981"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M0,45 Q50,30 100,35 T200,25 L200,60 L0,60 Z"
                      fill="url(#greenGradient)"
                      opacity="0.3"
                    />
                    <defs>
                      <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#d1fae5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text-xs text-gray-400 mt-2">KWh/sq ft</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Carbon Emissions</span>
                  </div>
                  <span className="text-gray-400 text-xs bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center">i</span>
                </div>
                <div className="text-3xl font-light text-gray-800 mb-2">2.36</div>
                <div className="text-xs text-red-500 mb-4">↓13%</div>
                <div className="relative h-16 bg-gray-50 rounded-lg overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 200 60">
                    <path
                      d="M0,35 Q50,25 100,30 T200,20"
                      stroke="#ef4444"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M0,35 Q50,25 100,30 T200,20 L200,60 L0,60 Z"
                      fill="url(#redGradient)"
                      opacity="0.3"
                    />
                    <defs>
                      <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#fee2e2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Consumption Today</span>
                  </div>
                  <span className="text-gray-400 text-xs bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center">i</span>
                </div>
                <div className="text-3xl font-light text-gray-800 mb-2">36.85</div>
                <div className="text-xs text-red-500 mb-4">↓13%</div>
                <div className="relative h-16 bg-gray-50 rounded-lg overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 200 60">
                    <path
                      d="M0,40 Q50,30 100,35 T200,25"
                      stroke="#ef4444"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M0,40 Q50,30 100,35 T200,25 L200,60 L0,60 Z"
                      fill="url(#redGradient2)"
                      opacity="0.3"
                    />
                    <defs>
                      <linearGradient id="redGradient2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#fee2e2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text-xs text-gray-400 mt-2">KWh/sq ft</div>
              </div>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {features.map((feature, index) => (
              <div 
                key={feature.number} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Side */}
                <div className="flex-1">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-20 h-20 border-3 border-green-400 rounded-2xl flex items-center justify-center transform rotate-6 bg-white shadow-lg">
                        <span className="text-green-400 font-light text-3xl transform -rotate-6">
                          {feature.number}
                        </span>
                      </div>
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl font-medium mb-4 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className=" relative overflow-hidden rounded-2xl shadow-xlw-full md:w-2/5 max-w-[500px] mx-auto">
                                    <Image
                                      src={feature.image}
                                      width={400}
                                      height={600}
                                      alt="Education"
                                      className="w-full h-auto object-contain"
                                    />
                                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Tables */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Plug & Play Solution */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-gray-600 md:text-5xl font-light mb-4">
                PLUG & <span className="text-emerald-500">PLAY SOLUTION</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-3xl">
                We&apos;re introducing a plug-and-play solution with various packages to cater to different needs.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-4 gap-px bg-gray-200">
                <div className="bg-gray-100 p-4"></div>
                <div className="bg-white text-gray-700 p-4 text-center hover:text-white hover:bg-black font-medium">Seed</div>
                <div className="bg-white text-gray-700 hover:text-white hover:bg-black p-4 text-center font-medium ">Light</div>
                <div className="bg-white text-gray-700 p-4 text-center hover:text-white hover:bg-black font-medium">Core</div>
                
                {comparisonData.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="bg-gray-100 p-4 font-medium text-gray-800">{item.feature}</div>
                    <div className="bg-white p-4 flex items-center justify-center">
                      {item.essential ? (
                        <Check className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                    <div className="bg-gray-50 p-4 flex items-center justify-center">
                      {item.light ? (
                        <Check className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                    <div className="bg-white p-4 flex items-center justify-center">
                      {item.trinity ? (
                        <Check className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Energy Efficiency Rewards */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl text-gray-600 md:text-5xl font-light mb-4">
                ENERGY <span className="text-emerald-500">EFFICIENCY REWARDS</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-3xl">
                Make your home smarter and more sustainable while earning rewards for reducing consumption, conserving resources, and promoting health.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-4 gap-px bg-gray-200">
                <div className="bg-gray-100 p-4"></div>
               <div className="bg-white text-gray-700 p-4 text-center hover:text-white hover:bg-black font-medium">Seed</div>
                <div className="bg-white text-gray-700 hover:text-white hover:bg-black p-4 text-center font-medium ">Light</div>
                <div className="bg-white text-gray-700 p-4 text-center hover:text-white hover:bg-black font-medium">Core</div>
                 
                {efficiencyData.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="bg-gray-100 p-4 font-medium text-gray-800">{item.element}</div>
                    <div className="bg-white p-4 flex items-center justify-center">
                      {item.essential ? (
                        <Check className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                    <div className="bg-gray-50 p-4 flex items-center justify-center">
                      {item.light ? (
                        <Check className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                    <div className="bg-white p-4 flex items-center justify-center">
                      {item.trinity ? (
                        <Check className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartHomePage;