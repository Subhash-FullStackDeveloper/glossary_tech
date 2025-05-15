import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-2">Our Office</h3>
                    <p className="text-gray-600">
                      Glossary soft tech pvt ltd,<br />
                      Alluri trade center, 5th floor, 406/2<br />
                      Beside usha mullapudi arche,<br />
                      kphb main road- 500072.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-blue-600 text-2xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:info@glossarysofttech.com"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      info@glossarysofttech.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-blue-600 text-2xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6">Location Map</h2>
                <div className="w-full h-64 bg-gray-200 rounded-lg">
                  {/* Add Google Maps iframe here */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 