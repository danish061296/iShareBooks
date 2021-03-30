import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialFacebook,
} from 'react-icons/ti';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <Navbar
        className="footer"
        color=""
        dark
        style={{ height: '300px', background: '#18504c' }}
      >
        <div className="Fcontent">
          <div className="fcontent">
            <section className="left">
              About
              <section>Privacy</section>
              <section>FAQ</section>
              <section>Contact:</section>
            </section>
            <section className="center">
              Social
              <section>
                <TiSocialTwitter circle="true" />

                <TiSocialLinkedin />

                <TiSocialFacebook />
              </section>
            </section>
          </div>

          <div className="copyright">
            <h7>Terms of Sale</h7>
            <h7>Terms of Use</h7>

            <p>© 2021 Copyright iSHARE INC</p>
          </div>
        </div>
        <Button
          variant="success upward__btn"
          onClick={() => scroll.scrollToTop()}
        >
          <ArrowUpwardIcon />
        </Button>
      </Navbar>
    </div>
  );
};

export default Footer;
