/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from 'react';
import Image from 'next/image';


const Pillars = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
     
      {/* Hero Section */}
      <section className="pt-28 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            PILLARS OF
            <br />
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              POWER
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Embrace energy unification. Automate and optimize your home consumption, 
            reduce carbon emissions and costs while enjoying intelligent vehicle charging.
          </p>
          <div className="text-lg text-emerald-600 mb-16 font-medium">
            An all-in-one energy solution for modern living
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Unification */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-lg h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src={"/about1.png"}
                  alt="Energy unification dashboard"
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-500 hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 text-xl font-bold">1</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Unification
                </h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Power brings all your energy systems together in one intuitive platform. 
                Monitor and manage every device, track consumption patterns, and optimize 
                energy flows across your entire property.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Centralized control for all energy devices</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Real-time energy flow visualization</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Seamless integration with existing smart home systems</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Optimization */}
      <section className="py-24 px-6 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 lg:order-1">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 text-xl font-bold">2</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Optimization
                </h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our advanced algorithms analyze your energy patterns to deliver 
                precise recommendations for reducing waste and maximizing efficiency.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-emerald-600 text-3xl font-bold mb-2">30-50%</div>
                  <div className="text-gray-600">Reduction in energy waste</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-emerald-600 text-3xl font-bold mb-2">24/7</div>
                  <div className="text-gray-600">Continuous performance monitoring</div>
                </div>
              </div>
              <p className="text-lg text-gray-500 leading-relaxed">
                Set custom energy budgets, track progress toward goals, and receive 
                intelligent alerts when adjustments are needed.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end lg:order-2">
              <div className="relative w-full max-w-lg h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <Image 
                  src={"/about2.png"}
                  alt="Energy optimization analytics"
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-500 hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Intervention */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-lg h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <Image 
                  src={"/about3.png"}
                  alt="Energy control interface"
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-500 hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 text-xl font-bold">3</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Intervention
                </h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Take precise control of your energy ecosystem with granular device 
                management and automated scheduling.
              </p>
              <div className="space-y-5 pt-2">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Instant Control</h3>
                    <p className="text-gray-600">Adjust any device remotely with a single tap</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Smart Scheduling</h3>
                    <p className="text-gray-600">Automate devices based on time or conditions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Utility Integration</h3>
                    <p className="text-gray-600">Manage your provider account directly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 4 - Intelligence */}
      <section className="py-24 px-6 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 lg:order-1">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 text-xl font-bold">4</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Intelligence
                </h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our AI analyzes your energy patterns to deliver personalized 
                recommendations that eliminate waste and improve efficiency.
              </p>
              <div className="pt-4">
                <div className="inline-block bg-white rounded-full px-4 py-2 shadow-sm mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-600 font-medium">AI-Powered Insights</span>
                  </div>
                </div>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Get tailored suggestions for upgrades, behavioral changes, and 
                  system optimizations based on your actual usage data.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end lg:order-2">
              <div className="relative w-full max-w-lg h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <Image 
                  src={"/about4.png"}
                  alt="AI energy intelligence"
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-500 hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-800">Analyzing patterns...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 5 - Automation */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-lg h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <Image 
                  src={"/about5.png"}
                  alt="Energy automation interface"
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-500 hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                    <span className="text-sm font-medium text-gray-800">Automation active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 text-xl font-bold">5</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Automation
                </h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Create intelligent routines that adapt to your lifestyle while 
                maximizing energy efficiency throughout your home.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Smart Scenes</h3>
                  <p className="text-gray-600">
                    &quot;Goodnight&quot; turns off lights, lowers thermostat, and arms security
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Geo-Fencing</h3>
                  <p className="text-gray-600">
                    Automatically adjust settings when you leave or arrive home
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-500 leading-relaxed">
                Integrates with all major smart home platforms for whole-house coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      
    </div>
  );
};

export default Pillars;