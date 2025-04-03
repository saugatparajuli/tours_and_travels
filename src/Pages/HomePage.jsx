import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import Tour from '../Components/Tour';
import Footer from '../Components/Footer';


function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Tour />
      <Footer />

    </div>
  );
}

export default HomePage;
