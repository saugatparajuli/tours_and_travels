import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import myPhoto from "../Photo/logo.jpg"; // Ensure this path is correct

const Navbar = () => {
  const navigate = useNavigate(); // ✅ Ensure this is inside the component

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-gray-500 text-white py-2 px-6 flex justify-between items-center text-sm">
        <div className="flex space-x-6">
          <span>📞 +123 456 7890</span>
          <span className="text-sm text-gray-300">Location: XYZ City</span>
          <span className="text-sm text-gray-300">Current Time: {new Date().toLocaleTimeString()}</span>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
        <motion.button 
          onClick={() => navigate("/login")}
          whileHover={{ scale: 1.1 }}
          className="bg-green-500 text-white px-2 py-2 rounded-md hover:bg-blue-500 transition"
        >
          Login
        </motion.button>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white flex justify-between items-center py-4 px-6 shadow-md">
        <div className="text-2xl font-bold">
          <img src={myPhoto} alt="logo" className="h-8 object-contain p-2 m-2" />
        </div>
        <ul className="flex space-x-8 text-lg font-medium">
          <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-600">About Us</Link></li>
          <li><Link to="/tour" className="hover:text-gray-600">Tour</Link></li>
          <li><Link to="/blogs" className="hover:text-gray-600">Blogs</Link></li>
          <li><Link to="/shop" className="hover:text-gray-600">Shop</Link></li>
          <li><Link to="/contact" className="hover:text-gray-600">Contact</Link></li>
        </ul>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition"
        >
          Book
        </motion.button>
      </nav>
    </>
  );
};

export default Navbar;
