import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import { useToast } from '../context/ToastContext';

const ContactInfo = ({ icon: Icon, text, link }) => (
  <motion.a
    href={link}
    whileHover={{ x: 5 }}
    className="flex items-center group cursor-pointer"
  >
    <Icon className="text-blue-600 mr-3 text-xl group-hover:text-blue-700" />
    <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
      {text}
    </span>
  </motion.a>
);

const Contact = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      showToast('Message sent successfully!', 'success');
    } catch (error) {
      showToast('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-12 md:py-20"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond
          as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
        <div className="order-2 md:order-1">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                  rows="4"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={isSubmitting}
                className="flex justify-center items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span>Sending...</span>
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <ContactInfo
                icon={FaPhone}
                text="+1 (555) 123-4567"
                link="tel:+15551234567"
              />
              <ContactInfo
                icon={FaEnvelope}
                text="support@yourbrand.com"
                link="mailto:support@yourbrand.com"
              />
              <ContactInfo
                icon={FaMapMarkerAlt}
                text="123 Business Street, Tech City, TC 12345"
                link="https://maps.google.com"
              />
              <ContactInfo
                icon={FaClock}
                text="Mon - Fri: 9:00 AM - 6:00 PM"
                link="#"
              />
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <FaPhone />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <FaEnvelope />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact; 