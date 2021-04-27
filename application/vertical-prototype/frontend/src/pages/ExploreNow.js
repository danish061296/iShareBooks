import React from 'react';
import './Explore.css';
import Nav from '../components/Navigation';
import Footer from '../components/Footer';
import Search from '../components/Search';
import Sidebar from '../components/Sidebar';

function ExploreNow() {
  return (
    <div>
      <Nav />
      <Search />

      <Sidebar />

      <div className="footer__div">
        <Footer />
      </div>
    </div>
  );
}

export default ExploreNow;
