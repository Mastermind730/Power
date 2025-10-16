import React from 'react';
import Image from 'next/image';
import { BookOpen, GraduationCap, Users, Target } from 'lucide-react';

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">
            Education &
            <br />
            <span className="text-emerald-500">Learning</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Empowering communities through knowledge and sustainable energy education
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight">
                  Our <span className="text-emerald-500">Educational</span>
                  <br />
                  Mission
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  We believe that education is the cornerstone of sustainable energy adoption. 
                  Through comprehensive training programs and workshops, we&apos;re building a 
                  community of informed energy consumers and professionals.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Our educational initiatives span from basic energy literacy to advanced 
                  technical training, ensuring that everyone can participate in the green 
                  energy revolution.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/education-hero.jpg"
                  alt="Education and training"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
              
              {/* Floating Icon */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <GraduationCap className="text-white" size={32} />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Comprehensive Courses
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Structured learning paths covering everything from basic energy concepts 
                to advanced sustainability practices and smart home technology.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Community Workshops
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Interactive sessions bringing together learners, experts, and industry 
                professionals to share knowledge and best practices.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Certification Programs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Industry-recognized certifications that validate your expertise in 
                sustainable energy management and green technology implementation.
              </p>
            </div>
          </div>

          {/* Document/File Integration Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 shadow-xl">
            <h2 className="text-4xl font-light text-gray-900 mb-6 text-center">
              Educational <span className="text-emerald-500">Resources</span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Access our comprehensive educational materials, training guides, and learning resources
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Education Resource Pack
                    </h3>
                    <p className="text-gray-600">
                      Complete training materials and guides
                    </p>
                  </div>
                </div>
                <a
                  href="https://learningcurvegroup.wetransfer.com/downloads/075bb9937fc40699095bb586e3b81b6d20250917092138/51116939f0415783c78720ff6cb5e98220250917092139/a701b7?t_exp=1763284899&t_lsid=26e2ef7a-e799-43dc-9283-56ce0e48a3d6&t_network=email&t_rid=YXV0aDB8VHJhbnNmZXJ8cW51ejlqM2dzZzdzdGs%3D&t_s=download_link&t_ts=1758100899&utm_campaign=TRN_TDL_01&utm_source=sendgrid&utm_medium=email&trk=TRN_TDL_01&subdomain=learningcurvegroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  Download Resources
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Ready to Start <span className="text-emerald-500">Learning?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Join thousands of learners who are making a difference in sustainable energy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact_us"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl"
            >
              Get Started Today
            </a>
            <a
              href="#resources"
              className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl"
            >
              Explore Resources
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
