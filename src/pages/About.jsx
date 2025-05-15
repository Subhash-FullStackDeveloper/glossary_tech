import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="container mx-auto px-4 py-20"
  >
    <h1 className="text-4xl font-bold mb-8">About Us</h1>
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">
          Founded with a vision to transform the digital landscape, we've been at the forefront
          of innovation for over a decade. Our journey began with a simple idea: to make
          technology accessible and effective for businesses of all sizes.
        </p>
        <p className="text-gray-600 mb-6">
          Today, we're proud to serve clients worldwide, helping them achieve their digital
          transformation goals with cutting-edge solutions and unparalleled expertise.
        </p>
      </div>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To empower businesses with innovative digital solutions that drive growth and success.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To be the global leader in digital transformation and technology innovation.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default About; 