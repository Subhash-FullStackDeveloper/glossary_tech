import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Careers = () => {
  const jobOpenings = [
    {
      title: 'Software Developer',
      department: 'IT/Software',
      location: 'Hyderabad',
      type: 'Full-time',
      experience: '2-5 years'
    },
    {
      title: 'BPO Executive',
      department: 'BPO Services',
      location: 'Hyderabad',
      type: 'Full-time',
      experience: '1-3 years'
    },
    {
      title: 'HR Manager',
      department: 'Human Resources',
      location: 'Hyderabad',
      type: 'Full-time',
      experience: '5-8 years'
    }
  ];

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Careers at Glossary Softtech</h1>
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-600 mb-6">
              Join our team of passionate professionals and be part of an innovative company that values growth, learning, and excellence. We offer exciting opportunities across various domains and provide a dynamic work environment.
            </p>
          </section>

          {/* Current Openings */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-gray-500">Department:</span>
                      <span className="ml-2">{job.department}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <span className="ml-2">{job.location}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Type:</span>
                      <span className="ml-2">{job.type}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Experience:</span>
                      <span className="ml-2">{job.experience}</span>
                    </div>
                  </div>
                  <Link
                    to={`/careers/apply/${index}`}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Why Join Us */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Why Join Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
                <p className="text-gray-600">
                  We provide continuous learning and development opportunities to help you grow professionally.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Work Culture</h3>
                <p className="text-gray-600">
                  Enjoy a collaborative and innovative work environment that values your ideas and contributions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Benefits</h3>
                <p className="text-gray-600">
                  Competitive salary, health insurance, and other benefits to support your well-being.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Work-Life Balance</h3>
                <p className="text-gray-600">
                  We understand the importance of maintaining a healthy work-life balance.
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers; 