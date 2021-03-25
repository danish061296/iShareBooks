import React from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Services from '../components/Services';
import Trending from '../components/Trending';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import AppFaq from '../components/AppFaq';

const Home = () => {
  return (
    <div>
      <Navigation />
      <About />
      <Trending />
      <Services />
      <Faq />
      <AppFaq />
      <Footer />
    </div>
  );
};

export default Home;
