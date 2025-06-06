// pages/ev-charging.js
import Head from 'next/head';
import Image from 'next/image';

export default function EVCharging() {
  return (
    <div className="bg-white">
      <Head>
        <title>Power - AI-Powered EV Charging Solutions</title>
        <meta name="description" content="Revolutionary AI-powered commercial EV charging solutions for businesses and consumers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 py-12 lg:py-24">
            <div className="md:w-1/2 space-y-6">
              <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-900 uppercase leading-tight">
                Embrace <span className="text-green-500">AI Charging</span>
              </h1>
              <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl leading-relaxed">
                Imagine a world where electric vehicle charging is seamless, efficient, and cost-effective. 
                Power is making that a reality with our cutting-edge AI-powered commercial EV charging solution.
              </p>
            </div>
            
            <div className="md:w-1/2 relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/assets/img/ev-herobg.png"
                alt="Smart EV charging station"
                layout="fill"
                objectFit="cover"
                className="hidden md:block"
              />
              <Image 
                src="/assets/img/ev-herobg1.png"
                alt="Smart EV charging station mobile"
                layout="fill"
                objectFit="cover"
                className="block md:hidden"
              />
              <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 w-4/5 md:w-2/3">
                <div className="relative aspect-square">
                  <Image
                    src="/assets/img/ev-herocard.png"
                    alt="EV charging app interface"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="py-12 lg:py-24 space-y-8 max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed text-center">
              With real-time monitoring and analytics, operators can track charging
              activity, identify trends, and make data-driven decisions to improve
              the customer experience. Our AI-driven charging profiles provide 
              personalized experiences for individual vehicles, ensuring optimal 
              charging conditions and minimizing wear and tear on the battery.
            </p>
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed text-center">
              Power is revolutionizing the commercial EV charging industry,
              providing a competitive advantage for operators and setting a new
              standard for efficiency, cost-effectiveness, and customer satisfaction.
            </p>
          </div>
        </section>

        {/* Community Section */}
        <section className="px-6 md:px-8 lg:px-10 xl:px-12 bg-gray-50 py-16 lg:py-32 rounded-3xl mx-4 md:mx-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-normal text-3xl md:text-4xl lg:text-5xl text-gray-900 uppercase text-center">
              Our Community Benefits
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              {num: '01', title: 'Faster Charging Times', desc: 'AI-powered optimization ensures efficient charging sessions with significantly reduced charging times.'},
              {num: '02', title: 'Reduced Downtime', desc: 'Predictive maintenance and real-time monitoring minimize station downtime for maximum availability.'},
              {num: '03', title: 'Personalized Experience', desc: 'AI-driven charging profiles optimize conditions for each vehicle, extending battery life.'},
              {num: '04', title: 'Increased Convenience', desc: 'Easy payment processing and real-time station location tracking enhance user experience.'},
              {num: '05', title: 'Cost Savings', desc: 'Optimized charging reduces electricity costs and maintenance expenses for consumers.'},
              {num: '06', title: 'Enhanced Safety', desc: 'AI-powered security features protect charging infrastructure and user data.'},
              {num: '07', title: 'Increased Accessibility', desc: 'Scalable platform ensures growing availability of charging stations.'},
              {num: '08', title: 'Transparency', desc: 'Real-time analytics provide clear insights into charging activity and energy usage.'},
            ].map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 pt-8 ${index < 7 ? 'border-b border-gray-200 pb-12' : 'pb-8'}`}>
                <div className="flex items-start gap-6 md:w-2/5">
                  <span className="font-normal text-green-500 text-3xl md:text-4xl">{item.num}</span>
                  <h3 className="font-normal text-gray-900 text-xl md:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 md:w-3/5 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 lg:mt-32 rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/assets/img/ev-comunity.png"
              alt="EV charging network"
              width={1200}
              height={600}
              layout="responsive"
              className="object-cover"
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-6 md:px-8 lg:px-10 xl:px-12 py-16 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-normal text-3xl md:text-4xl lg:text-5xl text-gray-900 uppercase">
              <span className="text-green-500">Smart</span> Pricing Model
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
              Our adaptive "Bolt-style" pricing algorithm intelligently adjusts kWh rates based on time of day, 
              season, and demand patterns. This ensures you always get the most cost-effective charging 
              without surprise fees or hidden costs.
            </p>
          </div>
          
          <div className="mt-20 max-w-5xl mx-auto">
            <h3 className="font-normal text-2xl md:text-3xl lg:text-4xl text-gray-900 text-center mb-12 lg:mb-20">
              Dynamic Pricing <span className="text-green-500">Throughout the Day</span>
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Image 
                src="/assets/img/ev-graph.png"
                alt="Pricing graph throughout day"
                width={1000}
                height={500}
                layout="responsive"
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
       <section className="px-5 md:px-[5%] py-[70px] lg:py-[200px]">
          <h3 className="text-green-500 font-normal text-[25px] md:text-[32px] lg:text-[40px] md:text-center uppercase mb-5 md:mb-8 lg:mb-20">
            How it's work
          </h3>
          
          <div className="flex items-center justify-start">
            <div className="md:basis-1/2 xl:basis-1/3">
              <img src="/assets/img/clock.png" alt="Off-peak hours" />
              <h4 className="font-semibold text-[20px] md:text-[24px] lg:text-[32px] text-gray-800 py-5">
                Off-peak hours
              </h4>
              <p className="text-gray-500 text-[14px] md:text-[16px] lg:text-[20px] leading-[30px] md:leading-[40px] lg:leading-[50px]">
                When the charging hub is quiet, the price per kWh drops, making it
                more affordable for you to charge your vehicles. Take advantage of
                these lower rates to charge your vehicles during off-peak hours.
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center lg:my-10 xl:my-24">
            <img src="/assets/img/arrow-left.png" className="hidden md:block md:w-1/4" alt="Arrow left" />
            <div className="md:basis-1/2 xl:basis-1/3 md:pl-12 my-7 md:my-0">
              <img src="/assets/img/graph-i.png" alt="Peak hours" />
              <h4 className="font-semibold text-[20px] md:text-[24px] lg:text-[32px] text-gray-800 py-5">Peak hours</h4>
              <p className="text-gray-500 text-[14px] md:text-[16px] lg:text-[20px] leading-[30px] md:leading-[40px] lg:leading-[50px]">
                As the charging hub becomes busier, the price per kWh adjusts
                accordingly. This ensures that you're always getting a fair deal and
                not paying more than you need too.
              </p>
            </div>
            <img src="/assets/img/arrow-right.png" className="hidden md:block md:w-1/4 -ml-32 -mt-32" alt="Arrow right" />
          </div>
          
          <div className="flex items-center justify-end">
            <div className="md:basis-1/2 xl:basis-1/3">
              <img src="/assets/img/energy-i.png" alt="Real-time adjustments" />
              <h4 className="font-semibold text-[20px] md:text-[24px] lg:text-[32px] text-gray-800 py-5">
                Real-time adjustments
              </h4>
              <p className="text-gray-500 text-[14px] md:text-[16px] lg:text-[20px] leading-[30px] md:leading-[40px] lg:leading-[50px]">
                Our AI algorithm continuously monitors your energy usage and adjusts
                the price in real-time. This means you'll never have to worry about
                surprise bills or hidden fees again.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 md:px-8 lg:px-10 xl:px-12 py-16 lg:py-32">
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-green-500 font-normal text-3xl md:text-4xl uppercase text-center">
              Key Benefits
            </h3>
          </div>
          
          <div className="flex flex-col xl:flex-row items-stretch gap-12">
            <div className="xl:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {img: '/assets/img/ev-benefit1.png', text: 'Save Off-Peak', desc: 'Lower rates during low-demand periods'},
                {img: '/assets/img/ev-benefit2.png', text: 'Fair Pricing', desc: 'Algorithm ensures reasonable rates'},
                {img: '/assets/img/ev-benefit3.png', text: 'Real-Time Billing', desc: 'Instant, transparent billing'},
                {img: '/assets/img/ev-benefit4.png', text: 'Control Costs', desc: 'Predictable charging expenses'},
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16">
                    <Image 
                      src={item.img}
                      alt={item.text}
                      width={64}
                      height={64}
                    />
                  </div>
                  <h4 className="font-semibold text-xl text-gray-900">{item.text}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="xl:w-1/2 relative rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/assets/img/ev-benefitbg2.png"
                alt="Benefits illustration"
                layout="fill"
                objectFit="cover"
                className="hidden md:block"
              />
              <Image 
                src="/assets/img/ev-benefitbg21.png"
                alt="Benefits illustration mobile"
                layout="fill"
                objectFit="cover"
                className="block md:hidden"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-12">
                <p className="text-white text-xl lg:text-2xl leading-relaxed text-center">
                  Our transparent, adaptive pricing model makes energy management 
                  simpler and more affordable for all our customers.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 relative rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/assets/img/ev-benefitbg.png"
              alt="Business solution"
              width={1500}
              height={600}
              layout="responsive"
              className="hidden md:block object-cover"
            />
            <Image 
              src="/assets/img/ev-benefitbg1.png"
              alt="Business solution mobile"
              width={800}
              height={600}
              layout="responsive"
              className="block md:hidden object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center p-8 md:p-12 max-w-4xl space-y-6">
                <h2 className="font-semibold text-white text-3xl md:text-4xl lg:text-5xl uppercase">
                  Are you a business or landowner?
                </h2>
                <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
                  Capitalize on the growing EV market with our AI-powered charging solution. 
                  Generate revenue while providing essential infrastructure for the future.
                </p>
                <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full text-lg transition-colors">
                  Learn About Commercial Solutions
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}