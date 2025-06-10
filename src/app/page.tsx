"use client";
import React from 'react';
import Image from 'next/image';
import { ChartCandlestick, SmartphoneCharging, TruckElectric } from 'lucide-react';

const EnergyLandingPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f4]">
{/* Hero Image Section */}
    <div className="w-full h-[600px] relative overflow-hidden">
  {/* Background image */}
  <Image
    src="/overlay.png"
    alt="Smart energy management system"
    layout="fill"
    objectFit="cover"
    quality={100}
    priority
    className="w-full h-full object-cover"
  />
  
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-white"></div>
  
  {/* Logo positioned in center */}
  <div className="absolute inset-0 flex items-center justify-center">
    <Image
      src="/Green.svg"
      alt="Main Logo"
      width={600}  // Adjust as needed
      height={600}  // Adjust as needed
      quality={100}
      priority
      // Remove objectFit="cover" as it's not needed for positioned logo
    />
  </div>
</div>
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-extralight text-gray-900 mb-8 leading-tight">
            EMBRACE ENERGY
            <br />
            <span className="bg-gradient-to-r font-extralight from-green-400 to-emerald-500 bg-clip-text text-transparent">
              UNIFICATION
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Power is energy unification, automation, and optimization in one location. 
            The ability to control your home&apos;s energy down to appliance and device level, 
            manage your utilities account to charging your EV car at a local shopping center.
          </p>
          <div className="text-2xl text-gray-500 mb-16 ">
            A <span className='text-green-400'> powerful </span> all-in-one  solution.
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Phone Left, Content Right */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Phone Image */}
            <div className="flex justify-center lg:justify-around">
              <div className="relative">
                <div className="w-80 h-[640px] rounded-[3rem] shadow-2xl overflow-hidden">
                  <Image
                    src="/mbl1.png" // Replace with your actual mobile dashboard image
                    alt="Energy dashboard mobile app showing usage statistics"
                    width={320}
                    height={640}
                    className="w-full h-full object-cover"
                    quality={100}
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <SmartphoneCharging />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-light text-gray-900 mb-6 leading-tight">
                  Smart Energy
                  <br />
                  <span className="text-green-500">Intelligence</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Power&apos;s innovative approach integrates energy intelligence, unification, and intervention 
                  in a single platform, providing a seamless and comprehensive experience for consumers 
                  to manage their energy usage, utilities accounts, and electric vehicle charging.
                </p>
                {/* <p className="text-lg text-gray-500 leading-relaxed">
                  This streamlined approach eliminates the need for multiple apps, accounts, and devices, 
                  making it a convenient and user-friendly solution for consumers.
                </p> */}
              </div>
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
                <h2 className="text-5xl font-light text-gray-900 mb-6 leading-tight">
                  Advanced
                  <br />
                  <span className="text-emerald-500">Analytics</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                The unique ability to control energy usage down to the appliance and device level sets it apart from other 
                energy management solutions . This level of granular control allows consumers to optimize their energy usage,
                  identify energy-hungry devices, and make data-driven decisions to reduce their energy consumption.
                </p>
              </div>
            </div>

            {/* Phone Image */}
            <div className="flex justify-center lg:justify-around lg:order-2">
              <div className="relative">
                <div className="w-80 h-[640px] rounded-[3rem] shadow-2xl overflow-hidden border border-gray-200">
                  <Image
                    src="/mbl2.png" // Replace with your actual mobile analytics image
                    alt="Energy analytics mobile screen showing charts and efficiency metrics"
                    width={320}
                    height={640}
                    className="w-full h-full object-cover"
                    quality={100}
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <div className="text-white font-bold text-sm"><ChartCandlestick /></div>
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
            {/* Phone Image */}
            <div className="flex justify-center lg:justify-around">
              <div className="relative">
                <div className="w-80 h-[640px] rounded-[3rem] shadow-2xl overflow-hidden">
                  <Image
                    src="/mbl3.png" // Replace with your actual mobile control hub image
                    alt="Energy control hub mobile interface with system controls and EV charging"
                    width={320}
                    height={640}
                    className="w-full h-full object-cover"
                    quality={100}
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center animate-bounce justify-center shadow-xl">
                  <div className="text-white font-bold"><TruckElectric /></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-light text-gray-900 mb-6 leading-tight">
                  Complete
                  <br />
                  <span className="text-green-500">Control Hub</span>
                </h2>
                {/* <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Our AI-assisted intervention capabilities take energy management to the next level by proactively identifying opportunities to reduce carbon emissions.
                </p> */}
                <p className="text-lg text-gray-500 leading-relaxed">
This streamlined approach eliminates the need for multiple apps, accounts,  and devices, making it a convenient and 
user-friendly solution for consumers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyLandingPage;