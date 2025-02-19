import React from 'react';
import { Shield, Award, CheckCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900">
      {/* Trust Badges Section */}
      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="group hover:-translate-y-1 transition-transform duration-300 ease-out">
              <div className="flex items-center gap-3 relative">
                <div className="absolute inset-0 bg-blue-500/5 rounded-lg -m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Shield className="text-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={24} />
                <span className="text-gray-300 whitespace-nowrap group-hover:text-white transition-colors duration-300">GDPR Compliant</span>
              </div>
            </div>
            <div className="group hover:-translate-y-1 transition-transform duration-300 ease-out">
              <div className="flex items-center gap-3 relative">
                <div className="absolute inset-0 bg-blue-500/5 rounded-lg -m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Award className="text-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={24} />
                <span className="text-gray-300 whitespace-nowrap group-hover:text-white transition-colors duration-300">Licensed in Europe and globally</span>
              </div>
            </div>
            <div className="group hover:-translate-y-1 transition-transform duration-300 ease-out">
              <div className="flex items-center gap-3 relative">
                <div className="absolute inset-0 bg-blue-500/5 rounded-lg -m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CheckCircle className="text-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={24} />
                <span className="text-gray-300 whitespace-nowrap group-hover:text-white transition-colors duration-300">Secure Transactions</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">About Fiddux</h3>
            <p className="text-gray-400 text-sm max-w-md">
              Your trusted gateway to safely participate in the world of blockchain with regulated financial solutions.
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <address className="text-gray-400 text-sm not-italic">
              Fidus Finance<br />
              Joe 2<br />
              Tallinn Harjumaa, 10151<br />
              <a href="mailto:info@fiddux.com" className="hover:text-white transition">info@fiddux.com</a>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="text-center md:text-left text-gray-400 text-sm">
            © 2001-2025 Fiddux. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;