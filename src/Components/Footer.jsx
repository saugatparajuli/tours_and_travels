import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm">
            We provide innovative tech solutions and educational services to empower learners and grow businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm">Vasudha IT & Educational Institute</p>
          <p className="text-sm">Email: info@vasudha.com</p>
          <p className="text-sm">Phone: +977-9800000000</p>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-400 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Vasudha IT & Educational Institute. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
