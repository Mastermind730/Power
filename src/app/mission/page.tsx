import { ChartCandlestick } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MissionPage = () => {
  return (
    <div>
      <section className="py-20 px-6 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 lg:order-1">
              <div>
                <h2 className="text-5xl font-light text-gray-900 mb-6 leading-tight">
                  Mission
                  {/* <br /> */}
                  <span className="ml-4 text-emerald-500">Statement</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-4">
                Energy consumption is part of our way of life,
 but there is a pressing need to ensure that out way
 of life is sustainable. Power aims to make the world 
greener - accelerating NetZero Targets - and shape
 the future of energy consumption.
                </p>
                  <p className="text-xl mt-1 text-gray-600 leading-relaxed mb-8">
                 The Power ecosystem wants to have smarter homes
 that can visualise energy consumption in new levels
 of granularity and change consumer habits via modern 
incentives for carbon reduction - all in one easy-to-use 
app. Thus, empowering the energy-conscious citizens
 of tomorrow
                </p>
              </div>
            </div>

            {/* Phone Image */}
            <div className="flex justify-center lg:justify-around lg:order-2">
              <div className="relative">
                <div className="w-80 h-[640px] rounded-[3rem] shadow-2xl overflow-hidden border border-gray-200">
                  <Image
                    src="/mbl1.png" // Replace with your actual mobile analytics image
                    alt="Energy analytics mobile screen showing charts and efficiency metrics"
                    width={320}
                    height={640}
                    className="w-full h-full object-cover"
                    quality={100}
                  />
                </div>
                
                {/* Floating elements */}
                {/* <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <div className="text-white font-bold text-sm"><ChartCandlestick /></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="w-full">
        <div className="w-full h-auto">
          <Image
            src="/mission.png"
            alt="Mission Vision"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            quality={100}
            priority
          />
        </div>
      </section>

    </div>
  )
}

export default MissionPage
