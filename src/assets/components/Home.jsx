import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Transform Your Business</h1>
            <p className="text-xl mb-8">Innovative solutions for your company's growth</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaRocket className="text-4xl text-blue-600" />}
              title="Innovation"
              description="Stay ahead with cutting-edge solutions"
            />
            <FeatureCard
              icon={<FaChartLine className="text-4xl text-blue-600" />}
              title="Growth"
              description="Accelerate your business growth"
            />
            <FeatureCard
              icon={<FaUsers className="text-4xl text-blue-600" />}
              title="Support"
              description="24/7 dedicated customer support"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Our Company</h2>
              <p className="text-gray-600 mb-6">
                We are dedicated to providing innovative solutions that help businesses thrive in the digital age. 
                With years of experience and a passionate team, we deliver excellence in every project.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="text-gray-400 mt-4">Let's discuss how we can help your business grow</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Your Business Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Home;
