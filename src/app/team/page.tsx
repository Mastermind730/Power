"use client";
import { useState } from 'react';
import Image from 'next/image';

type TeamMember = {
  id: number;
  name: string;
  title: string;
  image: string;
  content: string;
  imagePosition: 'left' | 'right';
};

type TeamData = {
  founders: TeamMember[];
  advisors: TeamMember[];
  nonExecutives: TeamMember[];
};

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState<'founders' | 'advisors' | 'nonExecutives'>('founders');

  const teamData: TeamData = {
    founders:[
  {
    id: 1,
    name: 'Alexander Owers',
    title: 'Founder',
    image: '/alex.png',
    imagePosition: 'left',
    content: `Alexander is a driven and charismatic individual with a strong passion for sustainibility and driving positive change and innovation.

    Alexander holds a single GCSE in mathematics and a BTEC in Automotive Engineering has a great vision for the future and infinite appetite for scientific knowledge around the worlds health, technical innovations and trends.
    He engages with his local community to make a positive impact .
    Alexander is always looking for new opportunities to get involved and make a difference.

    With a professional background that includes serving as Commercial Director at Alfa Power and founding different sustainibilty companies.
    Alexander demonstrates his entreprenurial sprint and commitment to leave a positive impact. His dedication to personal and professional development is evident in his efforts to learn Arabic and Portugese,
    recognising the importance of language skills in international business.

Alexander is a dynamic and versatile individual .With his enthusiasm and motivation, Alexander is poised to make a lasting impact in his professional and  personal life.`
  },
  {
    id: 2,
    name: 'Dwayne Spiteri',
    title: 'Co-Founder',
    image: '/dwayne.png',
    imagePosition: 'right',
    content: `Dwayne Spiteri started off his career as a particle physicist 12 years ago, studying MSci Physics with Particle Physics and Cosmology from the University of Birmingham, and going on to complete a PhD in Experimental Particle Physics at the University of Glasgow. After a post-doctoral role working with the ATLAS experiment, he worked alongside grid computing colleagues who support particle physics research at Glasgow and pivoted to working in the field of computing sustainability.

Throughout his academic career, he has applied his data analysis skills to tackle a wide variety of complex problems and projects. Notably, he has investigated Higgs Boson decays and Top Quark jet structure at the ATLAS Experiment at CERN, characterised silicon wafer and pixel technology, designed and optimized computing farm layouts, and developed simulations to investigate operational carbon reduction measures.

Dwayne is also interested in making sure knowledge is accessible to all walks of life. He often organises and participates in outreach events, sharing his knowledge, passion, and expertise with others. In addition, for the past four years, he has played a pivotal role in designing, shaping, and managing the James McCune Smith Scholarships at the University of Glasgow, which aim to address the underrepresentation of Black British students at the postgraduate level and create a vibrant and connected Black academic community both on campus and more widely.`
  },
  {
    id: 3,
    name: 'Fabrizio Romanzini',
    title: 'Co-Founder',
    image: '/fabrizio.png',
    imagePosition: 'left',
    content: `A passionate and dedicated business leader with 15 years of experience, Fabrizio has had the privilege of leading multinational companies and driving profitable results through strategic restructuring, targeted training, and coaching of high-performing sales teams. As the CEO and Founder of Rinno Energy, he has had the opportunity to turn his vision into a reality and build a team that shares his passion for innovation and growth.

His background in engineering and his Master's degree in Strategy Business Management have given him a unique perspective on what it takes to succeed in today's fast-paced business environment. He believes that success is not just about having a deep understanding of the business, but also about being able to inspire and motivate people to work towards a common goal.

As a lifelong learner, Fabrizio is always seeking out new knowledge and insights to stay ahead of the curve. He is fascinated by the latest technologies, innovations, and trends in renewable energy, people management, and business innovation, and is passionate about using this knowledge to disrupt conventional business models and find new ways to drive growth and success.

As Director at Britcham Brazil, he brings his expertise and leadership skills to the table to help drive business growth and development in the region. He is committed to empowering businesses to thrive in a rapidly changing environment and is dedicated to delivering exceptional results that exceed expectations.`
  },
  {
    id: 4,
    name: 'Lala Rukh',
    title: 'Co-Founder',
    image: '/lala.png',
    imagePosition: 'right',
    content: `With a passion for creativity and precision, Lala Rukh is a dedicated professional graphic designer and an MPhil student in mathematics. Balancing the intricacies of visual design with the analytical rigor of advanced mathematics, Lala brings a unique blend of artistry and logical thinking to every project. Her journey in the field of graphic design is marked by a commitment to excellence and an unwavering enthusiasm for learning.

Lala's expertise in graphic design is complemented by her strong academic background, which has honed her problem-solving skills and attention to detail. This combination allows her to approach design challenges with both creativity and a methodical mindset, ensuring that her work not only looks stunning but also effectively communicates the intended message.

As a graphic designer, Lala has a keen eye for aesthetics and a deep understanding of how to translate concepts into visually engaging content.`
  },
  {
  id: 5,
  name: "Saurabh Tiwari",
  title: "Co-Founder",
  image: "/saurabh.jpg",
  imagePosition: "left",
  content: "Award-winning technopreneur (National IP Champion 2022, Top 10 Innovators Under 40 by TechChronicle 2023) with 10+ years of pioneering deep-tech solutions. Founded Thinkerplace (STEM education leader) and co-created SNP Innovations, driving breakthroughs in AI/Blockchain. As VP (India) for Water Freedom Revolution, deployed sustainable tech across 3 continents. Honored by NITI Aayog and Maharashtra State Innovation Society for mentoring 50+ startups and EdTech contributions. Holder of 12 patents (3 international) with IEEE-published research; architect of UK government's blockchain initiative and India's first AI-based water management system with Dr. Vijay Bhatkar. Regularly invited as jury for IIT Bombay's Eureka Challenge."
}
],
    advisors:  [
  {
    id: 1,
    name: 'Partha Dip Mahanta',
    title: '  Adviser',
    image: '/partha.png',
    imagePosition: 'left',
    content: `Partha Dip Mahanta is an accomplished board adviser, spacecraft controller,
licenced aircraft certifier and founder with a proven record of controlling critical
space, managing aviation and innovative business operations. Based in the UK,
he has provided strategic advisory services to a diverse range of clients—from UK
government bodies in countries such as Switzerland to startup ventures across
industries including energy, fashion and décor. His active memberships in the
Institute of Directors (UK), the European Centre for Space Economy and
Commerce and the Royal Aeronautical Society further illustrate his commitment to
leadership and innovation.
His qualifications include over two dozen training and workshops at the European
Space Agency, DLR Germany, Goonhilly Earth Station, Universities of London,
Southampton and Edinburgh in the space sector; Luiss Business School-
Amsterdam, EPFL, ESSEC Business School, the University of Geneva, MIT and
Yale University in specialised business and finance sector. Complementing this
robust training, he has earned a MSc in Air Transport Operations and
Management and a BEng in Aircraft Engineering from UHI developed in
partnership with AST, the world’s oldest aviation maintenance organisation, holds
former EASA and current UK CAA B1 and B3 aircraft licences and multiple
European Space Agency ECSS certifications. His continuous professional
development further includes investment banking virtual training with JP Morgan
and Bank of America.
Guided by a deep commitment to advancing the greater good of humanity, Partha
brings a unique blend of technical precision and strategic vision to his endeavours.
As a board adviser, he leverages his extensive experience to optimise operational
performance enhancing shareholder value. By integrating technical proficiency
with creative and strategic foresight, he consistently seeks to deliver
transformative value—empowering boards to tackle complex challenges, drive
operational excellence and secure long-term, sustainable growth. He relentlessly
pursues opportunities that resonate with his core values, aiming to make a
meaningful and lasting impact through his service.`
  },
  {
    id: 2,
    name: 'Francesco Paolo Camarda',
    title: '  Adviser',
    image: '/franzesco.png',
    imagePosition: 'right',
    content: `Francesco Paolo Camarda is an highly accomplished strategic leader with over 15 years of experience in strategy development, innovation, and leadership roles within FTSE100 companies and startups. He has been working for EY and Value Partners on strategic advisory projects across Europe and Middle East, then moved to support Vodafone Group business growth through finance, innovation and marketing roles. In 2017, he kickstarted a new business unit within Vodafone Italy, launching the first Consumer IoT portfolio in the Italian market. Following a successful scale up, he moved to Vodafone Group where he led the international scale up of Consumer IoT, opening up 5 new markets.
In his current role at Intertek, a FTSE100 company operating in 106 Countries with 46.000 employees, he is responsible of defining Group strategy, innovation needs, partnerships and M&A deals on the energy sector.
When not playing tennis or enjoying photography, Francesco is a startup advisor providing Strategy guidance to foster innovation and growth, with a diversified portfolio of startups mostly operating in the Energy and Technology space.`
  },
  {

    id: 3,
    name: 'ROY HARRISON',
    title: '  Adviser',
    image: '/roy.png',
    imagePosition: 'left',
    content:`He was educated at Henley Grammar School and the University of Birmingham, where he was awarded a Bachelor of Science degree in chemistry in 1969, followed by a PhD in organic chemistry in 1972 and a Doctor of Science degree in environmental chemistry in 1989.[3][2] His PhD research investigated sigmatropic reactions of tropolone ethers.[5][6]`
  },
   {

    id: 4,
    name: 'ABDULLAH BAJAHZAR',
    title: '  Adviser',
    image: '/abdul.png',
    imagePosition: 'right',
    content:``
  },

],
    nonExecutives: [
  {
    id: 1,
    name: 'Raj Kapoor',
    title: 'Non-Executive Director',
    image: '/raj.png',
    imagePosition: 'left',
    content: `Raj is the Founder of India Blockchain Alliance, the largest Indian emerging technology tech think tank, the Chairman of the Global Alliance for Artificial Intelligence and Innovation and an Advisory Board Member at over 70 blockchain companies including Tata Elxsi, Adlunam, Spherium, AI Planet and more. He is a global Blockchain & Cryptocurrency & FinTech Educator, Certified Bitcoin Professional (CBP), Blockchain Solution Architect, and a protem Chairman for Organization of Blockchain Technology Users (OBTU). He is also the Chief Board Advisor for Nappbooks Ltd and heads the world’s largest blockchain project for E-Notary services for the Government of India. He is also the CEO of Growth Alley Inc, USA, and an Advisory Board Member of the Velocity Foundation, USA for the Internet of Careers initiative.

Raj is a visionary in artificial intelligence, blending deep expertise with innovative thinking to pioneer cutting-edge solutions. Beyond technical mastery, he communicates complex concepts simply, bridging the gap between tech and the public. He actively engages in industry collaborations, shaping AI’s future while championing ethical and responsible AI.

He frequently speaks at global tech events (India, UK, USA, Africa, Malaysia, Canada) and is a four-time TEDx speaker. His expertise spans AI, Robotics, Cyber Security, IoT, and Cloud Computing, with over 140 speaking engagements in the past year alone.

Raj regularly contributes to media including Economic Times, Fortune, Moneycontrol, Mint, NDTV Profit, Business Standard, and appears on TV for blockchain insights.

Recognized among the top blockchain influencers by Asian Market Cap and featured on Corporate Connect Magazine's cover story, Raj also won the Thought Leadership Award at the Industry Insight Awards in Las Vegas.

He has worked on 4 blockchains, 5 centralized exchanges, 3 swaps, and 3 DEXs. He’s now developing India’s indigenous Layer 0 blockchain and several social impact blockchain projects aligned with the UN Sustainable Development Goals.

Raj has authored 20+ courses in blockchain, fintech, DeFi, NFTs, and Metaverse—used by NASSCOM, NSDC, CII, UnAcademy, and others.

He heads the E-Notary project steering committee for the Government of Gujarat and represented India on the G20 crypto compliance committee. He was recently onboarded as a mentor at Techstars, the world's largest pre-seed investor.

Raj is also Consulting Editor for 3.0 TV and Digilah, Singapore, and was awarded CSR Impact Leader of the Year for his innovative tech solutions in the CSR sector.`
  }
]









  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-green-50 py-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <h1 className="text-4xl font-extralight text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
    <span className="block">One </span>
    <span className="block text-green-600 mt-2">Connected Team</span>
  </h1>
  <div className="mt-8   mx-auto">
    <p className="text-lg sm:text-xl text-gray-600  leading-relaxed">
      At Power, our success is driven by a diverse team of passionate innovators, engineers, and industry experts who are dedicated to revolutionizing the energy sector. Each member of our team brings unique expertise and a commitment to excellence, working collaboratively to develop cutting-edge solutions that lead the way in sustainable energy management.
    </p>
    <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
      We believe in fostering a culture of continuous learning, creativity and integrity, where every idea is valued and every challenge is met with determination. Together, we&apos;re not just building technology — we&apos;re shaping the future of energy.
    </p>
  </div>
</div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
           
            <button
              onClick={() => setActiveTab('advisors')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'advisors' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Advisors
            </button>
            <button
              onClick={() => setActiveTab('nonExecutives')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'nonExecutives' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Non-Executives
            </button>
             <button
              onClick={() => setActiveTab('founders')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'founders' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Founders
            </button>
          </nav>
        </div>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {teamData[activeTab].map((member) => (
          <div key={member.id} className="mb-20">
            {member.imagePosition === 'left' ? (
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={member.image} 
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
               <div className="w-full md:w-2/3">
  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
  <p className="text-green-600 font-medium mt-1">{member.title}</p>
  <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line">
    {member.content}
  </p>
</div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={member.image} 
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
               <div className="w-full md:w-2/3">
  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
  <p className="text-green-600 font-medium mt-1">{member.title}</p>
  <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line">
    {member.content}
  </p>
</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;