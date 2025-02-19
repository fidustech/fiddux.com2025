import React from 'react';
import PageTransition from '../components/PageTransition';
import { Shield, Lock, FileCheck, UserCheck } from 'lucide-react';

const Compliance = () => {
  return (
    <PageTransition>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-slate-900 py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white mb-4">Compliance & Security</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              At Fiddux, we maintain the highest standards of regulatory compliance and security to protect our clients and their assets.
            </p>
          </div>
        </section>

        {/* Licenses & Regulations */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">Licenses & Regulations</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-900 p-4 rounded-lg">
                <Shield className="text-blue-500 mb-3" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">European Licensing</h3>
                <p className="text-gray-300 mb-3">
                  We operate under European financial services regulations and other global licensing regulations, ensuring compliance with EU standards and a global reach for digital asset services.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <FileCheck className="text-blue-500 mr-2" size={16} />
                    Virtual Currency Service Provider
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="text-blue-500 mr-2" size={16} />
                    Blockchain Creation and Distribution
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="text-blue-500 mr-2" size={16} />
                    Crypto Asset Management
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 p-4 rounded-lg">
                <Lock className="text-blue-500 mb-3" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">Security Measures</h3>
                <p className="text-gray-300 mb-3">
                  Our security infrastructure is designed to protect client assets and data with institutional-grade measures.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <FileCheck className="text-blue-500 mr-2" size={16} />
                    Multi-signature Security
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="text-blue-500 mr-2" size={16} />
                    Cold Storage Solutions
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="text-blue-500 mr-2" size={16} />
                    24/7 Security Monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Processes */}
        <section className="bg-slate-800 py-8">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">Our Compliance Process</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-900 p-4 rounded-lg">
                <UserCheck className="text-blue-500 mb-3" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">KYC Verification</h3>
                <p className="text-gray-300">
                  Robust Know Your Customer procedures to verify client identity and prevent fraud.
                </p>
              </div>

              <div className="bg-slate-900 p-4 rounded-lg">
                <Shield className="text-blue-500 mb-3" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">AML Compliance</h3>
                <p className="text-gray-300">
                  Comprehensive Anti-Money Laundering measures to ensure legitimate transactions.
                </p>
              </div>

              <div className="bg-slate-900 p-4 rounded-lg">
                <Lock className="text-blue-500 mb-3" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">GDPR Compliance</h3>
                <p className="text-gray-300">
                  Full compliance with EU data protection regulations to protect client privacy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Compliance;