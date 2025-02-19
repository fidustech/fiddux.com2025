import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Wallet, BarChart, ChevronRight, TrendingUp } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import VideoBackground from '../components/VideoBackground';

const Home = () => {
  const scrollToReadyToStart = () => {
    const section = document.getElementById('ready-to-start');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <VideoBackground />
          <div className="max-w-[1280px] mx-auto px-6 relative z-20 mt-32 md:mt-0">
            <div className="max-w-2xl mx-auto">
              <div className="backdrop-blur-md bg-black/30 px-6 sm:px-8 py-6 rounded-2xl border border-white/10 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-['Poppins'] font-bold text-white mb-4 leading-tight">
                  Crypto Fund
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed">
                  Multi-market fund using the latest insights and technologies offering its investors the best opportunities within the crypto markets.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={scrollToReadyToStart}
                    className="btn-primary group"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-accent">
                    Learn More
                  </Link>
                </div>
                <div className="mt-6 flex justify-center">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-white" size={24} />
                    <span className="text-sm font-medium text-white">Competitive Market Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-center">Why Choose Fiddux</h2>
            <p className="section-subtitle text-center mb-8">
              Experience the future of digital asset management with our comprehensive suite of services
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Shield />}
                title="Regulated & Secure"
                description="Fully compliant with international financial regulations and implementing the highest security standards."
              />
              <FeatureCard
                icon={<Wallet />}
                title="Multi-Market Access"
                description="Access diverse blockchain markets through our regulated gateway with institutional-grade security."
              />
              <FeatureCard
                icon={<BarChart />}
                title="Professional Management"
                description="Our expert team manages proprietary strategies developed through years of market experience."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="ready-to-start" className="relative py-24">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Download our app now and begin your journey in the blockchain space with a trusted, regulated partner.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href="https://play.google.com/store/apps/details?id=com.fiddux.app"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download for Android
                </a>
                <a
                  href="https://apps.apple.com/us/app/fiddux/id1641099735"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download for iOS
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

const FeatureCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="feature-card group">
      <div className="flex items-start">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[rgb(var(--color-accent)_/_0.1)] text-[rgb(var(--color-accent))] group-hover:bg-[rgb(var(--color-accent)_/_0.2)] transition-colors">
          {React.cloneElement(icon as React.ReactElement, { size: 24 })}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;