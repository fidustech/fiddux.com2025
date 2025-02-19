import React from 'react';
import PageTransition from '../components/PageTransition';
import { Shield, Wallet, BarChart, PieChart, LineChart, Lock } from 'lucide-react';

const Services = () => {
  return (
    <PageTransition>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-slate-900 py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Discover our comprehensive range of blockchain-enabled financial solutions, designed to meet the specific needs of both individual and institutional clients.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-4">
              <ServiceCard
                icon={<Wallet />}
                title="Digital Asset Management"
                description="Professional management of your digital assets with institutional-grade security and compliance measures."
                features={[
                  "Secure custody solutions",
                  "Portfolio management",
                  "Regular performance reports",
                ]}
              />
              
              <ServiceCard
                icon={<BarChart />}
                title="Market Analysis"
                description="Our team uses advanced market analysis tools and insights to make decisions."
                features={[
                  "Real-time market data",
                  "Latest AI models and trading tools",
                  "Monthly Performance Report",
                ]}
              />
              
              <ServiceCard
                icon={<PieChart />}
                title="Investment Solutions"
                description="Tailored investment strategies across multiple blockchain markets and assets."
                features={[
                  "Diversified portfolios",
                  "Risk management",
                  "Regular rebalancing",
                ]}
              />
              
              <ServiceCard
                icon={<Lock />}
                title="Secure Trading"
                description="Liquid solutions worldwide"
                features={[
                  "Multi-signature security",
                  "Cold storage options",
                  "24/7 monitoring",
                ]}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-800 py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-900 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">How secure are your services?</h3>
                <p className="text-gray-300">
                  We implement institutional-grade security measures including multi-signature wallets, cold storage, and 24/7 monitoring systems. All operations are fully regulated and compliant with international standards.
                </p>
              </div>
              
              <div className="bg-slate-900 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">What types of assets do you support?</h3>
                <p className="text-gray-300">
                  We support a wide range of digital assets and blockchain-based investments, carefully selected based on thorough analysis and regulatory compliance.
                </p>
              </div>
              
              <div className="bg-slate-900 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">How do I get started?</h3>
                <p className="text-gray-300">
                  Download our mobile app, complete the registration process, and our team will guide you through the onboarding process, ensuring compliance with all necessary regulations.
                </p>
              </div>
              
              <div className="bg-slate-900 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">What are your fees?</h3>
                <p className="text-gray-300">
                  Our fee structure is transparent and competitive, varying based on the services you choose. Contact our team for detailed information about our pricing models.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <div className="bg-slate-900 p-4 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300">
      <div className="text-blue-500 mb-2">
        {React.cloneElement(icon, { size: 40 })}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-3">{description}</p>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400 flex items-center">
            <Shield className="text-blue-500 mr-2" size={14} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;