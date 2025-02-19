import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <PageTransition>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-slate-900 py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Have questions? We're here to help. Reach out to our team for assistance with any inquiries about our services.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-blue-500 mr-3" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Office Location</h3>
                      <address className="text-gray-300 not-italic">
                        Fidus Finance<br />
                        Joe 2<br />
                        Tallinn Harjumaa, 10151
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-blue-500 mr-3" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                      <a href="mailto:info@fiddux.com" className="text-gray-300 hover:text-white transition">
                        info@fiddux.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Contact;