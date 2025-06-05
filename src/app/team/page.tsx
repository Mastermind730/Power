"use client";
import { useState } from 'react';
import Image from 'next/image';

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState('founders');

  const teamData = {
    founders: [
      {
        id: 1,
        name: 'Alex Johnson',
        title: 'Co-Founder & CEO',
        image: '/images/team/alex.jpg', 
        content: 'Alex brings 15 years of experience in technology leadership. Prior to founding our company, he led product development at a Fortune 500 tech firm. Alex holds an MBA from Stanford and is passionate about building sustainable business models that drive innovation while creating value for all stakeholders.',
        imagePosition: 'left'
      },
      {
        id: 2,
        name: 'Sarah Chen',
        title: 'Co-Founder & CTO',
        image: '/images/team/sarah.jpg',
        content: 'Sarah is a visionary technologist with expertise in AI and machine learning. She previously headed research at MIT\'s Computer Science lab and has published numerous papers on neural networks. Sarah leads our technical strategy and ensures we stay at the forefront of technological advancement.',
        imagePosition: 'right'
      }
    ],
    advisors: [
      {
        id: 1,
        name: 'Dr. Michael Rodriguez',
        title: 'Strategic Advisor',
        image: '/images/team/michael.jpg',
        content: 'Dr. Rodriguez serves as our strategic advisor, bringing 25 years of experience in scaling technology companies. He has successfully guided three startups through IPO processes and currently sits on the board of several tech unicorns. His insights into market positioning and growth strategies are invaluable to our leadership team.',
        imagePosition: 'left'
      },
      {
        id: 2,
        name: 'Lisa Wong',
        title: 'Financial Advisor',
        image: '/images/team/lisa.jpg',
        content: 'Lisa is a seasoned financial executive with deep expertise in venture capital and corporate finance. She helps shape our financial strategy and investor relations. Previously, Lisa was a partner at a leading Silicon Valley VC firm where she oversaw investments in over 30 early-stage technology companies.',
        imagePosition: 'right'
      }
    ],
    nonExecutives: [
      {
        id: 1,
        name: 'David Wilson',
        title: 'Non-Executive Director',
        image: '/images/team/david.jpg',
        content: 'David brings extensive governance experience from his tenure on multiple public company boards. He specializes in risk management and corporate governance, ensuring we maintain the highest standards of business practice. David also chairs our audit committee and provides oversight on financial reporting.',
        imagePosition: 'left'
      },
      {
        id: 2,
        name: 'Priya Patel',
        title: 'Independent Director',
        image: '/images/team/priya.jpg',
        content: 'Priya is an advocate for diversity and inclusion in the tech industry. As an independent director, she provides valuable perspective on talent strategy and corporate culture. Her background in human resources at major tech firms gives her unique insight into building high-performing, inclusive teams.',
        imagePosition: 'right'
      }
    ]
  };

  return (
    <>
      

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-green-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              <span className="block">Our</span>
              <span className="block text-green-600">Team</span>
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
              The brilliant minds driving our vision forward
            </p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('founders')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'founders' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Founders
              </button>
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
            </nav>
          </div>
        </div>

        {/* Team Members */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {teamData[activeTab].map((member) => (
            <div key={member.id} className="mb-20">
              {member.imagePosition === 'left' ? (
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-1/3">
                    <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                      {/* Replace with your Image component */}
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
                    <p className="mt-4 text-gray-600 leading-relaxed">{member.content}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                  <div className="w-full md:w-1/3">
                    <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                      {/* Replace with your Image component */}
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
                    <p className="mt-4 text-gray-600 leading-relaxed">{member.content}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

       
      </div>
    </>
  );
};

export default TeamPage;