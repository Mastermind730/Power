import React from 'react';
import { Check, X } from 'lucide-react';
import Image from 'next/image';

const SmartFactoryPage = () => {
  const features = [
    {
      number: "01", 
      title: "Unified Operations Dashboard",
      description: "Gain a centralized, real-time view of your entire manufacturing process. Monitor key performance indicators (KPIs), track production targets, and make data-driven decisions from a single, intuitive interface.",
      image: "/analytics.jpg"
    },
    {
      number: "02",
      title: "Predictive Maintenance", 
      description: "Leverage AI-powered sensors on your critical machinery to predict potential failures before they happen. Schedule maintenance proactively, minimise unplanned downtime, and extend the lifespan of your equipment.",
      image: "/sensor.jpg"
    },
    // {
    //   number: "03",
    //   title: "Automated Quality Control",
    //   description: "Implement high-speed vision systems and AI algorithms to inspect products in real-time. Detect defects, ensure consistency, and reduce waste, maintaining the highest quality standards automatically.",
    //   image: "/robotic_arm.jpg"
    // },
    {
      number: "03",
      title: "Industrial Energy Management",
      description: "Monitor energy consumption across your facility down to the individual machine level. Identify inefficiencies, optimize usage during peak and off-peak hours, and significantly reduce your factory's energy costs and carbon footprint.",
      image: "/images.jpg"  
    },
    {
      number: "04", 
      title: "Energy Intelligence",
      description: "Our solution integrates a predictive AI engine dedicated to optimizing your facility's energy consumption. It goes beyond simple monitoring by learning the unique energy signature of your operations—analyzing production schedules, machine states, and variable energy pricing in real time. The system then autonomously shifts energy-intensive processes to lower-cost periods and identifies inefficient equipment before it impacts your budget, all without compromising production targets. This proactive approach dramatically reduces your energy spend and carbon footprint, ensuring sustainable and cost-effective operations.",
      image: "/energy.png"
    },
    // {
    //   number: "06",
    //   title: "Enhanced Workforce Safety",
    //   description: "Deploy smart sensors and wearables to monitor environmental conditions, detect potential hazards, and ensure compliance with safety protocols. Create a safer, more secure working environment for your entire team.",
    //   image: "/smart_safety.avif"
    // }
  ];

  const benefitData = [
    { feature: "Downtime Reduction", basic: false, pro: true, enterprise: true },
    { feature: "OEE Improvement", basic: false, pro: true, enterprise: true },
    { feature: "Energy Savings", basic: true, pro: true, enterprise: true },
    { feature: "Quality Improvement", basic: false, pro: true, enterprise: true },
    { feature: "Remote Monitoring", basic: true, pro: true, enterprise: true },
    { feature: "Predictive Analytics", basic: false, pro: true, enterprise: true },
    { feature: "AI Quality Control", basic: false, pro: false, enterprise: true },
    // { feature: "Supply Chain Integration", basic: false, pro: false, enterprise: true },
    { feature: "Safety Monitoring", basic: true, pro: true, enterprise: true },
    { feature: "Custom Reporting", basic: false, pro: true, enterprise: true },
    { feature: "API Access", basic: false, pro: true, enterprise: true },
    { feature: "Dedicated Support", basic: false, pro: true, enterprise: true }
  ];

  const planData = [
    { feature: "Number of Machines", basic: "16", pro: "16", enterprise: "16" },
    { feature: "Data Retention", basic: "90 days", pro: "1 Year", enterprise: "3 year+" },
    { feature: "User Accounts", basic: "1", pro: "3", enterprise: "Unlimited" },
    { feature: "Update Frequency", basic: "Daily", pro: "Hourly", enterprise: "Instantly" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl mt-20 text-gray-700 md:text-6xl font-extralight mb-6 tracking-tight">
              <span className="text-green-500 font-extralight">FUTURE</span> OF PRODUCTION
            </h1>
            <p className="text-gray-600 max-w-6xl mx-auto text-2xl leading-relaxed">
              Our integrated platform provides a unified view of your entire production floor, turning data into actionable insights that drive efficiency, productivity, and growth.
            </p>
          </div>


          {/* Hero Image */}
         
        </div>
      </section>
          <div className="relative mb-16 w-[75%] mx-auto h-[700px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/factory_hero.jpg" 
                alt="Modern factory floor with robotic arms" 
                className="w-full h-full object-cover"
                fill
              priority
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"

              />
            </div>
        
      {/* Operational Intelligence Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 py-12 bg-white rounded-xl shadow-md">
            {/* Left Column - Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-gray-900">
                EMBRACE<br />
                OPERATIONAL<br />
                <span className="text-green-500">INTELLIGENCE</span>
              </h2>
            </div>

            {/* Right Column - Paragraph */}
            <div>
              <p className="text-gray-600 leading-relaxed text-lg max-w-xl text-right lg:text-left">
                Our Smart Factory solutions transform your production facility into a connected, data-driven environment, unlocking unprecedented levels of efficiency, productivity, and operational insight.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Downtime Reduction</span>
                </div>
                <span className="text-gray-400 text-xs bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center">i</span>
              </div>
              <div className="text-3xl font-light text-gray-800 mb-2">30%</div>
              <div className="text-xs text-green-500 mb-4">Through predictive analytics</div>
              <div className="relative h-16 bg-gray-50 rounded-lg overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 200 60">
                  <path
                    d="M0,45 Q50,30 100,35 T200,25"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M0,45 Q50,30 100,35 T200,25 L200,60 L0,60 Z"
                    fill="url(#blueGradient)"
                    opacity="0.3"
                  />
                  <defs>
                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#bfdbfe" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">OEE Increase</span>
                </div>
                <span className="text-gray-400 text-xs bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center">i</span>
              </div>
              <div className="text-3xl font-light text-gray-800 mb-2">30%</div>
              <div className="text-xs text-green-500 mb-4">Overall Equipment Effectiveness</div>
              <div className="relative h-16 bg-gray-50 rounded-lg overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 200 60">
                  <path
                    d="M0,35 Q50,25 100,30 T200,40"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M0,35 Q50,25 100,30 T200,40 L200,60 L0,60 Z"
                    fill="url(#blueGradient2)"
                    opacity="0.3"
                  />
                  <defs>
                    <linearGradient id="blueGradient2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#bfdbfe" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Energy Savings</span>
                </div>
                <span className="text-gray-400 text-xs bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center">i</span>
              </div>
              <div className="text-3xl font-light text-gray-800 mb-2">21-33%</div>
              <div className="text-xs text-green-500 mb-4">Reduction in consumption</div>
              <div className="relative h-16 bg-gray-50 rounded-lg overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 200 60">
                  <path
                    d="M0,40 Q50,30 100,35 T200,25"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M0,40 Q50,30 100,35 T200,25 L200,60 L0,60 Z"
                    fill="url(#blueGradient3)"
                    opacity="0.3"
                  />
                  <defs>
                    <linearGradient id="blueGradient3" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#bfdbfe" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
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

          {/* Image Side - Updated for uniform sizing */}
          <div className="flex-1 w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-xl w-full aspect-video max-w-[600px] mx-auto bg-gray-100">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
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
          {/* Solution Benefits */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-gray-600 md:text-5xl font-light mb-4">
                SMART FACTORY <span className="text-green-500">SOLUTION BENEFITS</span>
              </h2>
              <p className="text-gray-600 max-w-full mx-auto text-3xl">
                Choose the right solution to scale your factory&apos;s intelligence.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-4 gap-px bg-gray-200">
                <div className="bg-gray-100 p-4"></div>
                <div className="bg-white text-gray-700 p-4 text-center hover:text-white hover:bg-green-600 font-medium">Basic</div>
                <div className="bg-white text-gray-700 hover:text-white hover:bg-green-600 p-4 text-center font-medium">Pro</div>
                <div className="bg-white text-gray-700 p-4 text-center hover:text-white hover:bg-green-600 font-medium">Enterprise</div>
                
                {benefitData.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="bg-gray-100 p-4 font-medium text-gray-800">{item.feature}</div>
                    <div className="bg-white p-4 flex items-center justify-center">
                      {item.basic ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                    <div className="bg-gray-50 p-4 flex items-center justify-center">
                      {item.pro ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                    <div className="bg-white p-4 flex items-center justify-center">
                      {item.enterprise ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Plan Details */}
        {/* Plan Details */}
<div>
  <div className="text-center mb-12">
    <h2 className="text-3xl text-gray-600 md:text-5xl font-light mb-4">
      PLANs & <span className="text-green-500">PRICING</span>
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto text-3xl">
      Technical specifications for each solution tier
    </p>
  </div>

  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
    <div className="grid grid-cols-4 gap-px bg-gray-200">
      <div className="bg-gray-100 p-4"></div>
      <div className="bg-white text-gray-700 p-4 text-center hover:text-white hover:bg-green-600 font-medium">Basic</div>
      <div className="bg-white text-gray-700 hover:text-white hover:bg-green-600 p-4 text-center font-medium">Pro</div>
      <div className="bg-white text-gray-700 p-4 text-center hover:text-white hover:bg-green-600 font-medium">Enterprise</div>
      
      {/* Number of Machines - spans all columns */}
      <div className="bg-gray-100 p-4 font-medium text-gray-900">Number of Machines</div>
      <div className="bg-white text-gray-800 p-4 text-center col-span-3">
        16
      </div>
      
      {/* Other rows */}
      {planData.filter(item => item.feature !== "Number of Machines" && item.feature !== "Release date").map((item, index) => (
        <React.Fragment key={index}>
          <div className="bg-gray-100 p-4 font-medium text-gray-900">{item.feature}</div>
          <div className="bg-white text-gray-800 p-4 text-center">
            {item.basic}
          </div>
          <div className="bg-gray-50 text-gray-800 p-4 text-center">
            {item.pro}
          </div>
          <div className="bg-white text-gray-800 p-4 text-center">
            {item.enterprise}
          </div>
        </React.Fragment>
      ))}
      
      {/* Release date - spans all columns */}
      <div className="bg-gray-100 p-4 font-medium text-gray-900">Pre-Order Release date</div>
      <div className="bg-white text-gray-800 p-4 text-center col-span-3">
        04 / 07 / 2025
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            DRIVE <span className="font-normal">PEAK PERFORMANCE</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Power&apos;s Smart Factory solutions are engineered to connect your assets, people, and processes, unlocking new levels of productivity and operational excellence.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Request a Demo
          </button>
        </div>
      </section> */}

      {/* Closing Section */}
      <section className="py-20 px-4 bg-white"> 
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-5xl text-gray-700 font-light mb-6">
            Powering the <span className='text-green-500'>Future of Production</span>
          </h3>
          <p className="text-gray-600 leading-relaxed">
            In today&apos;s competitive landscape, manufacturing excellence demands more than just automation. It requires intelligence. Power&apos;s Smart Factory solutions transform your production facility into a connected, data-driven environment, unlocking unprecedented levels of efficiency, productivity, and operational insight. Move beyond traditional manufacturing and embrace the future of industry.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SmartFactoryPage;