import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers, FaLightbulb, FaCog, FaCode } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">
              Transforming Ideas into Digital Reality
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              We specialize in creating innovative software solutions that drive business growth and success
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We offer comprehensive software solutions tailored to meet your business needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaCode className="text-4xl text-blue-600" />}
              title="Custom Software Development"
              description="Tailored solutions to meet your unique business requirements"
            />
            <ServiceCard
              icon={<FaCog className="text-4xl text-blue-600" />}
              title="Web Application Development"
              description="Modern and responsive web applications built with cutting-edge technologies"
            />
            <ServiceCard
              icon={<FaLightbulb className="text-4xl text-blue-600" />}
              title="Digital Transformation"
              description="Transform your business processes with innovative digital solutions"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We deliver excellence through our core values and commitment to quality
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaRocket className="text-4xl text-blue-600" />}
              title="Innovation"
              description="Stay ahead with cutting-edge solutions and technologies"
            />
            <FeatureCard
              icon={<FaChartLine className="text-4xl text-blue-600" />}
              title="Proven Results"
              description="Track record of successful project deliveries"
            />
            <FeatureCard
              icon={<FaUsers className="text-4xl text-blue-600" />}
              title="Expert Team"
              description="Skilled professionals dedicated to your success"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how we can help you achieve your goals
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Contact Us Today
          </button>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Clients</h2>
          <p className="text-gray-600 text-center mb-12">
            Trusted by leading companies worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex justify-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Client Logo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-white rounded-lg shadow-lg text-center"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-white rounded-lg shadow-lg text-center"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default Home; 