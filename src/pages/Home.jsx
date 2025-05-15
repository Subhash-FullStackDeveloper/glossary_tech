import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaChartLine, FaUsers, FaLightbulb, FaCog, FaCode, FaArrowRight, FaCheck } from 'react-icons/fa';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen pt-20">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
          >
            <div className="loading-spinner" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero Section */}
            <section className="relative min-h-[80vh] bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
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
                <div className="grid md:grid-cols-2 gap-12 items-center py-12 md:py-0">
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                    className="max-w-3xl"
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins leading-tight">
                      Transforming Ideas into
                      <span className="text-blue-400"> Digital Reality</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200 font-inter">
                      We specialize in creating innovative software solutions that drive business growth and success. Our expert team delivers cutting-edge technology solutions tailored to your needs.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link to="/contact" className="btn-primary inline-flex items-center group">
                        Get Started
                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link to="/services" className="btn-secondary inline-flex items-center">
                        Our Services
                      </Link>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden md:block"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
                        >
                          <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</h3>
                          <p className="text-gray-200">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Wave shape divider */}
              <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                  <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    Why Choose <span className="text-blue-600">Glossary Softtech</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We deliver excellence through innovation, expertise, and commitment to your success
                  </p>
                </motion.div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <FeatureCard
                    icon={<FaRocket className="text-4xl text-blue-600" />}
                    title="Innovative Solutions"
                    description="Stay ahead with cutting-edge technologies and innovative approaches"
                    features={[
                      "Custom Software Development",
                      "Cloud Solutions",
                      "Digital Transformation"
                    ]}
                    delay={0.2}
                  />
                  <FeatureCard
                    icon={<FaChartLine className="text-4xl text-blue-600" />}
                    title="Proven Results"
                    description="Track record of successful project deliveries and satisfied clients"
                    features={[
                      "99% Project Success Rate",
                      "On-time Delivery",
                      "Cost-effective Solutions"
                    ]}
                    delay={0.4}
                  />
                  <FeatureCard
                    icon={<FaUsers className="text-4xl text-blue-600" />}
                    title="Expert Team"
                    description="Skilled professionals dedicated to bringing your vision to life"
                    features={[
                      "Certified Developers",
                      "Agile Methodology",
                      "24/7 Support"
                    ]}
                    delay={0.6}
                  />
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    Our <span className="text-blue-600">Services</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Comprehensive software solutions tailored to meet your business needs
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                  <ServiceCard
                    icon={<FaCode className="text-4xl text-blue-600" />}
                    title="Software Development"
                    description="Custom software solutions built with the latest technologies"
                    delay={0.2}
                  />
                  <ServiceCard
                    icon={<FaCog className="text-4xl text-blue-600" />}
                    title="IT Consulting"
                    description="Strategic technology consulting to drive your business forward"
                    delay={0.4}
                  />
                  <ServiceCard
                    icon={<FaLightbulb className="text-4xl text-blue-600" />}
                    title="Digital Innovation"
                    description="Transforming businesses through digital innovation"
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
                  className="text-center max-w-4xl mx-auto"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-xl mb-8 text-gray-300">
                    Let's discuss how we can help you achieve your goals and drive your business forward
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="btn-secondary inline-flex items-center justify-center group"
                    >
                      Schedule a Consultation
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/services"
                      className="btn-primary bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 inline-flex items-center justify-center"
                    >
                      Explore Our Services
                    </Link>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    What Our <span className="text-blue-600">Clients Say</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Don't just take our word for it - hear from some of our satisfied clients
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "John Smith",
                      position: "CEO, Tech Solutions",
                      content: "Working with Glossary Softtech has been a game-changer for our business. Their expertise and dedication are unmatched."
                    },
                    {
                      name: "Sarah Johnson",
                      position: "CTO, Innovation Corp",
                      content: "The team's technical expertise and project management skills made our digital transformation journey smooth and successful."
                    },
                    {
                      name: "Michael Brown",
                      position: "Director, Global Systems",
                      content: "Exceptional service and cutting-edge solutions. They truly understand business needs and deliver beyond expectations."
                    }
                  ].map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-white p-8 rounded-lg shadow-soft hover:shadow-hover transition-shadow duration-300"
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <div className="flex-grow">
                          <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                            <span className="text-blue-600 font-semibold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                            <p className="text-blue-600">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll To Top Button Component */}
      <ScrollToTopButton />
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, features, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white rounded-lg shadow-soft hover:shadow-hover p-8 transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-4 font-poppins text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 font-inter">{description}</p>
        <ul className="space-y-3 mt-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <FaCheck className="text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
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
      className="bg-white rounded-lg shadow-soft hover:shadow-hover p-8 transition-all duration-300 group"
    >
      <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 font-poppins text-gray-900">{title}</h3>
      <p className="text-gray-600 font-inter">{description}</p>
    </motion.div>
  );
};

// Scroll To Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default Home; 