// pages/ev-charging.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
      <section className="px-6 md:px-12 lg:px-24 pt-16 md:pt-24">
  <div className="max-w-7xl mx-auto">
    {/* Top Row - Heading Left, Text Right */}
    <div className="flex flex-col lg:flex-row items-start gap-8 mt-10 lg:gap-16 mb-12 lg:mb-16">
      {/* Left Column - Heading */}
      <div className="lg:w-1/2">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
          <span className="text-gray-700">Embrace</span>{' '}
          <span className="text-green-500">EI Charging</span>
        </h1>
      </div>
      
      {/* Right Column - Paragraph */}
      <div className="lg:w-1/2 lg:pt-4">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Imagine a world where electric vehicle charging is seamless, efficient, 
          and cost-effective. Power is making that a reality with our cutting-edge 
          AI-powered commercial EV charging solution.
        </p>
      </div>
    </div>
    
    {/* Full Width Image Below */}
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
      <Image
        src="/ev_car.jpg"
        alt="AI Charging System in Action"
        fill
        className="object-cover"
        priority
      />
      {/* public\ev-herocard.png */}
      {/* Overlay Card - Positioned at bottom left */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
        <Image
          src={"/ev-herocard.png"}
          alt="AI Charging System Card"
          width={350}
          height={250}
          className="object-cover rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
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
              src="/ev_new_hero.jpg"
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
              Our adaptive &quot;Bolt-style&quot; pricing algorithm intelligently adjusts kWh rates based on time of day, 
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
                src="/ev-graph.png"
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
            How it&apos;s work
          </h3>
          
          <div className="flex items-center justify-start">
            <div className="md:basis-1/2 xl:basis-1/3">
              <Image src="/clock.png" alt="Off-peak hours" width={60} height={60} />
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
            <Image src="/arrow-left.png" className="hidden md:block md:w-1/4" alt="Arrow left" width={100} height={100} />
            <div className="md:basis-1/2 xl:basis-1/3 md:pl-12 my-7 md:my-0">
              <Image src="/graph-i.png" alt="Peak hours" width={60} height={60} />
              <h4 className="font-semibold text-[20px] md:text-[24px] lg:text-[32px] text-gray-800 py-5">Peak hours</h4>
              <p className="text-gray-500 text-[14px] md:text-[16px] lg:text-[20px] leading-[30px] md:leading-[40px] lg:leading-[50px]">
                As the charging hub becomes busier, the price per kWh adjusts
                accordingly. This ensures that you&apos;re always getting a fair deal and
                not paying more than you need too.
              </p>
            </div>
            <Image src="/arrow-right.png" className="hidden md:block md:w-1/4 -ml-32 -mt-32" width={100} height={100} alt="Arrow right" />
          </div>
          
          <div className="flex items-center justify-end">
            <div className="md:basis-1/2 xl:basis-1/3">
              <Image src="/energy-i.png" alt="Real-time adjustments" width={60} height={60} />
              <h4 className="font-semibold text-[20px] md:text-[24px] lg:text-[32px] text-gray-800 py-5">
                Real-time adjustments
              </h4>
              <p className="text-gray-500 text-[14px] md:text-[16px] lg:text-[20px] leading-[30px] md:leading-[40px] lg:leading-[50px]">
                Our AI algorithm continuously monitors your energy usage and adjusts
                the price in real-time. This means you&apos;ll never have to worry about
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
          
         <div className="flex flex-col gap-12">
  {/* Full-width image section */}
  <div className="w-full relative rounded-2xl h-[150px] md:h-[200px] lg:h-[300px] overflow-hidden shadow-xl">
    <Image 
      src="/ev-benefitbg2.png"
      alt="Benefits illustration"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 flex items-center justify-start p-6 bg-gradient-to-t from-black/60 to-black/30">
      <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed text-center max-w-md lg:max-w-xl">
        Our transparent, adaptive pricing model makes energy management 
        simpler and more affordable for all our customers.
      </p>
    </div>
  </div>

  {/* Feature cards in a single row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {img: '/ev-benefit1.png', text: 'Save Off-Peak', desc: 'Lower rates during low-demand periods'},
      {img: '/ev-benefit2.png', text: 'Fair Pricing', desc: 'Algorithm ensures reasonable rates'},
      {img: '/ev-benefit3.png', text: 'Real-Time Billing', desc: 'Instant, transparent billing'},
      {img: '/ev-benefit4.png', text: 'Control Costs', desc: 'Predictable charging expenses'},
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
</div>
          <div className="mt-20 relative rounded-3xl overflow-hidden shadow-2xl">
  {/* Desktop Image */}
  <Link href={"/business"}>
  <Image 
    src="/benefit_bg.png"
    alt="Business solution"
    width={1500}
    height={600}
    className="hidden md:block w-full h-[600px] object-cover"
  />

  {/* Mobile Image */}
  <Image 
    src="/assets/img/ev-benefitbg1.png"
    alt="Business solution mobile"
    width={800}
    height={600}
    className="block md:hidden w-full h-[500px] object-cover"
  />

  {/* Overlay content */}
  <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
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
  </Link>
</div>

        </section>
      </main>
    </div>
  );
}