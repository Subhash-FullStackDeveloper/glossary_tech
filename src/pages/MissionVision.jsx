import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Mission, Vision & Values</h1>
          
          {/* Mission Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Glossary Soft Tech Develop and provide Intelligent, Interactive and Scalable software and Security Systems products applying advance technologies to our valued customers along with complete technical support.
            </p>
          </section>

          {/* Vision Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              Glossary Soft Tech advances customer success by delivering unique best value solutions, consulting services and technologies that meet our clients' mission-critical needs anytime and anywhere.
            </p>
          </section>

          {/* Values Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 mb-6">
              We believe that our success is built on the success of our clients, and we do what it takes to give our clients a sustained competitive edge through value and innovation.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Customer Focus</li>
              <li>Innovation</li>
              <li>Excellence</li>
              <li>Integrity</li>
              <li>Teamwork</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVision; 