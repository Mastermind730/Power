"use client";
import React from 'react';
import Image from 'next/image';

const EnergyLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
{/* Hero Image Section */}
      <div className="w-full h-[600px] relative overflow-hidden">
        <Image
          src="/energy-hero.jpg" // Replace with your actual image path
          alt="Smart energy management system"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/80 to-transparent"></div>
      </div>
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl  text-gray-900 mb-8 leading-tight">
            EMBRACE ENERGY
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              UNIFICATION
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Power is energy unification, automation, and optimization in one location. 
            The ability to control your home&apos;s energy down to appliance and device level, 
            manage your utilities account to charging your EV car at a local shopping center.
          </p>
          <div className="text-lg text-gray-500 mb-16 italic">
            An all-in-one energy solution.
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Phone Left, Content Right */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-[640px] bg-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-gray-900 rounded-[2.5rem] p-6 overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-8 text-white text-sm">
                      <span>9:41</span>
                      <div className="text-center font-medium">Usage</div>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 border border-white rounded-sm">
                          <div className="w-3 h-1 bg-green-400 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* Main Chart */}
                    <div className="mb-8">
                      <div className="h-48 relative">
                        <svg className="w-full h-full" viewBox="0 0 300 180">
                          <path 
                            d="M 20 140 Q 50 120 80 110 Q 120 100 150 90 Q 180 80 220 70 Q 250 65 280 60" 
                            stroke="#22c55e" 
                            strokeWidth="3" 
                            fill="none"
                            className="animate-pulse"
                          />
                          <circle cx="280" cy="60" r="4" fill="#22c55e" className="animate-pulse"/>
                          <text x="280" y="45" fill="#22c55e" fontSize="12" textAnchor="middle">27kW</text>
                        </svg>
                      </div>
                    </div>

                    {/* Rooms Section */}
                    <div className="mb-8">
                      <h3 className="text-white text-lg mb-4">Rooms</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-sm"></div>
                            </div>
                            <span className="text-gray-300">Living Room</span>
                          </div>
                          <span className="text-green-400 font-bold">348W</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-full"></div>
                            </div>
                            <span className="text-gray-300">Bedroom</span>
                          </div>
                          <span className="text-white">201W</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                              <div className="w-3 h-3 bg-white rounded-sm"></div>
                            </div>
                            <span className="text-gray-300">Kitchen</span>
                          </div>
                          <span className="text-white">111W</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-green-400 text-2xl font-bold">£17.33</div>
                        <div className="text-gray-400 text-sm">Today</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-400 text-2xl font-bold">2.73</div>
                        <div className="text-gray-400 text-sm">Footprint</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Smart Energy
                  <br />
                  <span className="text-green-500">Intelligence</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Power&apos;s innovative approach integrates energy intelligence, unification, and intervention 
                  in a single platform, providing a seamless and comprehensive experience for consumers 
                  to manage their energy usage, utilities accounts, and electric vehicle charging.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  This streamlined approach eliminates the need for multiple apps, accounts, and devices, 
                  making it a convenient and user-friendly solution for consumers.
                </p>
              </div>
              
              {/* <div className="flex space-x-6">
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Control</h3>
                  <p className="text-gray-600">Monitor and control every device in your home with precision.</p>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Optimization</h3>
                  <p className="text-gray-600">Automatically optimize energy usage to minimize costs.</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Content Left, Phone Right */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 lg:order-1">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Advanced
                  <br />
                  <span className="text-emerald-500">Analytics</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                The unique ability to control energy usage down to the appliance and device level sets it apart from other 
                energy management solutions . This level of granular control allows consumers to optimize their energy usage,
                {/* </p> */}
                {/* <p className="text-lg text-gray-500 leading-relaxed"> */}
                  identify energy-hungry devices, and make data-driven decisions to reduce their energy consumption.
                </p>
              </div>
              
              {/* <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-emerald-500 mb-2">85%</div>
                  <div className="text-gray-600">Energy Efficiency</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-emerald-500 mb-2">£340</div>
                  <div className="text-gray-600">Monthly Savings</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-emerald-500 mb-2">2.1T</div>
                  <div className="text-gray-600">CO₂ Reduced</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-emerald-500 mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime</div>
                </div>
              </div> */}
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-end lg:order-2">
              <div className="relative">
                <div className="w-80 h-[640px] bg-white rounded-[3rem] p-3 shadow-2xl border border-gray-200">
                  <div className="w-full h-full bg-gray-50 rounded-[2.5rem] p-6 overflow-hidden">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-gray-900 text-xl font-bold mb-4">Energy Analytics</h3>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full" style={{width: '78%'}}></div>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">78% Efficiency Today</p>
                    </div>
                    
                    {/* Chart Area */}
                    <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
                      <div className="h-40 relative">
                        <div className="absolute bottom-0 left-0 w-8 bg-green-200 rounded-t-lg" style={{height: '60%'}}></div>
                        <div className="absolute bottom-0 left-12 w-8 bg-green-300 rounded-t-lg" style={{height: '75%'}}></div>
                        <div className="absolute bottom-0 left-24 w-8 bg-green-400 rounded-t-lg" style={{height: '90%'}}></div>
                        <div className="absolute bottom-0 left-36 w-8 bg-green-500 rounded-t-lg" style={{height: '85%'}}></div>
                        <div className="absolute bottom-0 left-48 w-8 bg-emerald-400 rounded-t-lg" style={{height: '95%'}}></div>
                        <div className="absolute bottom-0 left-60 w-8 bg-emerald-500 rounded-t-lg" style={{height: '80%'}}></div>
                        
                        {/* Trend Line */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 160">
                          <path 
                            d="M 16 100 L 28 80 L 40 60 L 52 65 L 64 50 L 76 55" 
                            stroke="#10b981" 
                            strokeWidth="2" 
                            fill="none"
                            strokeDasharray="4,4"
                          />
                        </svg>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-4">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-white rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                          </div>
                          <div>
                            <div className="text-gray-900 font-medium">Peak Hour</div>
                            <div className="text-gray-500 text-sm">2:30 PM</div>
                          </div>
                        </div>
                        <div className="text-green-600 font-bold">4.2kW</div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-white rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                            <div className="w-5 h-5 bg-emerald-500 rounded-full"></div>
                          </div>
                          <div>
                            <div className="text-gray-900 font-medium">Total Savings</div>
                            <div className="text-gray-500 text-sm">This month</div>
                          </div>
                        </div>
                        <div className="text-emerald-600 font-bold">£127.45</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-white font-bold text-sm">AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Phone Left, Content Right */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-[640px] bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-gray-800 rounded-[2.5rem] p-6 overflow-hidden">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-white text-xl font-bold mb-6">System Control</h3>
                      
                      {/* Battery Indicator */}
                      <div className="bg-gray-700 rounded-2xl p-6 mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-gray-300">Battery Status</span>
                          <span className="text-green-400 font-bold text-xl">87%</span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-4 mb-2">
                          <div className="bg-gradient-to-r from-green-400 to-green-500 h-4 rounded-full" style={{width: '87%'}}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>12.4 kWh stored</span>
                          <span>2h charging</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Control Buttons */}
                    <div className="space-y-4 mb-8">
                      <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl font-semibold shadow-lg">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                          <span>Auto Mode ON</span>
                        </div>
                      </button>
                      <button className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300 py-4 rounded-2xl font-semibold transition-colors">
                        Manual Override
                      </button>
                      <button className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300 py-4 rounded-2xl font-semibold transition-colors">
                        Energy Storage Mode
                      </button>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-gray-700 rounded-xl p-4 text-center">
                        <div className="text-green-400 font-bold text-lg">3.11</div>
                        <div className="text-gray-400 text-sm">Vehicles</div>
                      </div>
                      <div className="bg-gray-700 rounded-xl p-4 text-center">
                        <div className="text-green-400 font-bold text-lg">11.44</div>
                        <div className="text-gray-400 text-sm">Generation</div>
                      </div>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="flex items-center justify-center">
                      <div className="flex items-center space-x-3 bg-gray-700 rounded-full px-6 py-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-medium">System Active</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-white font-bold">EV</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Complete
                  <br />
                  <span className="text-blue-500">Control Hub</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Our AI-assisted intervention capabilities take energy management to the next level by proactively identifying opportunities to reduce carbon emissions.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
             Power&apos;s advanced algorithms analyse energy usage patterns and predict energy demand,
             enabling us to intervene and optimise energy consumption in real-tie.
                </p>
              </div>
              
              {/* <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Systems</h3>
                    <p className="text-gray-600">AI-powered automation that learns your patterns and optimizes energy usage without manual intervention.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">EV Integration</h3>
                    <p className="text-gray-600">Seamlessly integrate your electric vehicle charging with your home energy system for maximum efficiency.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Storage</h3>
                    <p className="text-gray-600">Intelligent battery management that stores energy when rates are low and releases it when you need it most.</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

    

      {/* <Footer/> */}
    </div>
  );
};

export default EnergyLandingPage;