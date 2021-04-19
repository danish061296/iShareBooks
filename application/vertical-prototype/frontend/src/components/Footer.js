import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialFacebook,
} from 'react-icons/ti';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './Footer.css';
import  {Link}  from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <Navbar
        className="footer"
        color=""
        dark
        style={{ height: '400px', background: '#18504c' }}
      >
        <div className="Fcontent">
          <div className="fcontent">
            <div>
              <Link to="/about" >
              About
              </Link>
            </div>
            

            <li>  <Link to="/TermsOfUse" > Terms of Use </Link>  </li>


            <section className="center">
              Social
              <section>
               <a  href="https://twitter.com/home"> <TiSocialTwitter circle="true"  /></a>

               <a href="https://LinkedIn.com"> <TiSocialLinkedin /> </a>

               <a href="https://facebook.com"> <TiSocialFacebook /> </a>
              </section>
            </section>
          </div>

          <div className="copyright">
            <Link to="/TermsOfSale" > Terms of Sale </Link> 
            <Link to="/TermsOfUse" > Terms of Use </Link> 

            <p>© 2021 Copyright iSHARE INC</p>
          </div>
        </div>
        <Button
          variant="success upward__btn"
          onClick={() => scroll.scrollToTop()}
        >
          <Tippy content="Go to top" placement="bottom">
            <ArrowUpwardIcon />
          </Tippy>
        </Button>
      </Navbar>
    </div>
  );
};

export default Footer;
