/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { AlertCircle, BarChart2, BatteryCharging, BatteryMedium, BellRing, BookOpen, CalendarCheck, CalendarClock, Car, CreditCard, Gamepad2, Lightbulb, LineChart, MapPin, PlaySquare, SquareActivity, Tag, TrendingUp, Trophy, User2, UserCog, Users, Wallet, Zap } from 'lucide-react';

export default function PowerApplication() {
  const commonDescription = "With Power, you'll have all the tools you need in one place to manage, monitor and optimize your energy consumption effortlessly. From tracking solar panel output to managing battery storage and scheduling energy use, Power makes it easy to reduce energy bills and embrace a more energy-efficient lifestyle.";

  return (
    <>
      <Head>
        <title>Power Application</title>
        <meta name="description" content="Power - A revolutionary energy management platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="px-[5%] pb-10 md:pb-20 bg-gradient-to-br bg-slate-50 to-gray-200">
        <div className="container mx-auto py-12 md:pt-28 max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl mt-15 md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-gray-900 uppercase tracking-tight">
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 font-extralight bg-clip-text text-transparent"> Power</span> Application
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed mt-8 max-w-4xl mx-auto">
              Power is a revolutionary new platform that brings together all your energy-related tasks in one place. It&apos;s like having a personal energy assistant that helps you manage your energy usage, save money, and live more sustainably.
            </p>
          </div>
        </div>
      </section>

      {/* Swiper Section */}
      <section className="relative">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          className="powerSwiper"
          loop={true}
        >
          {/* Slide 2 - Generation */}
          <SwiperSlide className="bg-gradient-to-r from-green-50 to-emerald-50">
            <div className="container mx-auto py-16 md:py-24 px-4 max-w-6xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Mobile Image with 3D Effect */}
               <div className="flex justify-center lg:justify-around">
              <div className="relative">
                <div className="w-80 h-[640px] p-3 rounded-[3rem] shadow-2xl overflow-hidden">
                  <Image
                    src="/app2.png" // Replace with your actual mobile dashboard image
                    alt="Energy dashboard mobile app showing usage statistics"
                    width={320}
                    height={640}
                    className="w-full p-2 rounded-2xl h-full object-cover"
                    quality={100}
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <SquareActivity />
                </div>
              </div>
            </div>
                
                <div className="w-full md:w-3/5">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                    Generation
                  </h3>
                  <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                    Power is an all-in-one solution that helps you take control of
                    your energy usage, save money, and live more sustainably.
                  </p>
                  <ul className="text-xl lg:text-2xl font-extralight text-gray-800 leading-relaxed space-y-4 mb-8">
                    <li className="flex items-center">
                      <SquareActivity className="w-5 h-5 mr-3 text-green-500" />
                      Monitor Solar Panel Performance and Energy Output
                    </li>
                    <li className="flex items-center">
                      <BatteryMedium className="w-5 h-5 mr-3 text-green-500" />
                      Track Battery Storage Levels and Charging Status
                    </li>
                    <li className="flex items-center">
                      <CalendarClock className="w-5 h-5 mr-3 text-green-500" />
                      Schedule Energy Generation and Smart Storage
                    </li>
                    <li className="flex items-center">
                      <AlertCircle className="w-5 h-5 mr-3 text-green-500" />
                      Get Real-Time Alerts for Low Storage Levels
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-5 h-5 mr-3 text-green-500" />
                      Optimize Voltage Settings to Boost Efficiency
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-2xl p-6 rounded-lg mt-10 ">
                <p className="text-xl text-gray-800">
                  {commonDescription}
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 - Utilities */}
          <SwiperSlide className="bg-white">
            <div className="container mx-auto py-16 md:py-24 px-4 max-w-6xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Mobile Image with 3D Effect */}
              <div className="flex justify-center lg:justify-around">
              <div className="relative">
                <div className="w-80 h-[640px] p-3 rounded-[3rem] shadow-2xl overflow-hidden">
                  <Image
                    src="/app3.png" // Replace with your actual mobile dashboard image
                    alt="Energy dashboard mobile app showing usage statistics"
                    width={320}
                    height={640}
                    className="w-full p-2 rounded-2xl  h-full object-cover"
                    quality={100}
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <CreditCard />
                </div>
              </div>
            </div>
                
                <div className="w-full md:w-3/5">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Utilities
                  </h3>
                  <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
                    Making it easy to manage your utility provider account,
                    including viewing and paying bills, tracking usage patterns,
                    updating account information, including:
                  </p>
                  <ul className="text-xl lg:text-2xl caption text-gray-600 leading-relaxed space-y-4 mb-8">
                    <li className="flex items-center">
                      <CreditCard className="w-5 h-5 mr-3 text-green-500" />
                      Paying your bills online
                    </li>
                    <li className="flex items-center">
                      <LineChart className="w-5 h-5 mr-3 text-green-500" />
                      Viewing your energy usage history
                    </li>
                    <li className="flex items-center">
                      <CalendarCheck className="w-5 h-5 mr-3 text-green-500" />
                      Scheduling appointments with your utility provider
                    </li>
                    <li className="flex items-center">
                      <BellRing className="w-5 h-5 mr-3 text-green-500" />
                      Receiving notifications when your bill is due
                    </li>
                    <li className="flex items-center">
                      <UserCog className="w-5 h-5 mr-3 text-green-500" />
                      Managing account details and preferences
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-2xl p-6 rounded-lg mt-10 ">
                <p className="text-xl text-gray-800">
                  {commonDescription}
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 - Electric Vehicle Charging */}
          <SwiperSlide className="bg-gradient-to-r from-green-50 to-emerald-50">
            <div className="container mx-auto py-16 md:py-24 px-4 max-w-6xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Mobile Image with 3D Effect */}
               <div className="flex justify-center lg:justify-around">
              <div className="relative">
                <div className="w-80 h-[640px] p-3 rounded-[3rem] shadow-2xl overflow-hidden">
                  <Image
                    src="/app4.png" // Replace with your actual mobile dashboard image
                    alt="Energy dashboard mobile app showing usage statistics"
                    width={320}
                    height={640}
                    className="w-full h-full rounded-2xl p-2 object-cover"
                    quality={100}
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Car />
                </div>
              </div>
            </div>
                
                <div className="w-full md:w-3/5">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                    Electric Vehicle Charging
                  </h3>
                  <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                    Power also allows you to charge your electric vehicle (EV) at
                    convenient locations such as supermarkets, shopping centers, etc
                  </p>
                  <ul className="text-xl lg:text-2xl text-gray-800 leading-relaxed space-y-4 mb-8">
                    <li className="flex items-center">
                      <Car className="w-5 h-5 mr-3 text-blue-500" />
                      Charge your EV while you&apos;re shopping or running errands
                    </li>
                    <li className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-green-500" />
                      Find charging stations near you
                    </li>
                    <li className="flex items-center">
                      <CalendarClock className="w-5 h-5 mr-3 text-green-500" />
                      Schedule charging sessions in advance
                    </li>
                    <li className="flex items-center">
                      <BatteryCharging className="w-5 h-5 mr-3 text-green-500" />
                      Monitor your EV&apos;s charging status in real-time
                    </li>
                    <li className="flex items-center">
                      <Wallet className="w-5 h-5 mr-3 text-green-500" />
                      Handle payments for charging sessions seamlessly
                    </li>
                  </ul>
                </div>
              </div>
             <div className="text-2xl p-6 rounded-lg mt-10 ">
                <p className="text-xl text-gray-800">
                  {commonDescription}
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 - Gamification */}
          <SwiperSlide className="bg-white">
            <div className="container mx-auto py-16 md:py-24 px-4 max-w-6xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Mobile Image with 3D Effect */}
                <div className="flex justify-center lg:justify-around">
              <div className="relative">
                <div className="w-80 h-[640px] p-3 rounded-[3rem] shadow-2xl overflow-hidden">
                  <Image
                    src="/app5.png" // Replace with your actual mobile dashboard image
                    alt="Energy dashboard mobile app showing usage statistics"
                    width={320}
                    height={640}
                    className="w-full h-full p-2 rounded-2xl object-cover"
                    quality={100}
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Trophy />
                </div>
              </div>
            </div>
                
                <div className="w-full md:w-3/5">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Gamification
                  </h3>
                  <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
                    Enhancing energy management with gamification, encouraging
                    reduced consumption and a sustainable lifestyle.
                  </p>
                  <ul className="text-xl lg:text-2xl caption text-gray-600 leading-relaxed space-y-4 mb-8">
                    <li className="flex items-center">
                      <Trophy className="w-5 h-5 mr-3 text-green-500" />
                      Earn rewards and badges for achieving energy-saving milestones
                    </li>
                    <li className="flex items-center">
                      <User2 className="w-5 h-5 mr-3 text-green-500" />
                      Participate in energy-saving challenges with friends
                    </li>
                    <li className="flex items-center">
                      <BarChart2 className="w-5 h-5 mr-3 text-green-500" />
                      Track progress and compete to reduce energy usage
                    </li>
                    <li className="flex items-center">
                      <Tag className="w-5 h-5 mr-3 text-green-500" />
                      Unlock special offers from eco-friendly brands
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-2xl p-6 rounded-lg mt-10 ">
                <p className="text-xl text-gray-800">
                  {commonDescription}
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 6 - Education */}
          <SwiperSlide className="bg-gradient-to-r from-green-50 to-emerald-50">
            <div className="container mx-auto py-16 md:py-24 px-4 max-w-6xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Mobile Image with 3D Effect */}
                <div className="flex justify-center lg:justify-around">
              <div className="relative">
                <div className="w-80 h-[640px] p-3 rounded-[3rem] shadow-2xl  overflow-hidden">
                  <Image
                    src="/app6.png" // Replace with your actual mobile dashboard image
                    alt="Energy dashboard mobile app showing usage statistics"
                    width={320}
                    height={640}
                    className="w-full h-full p-2 rounded-2xl  object-cover"
                    quality={100}
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <BookOpen />
                </div>
              </div>
            </div>
                
                <div className="w-full md:w-3/5">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                    Education
                  </h3>
                  <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                    This feature helps users reduce energy consumption through
                    interactive tutorials, videos, and quizzes on energy-efficient
                    living.
                  </p>
                  <ul className="text-xl lg:text-2xl text-gray-800 leading-relaxed space-y-4 mb-8">
                    <li className="flex items-center">
                      <PlaySquare className="w-5 h-5 mr-3 text-green-500" />
                      Interactive energy-efficiency tutorials and videos
                    </li>
                    <li className="flex items-center">
                      <Lightbulb className="w-5 h-5 mr-3 text-green-500" />
                      Personalized energy-saving tips
                    </li>
                    <li className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-3 text-green-600" />
                      Energy literacy on usage
                    </li>
                    <li className="flex items-center">
                      <Gamepad2 className="w-5 h-5 mr-3 text-green-500" />
                      Gamification to encourage sustainable habits
                    </li>
                    <li className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-3 text-green-500" />
                      Track progress and earn rewards for milestones
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-2xl p-6 rounded-lg mt-10 ">
                <p className="text-xl text-gray-800">
                  {commonDescription}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        .powerSwiper {
          width: 100%;
          height: 100%;
        }
        
        .powerSwiper .swiper-button-next,
        .powerSwiper .swiper-button-prev {
          color: #3B82F6;
          background: rgba(255, 255, 255, 0.8);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .powerSwiper .swiper-button-next:hover,
        .powerSwiper .swiper-button-prev:hover {
          background: white;
          transform: scale(1.1);
        }
        
        .powerSwiper .swiper-button-next::after,
        .powerSwiper .swiper-button-prev::after {
          font-size: 1.5rem;
          font-weight: bold;
        }
        
        .powerSwiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #9CA3AF;
          opacity: 1;
        }
        
        .powerSwiper .swiper-pagination-bullet-active {
          background: #3B82F6;
        }
        
        .powerSwiper .swiper-slide {
          transition: background-color 0.5s ease;
        }

        /* 3D effect styles */
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-6 {
          transform: rotateY(6deg);
        }
        
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        
        .rotate-y-[-6deg] {
          transform: rotateY(-6deg);
        }
        
        .rotate-y-[-12deg] {
          transform: rotateY(-12deg);
        }
      `}</style>
    </>
  );
}