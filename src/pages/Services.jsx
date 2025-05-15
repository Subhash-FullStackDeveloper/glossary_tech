import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUsers, FaCog, FaCode, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="text-blue-600 text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Services = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="container mx-auto px-4 py-20"
  >
    <h1 className="text-4xl font-bold mb-12">Our Services</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServiceCard
        icon={<FaBriefcase />}
        title="Business Consulting"
        description="Strategic guidance for your business growth and digital transformation."
      />
      <ServiceCard
        icon={<FaUsers />}
        title="Team Management"
        description="Effective solutions for team collaboration and productivity."
      />
      <ServiceCard
        icon={<FaCog />}
        title="Technical Support"
        description="24/7 technical support and maintenance for your systems."
      />
      <ServiceCard
        icon={<FaCode />}
        title="Custom Development"
        description="Tailored software solutions to meet your specific business needs."
      />
      <ServiceCard
        icon={<FaChartLine />}
        title="Data Analytics"
        description="Insights and analytics to drive informed business decisions."
      />
      <ServiceCard
        icon={<FaShieldAlt />}
        title="Security Solutions"
        description="Comprehensive security measures to protect your digital assets."
      />
    </div>
  </motion.div>
);

export default Services; 