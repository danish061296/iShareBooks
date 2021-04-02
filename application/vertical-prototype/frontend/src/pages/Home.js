import React from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Services from '../components/Services';
import Trending from '../components/Trending';
import Footer from '../components/Footer';
import AppFaq from '../components/AppFaq';

const Home = () => {
  return (
    <div>
      <Navigation />
      <About />
      <Trending />
      <Services />
      <AppFaq />
      <Footer />
    </div>
  );
};

export default Home;