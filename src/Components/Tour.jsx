import React from "react";
import image from "../Photo/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="relative"
        >
          <img src={image} alt="about" className="rounded-lg shadow-lg" />
        </motion.div>

        {/* Right Section - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-blue-600 font-bold text-lg uppercase">About Us</h2>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
            Providing The Best <span className="text-blue-600">Medical Services</span>
          </h1>
          <p className="text-gray-600 leading-relaxed">
            We are committed to delivering world-class healthcare services with the best
            medical professionals and cutting-edge technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
              <p className="text-gray-600 mt-2">
                To offer top-notch healthcare services with compassion and innovation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
              <p className="text-gray-600 mt-2">
                To be a leader in healthcare excellence and patient satisfaction.
              </p>
            </div>
          </div>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;