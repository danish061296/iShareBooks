import React from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Services from '../components/Services';
import Trending from '../components/Trending';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navigation />
      <About />
      <Trending />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
