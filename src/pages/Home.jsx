import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaChartLine, FaUsers, FaLightbulb, FaCog, FaCode, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins leading-tight">
              Transforming Ideas into
              <span className="text-blue-400"> Digital Reality</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 font-inter">
              We specialize in creating innovative software solutions that drive business growth and success
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center group">
                Get Started
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn-secondary inline-flex items-center">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-description"
          >
            We offer comprehensive software solutions tailored to meet your business needs
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaCode className="text-4xl text-blue-600" />}
              title="Custom Software Development"
              description="Tailored solutions to meet your unique business requirements"
              delay={0.2}
            />
            <ServiceCard
              icon={<FaCog className="text-4xl text-blue-600" />}
              title="Web Application Development"
              description="Modern and responsive web applications built with cutting-edge technologies"
              delay={0.4}
            />
            <ServiceCard
              icon={<FaLightbulb className="text-4xl text-blue-600" />}
              title="Digital Transformation"
              description="Transform your business processes with innovative digital solutions"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-description"
          >
            We deliver excellence through our core values and commitment to quality
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaRocket className="text-4xl text-blue-600" />}
              title="Innovation"
              description="Stay ahead with cutting-edge solutions and technologies"
              delay={0.2}
            />
            <FeatureCard
              icon={<FaChartLine className="text-4xl text-blue-600" />}
              title="Proven Results"
              description="Track record of successful project deliveries"
              delay={0.4}
            />
            <FeatureCard
              icon={<FaUsers className="text-4xl text-blue-600" />}
              title="Expert Team"
              description="Skilled professionals dedicated to your success"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals
            </p>
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center group"
            >
              Contact Us Today
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-description"
          >
            Trusted by leading companies worldwide
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex justify-center"
              >
                <div className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300">
                  <span className="text-gray-500">Client Logo</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="card text-center group"
    >
      <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 font-poppins">{title}</h3>
      <p className="text-gray-600 font-inter">{description}</p>
    </motion.div>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="card text-center group"
    >
      <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 font-poppins">{title}</h3>
      <p className="text-gray-600 font-inter">{description}</p>
    </motion.div>
  );
};

export default Home; 