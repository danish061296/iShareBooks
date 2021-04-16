import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

const Footer = () => {
  return (
    <div className="footer__container">
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
              <section>
                <Link className="privacy__link" to="/privacy">
                  Privacy
                </Link>
              </section>
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
          <Tippy content="Go to top" placement="bottom">
            <ArrowUpwardIcon />
          </Tippy>
        </Button>
      </Navbar>
    </div>
  );
};

export default Footer;
