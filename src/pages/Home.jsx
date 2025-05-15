import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const services = [
    {
      title: 'BPO Services',
      description: 'Glossary Soft Tech empowers organizations with cost-efficient, innovative, and cutting-edge business solutions.',
      link: '/services/bpo'
    },
    {
      title: 'Software Development',
      description: 'We are committed to building effective, timely systems and delivering solutions that create clear and unparalleled business value for our clients.',
      link: '/services/software-development'
    },
    {
      title: 'Training & Placements',
      description: 'Glossary Soft Tech has been actively involved in Job Placement Assistance as a value-added service in the IT/ITES Training Program.',
      link: '/services/training'
    },
    {
      title: 'Software Testing',
      description: 'Glossary offer a comprehensive portfolio of testing services that take a proven approach to industrialized and structured software testing.',
      link: '/services/testing'
    },
    {
      title: 'Internships',
      description: 'Glossary provide real world experience to those looking to explore or gain the relevant knowledge and skills required to enter into a particular career field.',
      link: '/services/internships'
    },
    {
      title: 'Staffing & Solutions',
      description: "Recruitment Process Outsourcing (RPO) is when a service provider acts as a company's internal recruitment function for a portion or all of its jobs.",
      link: '/services/staffing'
    }
  ];

  const testimonials = [
    {
      text: "Anytime we reach out to Glossary Soft Tech Pvt.Ltd, they are there for our outsourced HR needs. They started by meeting with us and asking us about what we were looking for and took the time to understand our processes and the culture of our company. We really like their style and type of communication and most importantly the HR expertise they bring to our company.",
      author: "Amruth kathekar",
      position: "Deputy HR Manager (Polaris Gamma Process Hub India)"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Glossary Softtech
            </h1>
            <p className="text-xl mb-8">
              Growing as the reliable partner to the clients and delivering them the results beyond their expectations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
            >
              Get Started
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Welcome to Glossary Soft Tech</h2>
            <p className="text-gray-600 mb-8">
              Glossary Soft Tech helps you to manage the ever changing talent needs in today's world of work in which rapid access to the right talent is a powerful competitive advantage. With our thorough understanding of staffing trends and our deep pool of highly qualified Candidates, Glossary Soft Tech can deliver the talent, matching the right individual to the right job—faster and with better business results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-gray-600 mb-4">
                Glossary Soft Tech Develop and provide Intelligent, Interactive and Scalable software and Security Systems products applying advance technologies to our valued customers along with complete technical support.
              </p>
              <Link to="/mission-vision" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-gray-600 mb-4">
                Glossary Soft Tech advances customer success by delivering unique best value solutions, consulting services and technologies that meet our clients' mission-critical needs anytime and anywhere.
              </p>
              <Link to="/mission-vision" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Values</h3>
              <p className="text-gray-600 mb-4">
                Glossary Soft Tech We believe that our success is built on the success of our clients, and we do what it takes to give our clients a sustained competitive edge through value and innovation.
              </p>
              <Link to="/mission-vision" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                >
                  Learn More <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Testimonials</h2>
          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                <h4 className="font-bold text-lg">{testimonial.author}</h4>
                <p className="text-gray-500">{testimonial.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Add client logos here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 