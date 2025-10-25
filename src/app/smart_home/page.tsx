import React from 'react';
import { Check, SmartphoneCharging, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SmartHomePage = () => {
  const features = [
    {
      number: "01", 
      title: "Make Informed Decisions",
      description: "With Power, residents gain tools to make intelligent energy decisions, saving on bills, and reducing their environmental impact. EI-driven analytics identify inefficient and unpredictable patterns and schedules those during off-peak times.",
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
     {
      number: "04",
      title: "Seamless Integration",
      description: "Power seamlessly integrates with leading smart home platforms such as Google Home, Amazon Alexa, Apple Home, and Apple HomeKit. Delivering effortless device and energy consumption management you never experienced or a mobile app.",
      image: "/app7.jpg"
    },
  ];

  const comparisonData = [
    { feature: "EI Sensors", essential: true, light: true, trinity: true },
    { feature: "Hub", essential: true, light: true, trinity: true },
    { feature: "Air Quality Sensor", essential: false, light: true, trinity: true },
    { feature: "Smart Smoke Detectors", essential: false, light: true, trinity: true },
    { feature: "Humidity Sensor", essential: false, light: true, trinity: true },
    { feature: "Smart Radiator Valves", essential: false, light: true, trinity: true },
    { feature: "Smart Light Bulbs", essential: false, light: true, trinity: true },
    { feature: "Water Leak Detection", essential: false, light: false, trinity: true },
    { feature: "Smart Water Value", essential: false, light: false, trinity: true },
    { feature: "Temperature Sensor", essential: false, light: false, trinity: true },
    { feature: "Window Sensors", essential: false, light: false, trinity: true },
    { feature: "Occupancy Sensors", essential: false, light: false, trinity: true },
  ];

  const efficiencyData = [
    { element: "Fire", essential: true, light: true, trinity: true },
    { element: "Earth", essential: true, light: true, trinity: true },
    { element: "Ether", essential: true, light: true, trinity: true },
    { element: "Air", essential: false, light: true, trinity: true },
    { element: "Water", essential: false, light: false, trinity: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl mt-8 sm:text-5xl md:text-6xl lg:text-8xl text-gray-700 font-extralight mb-4 md:mb-6 tracking-tight">
              SMART <span className="bg-gradient-to-r font-extralight from-green-400 to-emerald-500 bg-clip-text text-transparent">HOME</span>
            </h1>
            <p className="text-gray-600 max-w-6xl mx-auto text-lg sm:text-xl md:text-2xl leading-relaxed px-4">
              Power revolutionises home energy management, integrating seamlessly with your home. It monitors energy usage in real-time, offers AI-driven analytics, and evolves through machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="relative mb-12 md:mb-16 w-[90%] sm:w-[85%] mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/smart_home.jpg" 
          alt="Modern smart home living room" 
          className="object-cover w-full h-full"
          fill
          priority
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, (max-width: 1024px) 80vw, 80vw"
        />
      </div>

      {/* Energy Intelligence Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center px-4 sm:px-6 py-8 md:py-12 bg-white rounded-xl shadow-md">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-gray-900">
                EMBRACE<br />
                <span className="text-emerald-500">ENERGY<br />
                INTELLIGENCE</span>
              </h2>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-xl text-left lg:text-left">
                Power transcends the traditional smart home device category. It&apos;s an EI-comprehensive energy management system crafted to integrate flawlessly into any home setup. With Power, residents can now monitor and control their energy usage with unprecedented accuracy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium text-sm md:text-base">Energy Usage</span>
                </div>
                <span className="text-gray-400 text-xs bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center">i</span>
              </div>
              <div className="text-2xl md:text-3xl font-light text-gray-800 mb-2">12.36</div>
              <div className="text-xs text-emerald-500 mb-4">↑13%</div>
              <div className="relative h-12 md:h-16 bg-gray-50 rounded-lg overflow-hidden">
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

            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium text-sm md:text-base">Carbon Emissions</span>
                </div>
                <span className="text-gray-400 text-xs bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center">i</span>
              </div>
              <div className="text-2xl md:text-3xl font-light text-gray-800 mb-2">2.36</div>
              <div className="text-xs text-red-500 mb-4">↓13%</div>
              <div className="relative h-12 md:h-16 bg-gray-50 rounded-lg overflow-hidden">
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

            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium text-sm md:text-base">Consumption Today</span>
                </div>
                <span className="text-gray-400 text-xs bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center">i</span>
              </div>
              <div className="text-2xl md:text-3xl font-light text-gray-800 mb-2">36.85</div>
              <div className="text-xs text-red-500 mb-4">↓13%</div>
              <div className="relative h-12 md:h-16 bg-gray-50 rounded-lg overflow-hidden">
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
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20 md:space-y-32">
            {features.map((feature, index) => (
              <div 
                key={feature.number} 
                className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 md:w-20 md:h-20 border-2 md:border-3 border-green-400 rounded-2xl flex items-center justify-center transform rotate-6 bg-white shadow-lg">
                          <span className="text-green-400 font-light text-2xl md:text-3xl transform -rotate-6">
                            {feature.number}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 pt-0 sm:pt-2">
                      <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex justify-center w-full lg:w-auto">
                  <div className="relative">
                    <div className="w-64 h-[520px] sm:w-72 sm:h-[580px] md:w-80 md:h-[640px] p-2 md:p-3 rounded-[2rem] md:rounded-[3rem] shadow-xl md:shadow-2xl overflow-hidden">
                      <Image
                        src={feature.image}
                        alt="Energy dashboard mobile app showing usage statistics"
                        width={320}
                        height={640}
                        className="w-full h-full object-cover"
                        quality={100}
                      />
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <SmartphoneCharging className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Tables */}
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Plug & Play Solution */}
          <div className="mb-16 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-gray-600">
                PLUG & <span className="text-emerald-500">PLAY SOLUTION</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl px-4">
                We&apos;re introducing a plug-and-play solution with various packages to cater to different needs.
              </p>
            </div>

            {/* Table Container with Horizontal Scroll on Mobile */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mb-8">
              <div className="overflow-x-auto">
                <div className="min-w-[600px]">
                  <div className="grid grid-cols-4 gap-px bg-gray-200">
                    {/* Header Row */}
                    <div className="bg-gray-100 p-3 md:p-4"></div>
                    <div className="bg-white text-gray-700 p-3 md:p-4 text-center hover:text-white hover:bg-green-500 font-medium transition-colors duration-200 cursor-pointer text-sm md:text-base">
                      Seed
                    </div>
                    <div className="bg-white text-gray-700 p-3 md:p-4 text-center hover:text-white hover:bg-green-500 font-medium transition-colors duration-200 cursor-pointer text-sm md:text-base">
                      Light
                    </div>
                    <div className="bg-white text-gray-700 p-3 md:p-4 text-center hover:text-white hover:bg-green-500 font-medium transition-colors duration-200 cursor-pointer text-sm md:text-base">
                      Core
                    </div>
                    
                    {/* Data Rows */}
                    {comparisonData.map((item, index) => (
                      <React.Fragment key={index}>
                        <div className="bg-gray-100 p-3 text-sm font-medium text-gray-800 text-center sm:text-left">
                          {item.feature}
                        </div>
                        <div className="bg-white p-3 md:p-4 flex items-center justify-center">
                          {item.essential ? (
                            <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                          ) : (
                            <X className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                          )}
                        </div>
                        <div className="bg-gray-50 p-3 md:p-4 flex items-center justify-center">
                          {item.light ? (
                            <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                          ) : (
                            <X className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                          )}
                        </div>
                        <div className="bg-white p-3 md:p-4 flex items-center justify-center">
                          {item.trinity ? (
                            <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                          ) : (
                            <X className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                          )}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="flex flex-col items-center p-4 sm:p-6 md:p-10 space-y-4">
              <p className="text-gray-600 text-2xl sm:text-3xl md:text-4xl text-center">Join the wait list</p>
              <Link href={"/smart_factory"} className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 md:px-8 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md w-full sm:w-auto text-center text-sm md:text-base">
                Pre-Order Now
              </Link>
            </div>
          </div>

          {/* Energy Efficiency Rewards */}
          <div className="mb-16 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-gray-600">
                ENERGY <span className="text-emerald-500">EFFICIENCY REWARDS</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4">
                Make your home smarter and more sustainable while earning rewards for reducing consumption, conserving resources, and promoting health.
              </p>
            </div>

            {/* Table Container with Horizontal Scroll on Mobile */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8 md:mb-10 max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <div className="min-w-[500px]">
                  <div className="grid grid-cols-4 gap-px bg-gray-200">
                    <div className="bg-gray-100 p-3 md:p-4"></div>
                    <div className="bg-white text-gray-700 p-3 md:p-4 text-center hover:text-white hover:bg-emerald-500 transition-colors duration-200 font-medium text-sm md:text-base">Seed</div>
                    <div className="bg-white text-gray-700 p-3 md:p-4 text-center hover:text-white hover:bg-emerald-500 transition-colors duration-200 font-medium text-sm md:text-base">Light</div>
                    <div className="bg-white text-gray-700 p-3 md:p-4 text-center hover:text-white hover:bg-emerald-500 transition-colors duration-200 font-medium text-sm md:text-base">Core</div>
                    
                    {efficiencyData.map((item, index) => (
                      <React.Fragment key={index}>
                        <div className="bg-gray-100 p-3 md:p-4 font-medium text-gray-800 text-sm md:text-base">{item.element}</div>
                        <div className="bg-white p-3 md:p-4 flex items-center justify-center">
                          {item.essential ? (
                            <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                          ) : (
                            <X className="w-4 h-4 md:w-5 md:h-5 text-gray-300" />
                          )}
                        </div>
                        <div className="bg-gray-50 p-3 md:p-4 flex items-center justify-center">
                          {item.light ? (
                            <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                          ) : (
                            <X className="w-4 h-4 md:w-5 md:h-5 text-gray-300" />
                          )}
                        </div>
                        <div className="bg-white p-3 md:p-4 flex items-center justify-center">
                          {item.trinity ? (
                            <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                          ) : (
                            <X className="w-4 h-4 md:w-5 md:h-5 text-gray-300" />
                          )}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center py-6 md:py-8 px-4'>
              <p className='text-2xl sm:text-3xl md:text-4xl font-extralight text-gray-800 mb-4 md:mb-6 text-center'>Discover More</p>
              <Link 
                href={"https://clover.energy/"} 
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 md:px-8 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md w-full sm:w-auto text-center max-w-xs text-sm md:text-base"
              >
                Go to Clover
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartHomePage;