import React from 'react';
import { Zap, Shield, BarChart3, TrendingUp, Users, DollarSign, Eye } from 'lucide-react';
import Image from 'next/image';

export default function EVChargingPage() {
  return (
    <div className="min-h-screen mt-10 bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-center font-light text-gray-800 leading-tight">
          BUSINESS & <span className="text-green-400 font-normal">LANDOWNERS</span>
        </h1>
      </div>

      {/* First Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6 text-gray-600 text-base leading-relaxed">
                <p className="text-lg">
                  Power&apos;s commercial EV charging solution is revolutionizing the industry 
                  with its cutting-edge AI and ML technology. The system&apos;s predictive 
                  maintenance capabilities enable proactive maintenance and reduce 
                  downtime, while optimized charging algorithms ensure efficient and 
                  cost-effective charging.
                </p>
                
                <p className="text-lg">
                  Real-time monitoring and analytics provide valuable insights, enabling 
                  operators to track charging activity, identify trends, and make data-driven decisions.
                </p>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/business1.png" // Replace with your actual image path
                alt="Commercial building with EV charging"
                fill
                className="object-cover"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Charging Stations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image - Charging stations */}
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/business2.png" // Replace with your actual image path
                alt="EV charging stations"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
            
            {/* Right Content */}
            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p className="text-lg">
                The benefits of Power&apos;s solution are numerous. AI-powered optimization 
                reduces energy waste, minimizes peak demand, and ensures efficient 
                charging, resulting in significant cost savings.
              </p>
              
              <p className="text-lg">
                Personalized charging profiles and real-time monitoring enable 
                operators to provide a better customer experience, with faster charging 
                times and reduced downtime. The system&apos;s enhanced security features 
                ensure the integrity of the charging infrastructure, and its scalability 
                allows operators to easily adapt to changing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Parking Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p className="text-lg">
                Power&apos;s provides a competitive advantage, setting operators apart 
                from others in the market. The system&apos;s compliance with regulatory 
                requirements, such as those related to energy efficiency and grid 
                management, ensures that operators can operate with confidence.
              </p>
              
              <p className="text-lg">
                With Power&apos;s commercial EV charging solution, operators can provide a 
                more efficient, cost-effective, and customer-centric charging 
                experience, revolutionizing the industry and paving the way for a 
                sustainable future.
              </p>
            </div>
            
            {/* Right Image - Parking layout */}
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/business3.png" // Replace with your actual image path
                alt="EV parking layout"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Charging Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 mb-16 relative overflow-hidden shadow-xl">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full opacity-10"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    ADVANCED<br /><span className="font-extrabold">CHARGING</span>
                  </h2>
                  <p className="text-white text-lg mt-6 max-w-2xl leading-relaxed">
                    Harness the power of AI to revolutionize your electric vehicle charging 
                    experience. Our cutting-edge platform delivers unparalleled efficiency, 
                    security, and customization.
                  </p>
                </div>
                <div className="flex space-x-2">
                  <div className="w-4 h-4 bg-white opacity-60 rounded-sm transform rotate-45 transition-all duration-300 hover:opacity-100 hover:scale-110"></div>
                  <div className="w-4 h-4 bg-white opacity-80 rounded-sm transform rotate-45 transition-all duration-300 hover:opacity-100 hover:scale-110"></div>
                  <div className="w-4 h-4 bg-white rounded-sm transform rotate-45 transition-all duration-300 hover:opacity-100 hover:scale-110"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 text-green-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Predictive Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI system predicts potential issues with charging infrastructure before they occur, 
                enabling proactive maintenance and reducing downtime by up to 40%.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 text-green-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Optimized Charging</h3>
              <p className="text-gray-600 leading-relaxed">
                Smart algorithms optimize charging sessions based on energy demand, grid capacity, 
                and vehicle type, reducing costs by an average of 25% per session.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 text-green-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Monitoring</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive dashboards provide live monitoring and analytics, enabling operators 
                to track performance and make data-driven decisions instantly.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 text-green-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                AI creates custom charging profiles for each vehicle, optimizing battery health 
                and extending lifespan while reducing charging time.
              </p>
            </div>

            {/* Full-width Card */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group md:col-span-2">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Security</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our AI-powered security system provides multi-layered protection with:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className='text-gray-600'>Real-time intrusion detection with 99.9% accuracy</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className='text-gray-600'>Automated anomaly detection and response</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className='text-gray-600'>Continuous infrastructure monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-green-400 mb-12">BENEFITS</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: "Boost Efficiency", description: "Maximize charging throughput with AI optimization" },
              { icon: Users, title: "Improve Experience", description: "Delight customers with faster, smarter charging" },
              { icon: DollarSign, title: "Reduce Costs", description: "Lower energy expenses with dynamic load balancing" },
              { icon: BarChart3, title: "Manage The Grid", description: "Intelligent integration with local energy grids" },
              { icon: Eye, title: "Use Data Insights", description: "Actionable analytics for better decision making" },
              { icon: Zap, title: "Scale With Ease", description: "Modular architecture grows with your needs" },
              { icon: TrendingUp, title: "Gain Competitive Edge", description: "Differentiate with premium charging services" },
              { icon: Shield, title: "Ensure Compliance", description: "Stay ahead of regulatory requirements" }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}