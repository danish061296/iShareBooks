import React from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Services from '../components/Services';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navigation />
      <About />
      <Faq />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
