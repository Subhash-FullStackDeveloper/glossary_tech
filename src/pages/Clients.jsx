import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12">Our Clients</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Client logos will be added here */}
            {[1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12].map((index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center"
              >
                <div className="w-32 h-20 bg-gray-200 rounded flex items-center justify-center">
                  Logo {index}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <p className="text-gray-600 italic mb-4">
                  "Anytime we reach out to Glossary Soft Tech Pvt.Ltd, they are there for our outsourced HR needs. They started by meeting with us and asking us about what we were looking for and took the time to understand our processes and the culture of our company."
                </p>
                <div className="font-semibold">Amruth kathekar</div>
                <div className="text-gray-500">Deputy HR Manager (Polaris)</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <p className="text-gray-600 italic mb-4">
                  "We really like their style and type of communication and most importantly the HR expertise they bring to our company. Their team has been instrumental in helping us grow."
                </p>
                <div className="font-semibold">Client Name</div>
                <div className="text-gray-500">Position, Company</div>
              </motion.div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Clients; 