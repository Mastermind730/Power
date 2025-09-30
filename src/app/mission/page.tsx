import Image from 'next/image'
import React from 'react'

const MissionPage = () => {
  return (
    <div>
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6 leading-tight">
                  Our
                  <span className="ml-2 sm:ml-4 text-emerald-500">Commitment</span>
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                    Energy consumption is part of our way of life, but there is a pressing need to ensure that our way of life is sustainable. Power aims to make the world greener - accelerating NetZero Targets - and shape the future of energy consumption.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                    The Power ecosystem wants to have smarter homes that can visualise energy consumption in new levels of granularity and change consumer habits via modern incentives for carbon reduction - all in one easy-to-use app. Thus, empowering the energy-conscious citizens of tomorrow.
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Image */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="w-64 h-[520px] sm:w-72 sm:h-[580px] md:w-80 md:h-[640px] rounded-[2rem] md:rounded-[3rem] shadow-xl md:shadow-2xl overflow-hidden border border-gray-200">
                  <Image
                    src="/mbl1.png"
                    alt="Energy analytics mobile screen showing charts and efficiency metrics"
                    width={320}
                    height={640}
                    className="w-full h-full object-cover"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Image Section */}
      <section className="w-full py-8 md:py-12">
        <div className="w-full h-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <Image
              src="/mission.png"
              alt="Mission Vision"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover rounded-lg shadow-sm"
              quality={100}
              priority
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default MissionPage