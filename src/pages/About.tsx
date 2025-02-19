import React from 'react';
import PageTransition from '../components/PageTransition';
import { Shield, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <PageTransition>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-slate-900 py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white mb-4">About Fiddux</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              A multi-market fund using the latest insights and technologies, offering the best opportunities within the crypto markets.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-3">Our Mission</h2>
                <p className="text-gray-300">
                  To provide secure and regulated access to blockchain-based financial opportunities, enabling our clients to participate safely in the digital asset economy while maintaining the highest standards of compliance and security.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-3">Our Vision</h2>
                <p className="text-gray-300">
                  To be the most trusted gateway between traditional finance and blockchain technology, setting the standard for regulated digital asset services globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-slate-800 py-8">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-900 p-4 rounded-lg text-center">
                <Shield className="text-blue-500 mx-auto mb-3" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
                <p className="text-gray-300">
                  We prioritize the security of our clients' assets and data above all else, implementing the highest standards of protection.
                </p>
              </div>
              
              <div className="bg-slate-900 p-4 rounded-lg text-center">
                <Target className="text-blue-500 mx-auto mb-3" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">
                  We continuously evolve our services to leverage the latest technological advancements while maintaining regulatory compliance.
                </p>
              </div>
              
              <div className="bg-slate-900 p-4 rounded-lg text-center">
                <Users className="text-blue-500 mx-auto mb-3" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">Client Focus</h3>
                <p className="text-gray-300">
                  We put our clients' needs first, providing personalized solutions and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">Tailored</div>
                <div className="text-gray-300">Personalised Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">Always</div>
                <div className="text-gray-300">Liquid</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">Global</div>
                <div className="text-gray-300">Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">Secure</div>
                <div className="text-gray-300">Infrastructure</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default About;