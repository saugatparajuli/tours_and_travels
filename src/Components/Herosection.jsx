import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import myphoto1 from "../Photo/about.jpg";
import myphoto2 from "../Photo/mountain.jpg";
import myPhoto3 from "../Photo/hero.jpg";

const images = [myphoto1, myphoto2, myPhoto3];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative text-white text-center py-20 px-4 overflow-hidden">
      {/* Background Image with Dissolve Animation */}
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        />
      </AnimatePresence>

      {/* Slide Buttons */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-600"
      >
        ◀
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-600"
      >
        ▶
      </button>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="md:w-1/2 text-left space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Providing Quality <span className="text-yellow-300">Medical Care</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Compassionate doctors and advanced facilities dedicated to your health.
          </p>
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="mt-6 bg-yellow-400 text-blue-800 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition md:self-end"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
