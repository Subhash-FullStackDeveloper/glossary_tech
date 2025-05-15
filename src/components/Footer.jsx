import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Glossary Soft Tech</h3>
            <p className="mb-4">
              Glossary Soft Tech put emphasis on long-term commitment and combine global reach and local intimacy to provide premier professional services from consulting, system development to business IT outsourcing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaEnvelope className="mt-1 mr-3" />
                <a href="mailto:info@glossarysofttech.com" className="hover:text-white transition-colors">
                  info@glossarysofttech.com
                </a>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3" />
                <p>
                  Glossary soft tech pvt ltd,<br />
                  Alluri trade center, 5th floor, 406/2<br />
                  Beside usha mullapudi arche,<br />
                  kphb main road- 500072.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>All rights reserved © {new Date().getFullYear()} by Glossary Softtech Pvt Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 