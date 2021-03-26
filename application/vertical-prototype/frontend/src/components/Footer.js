import React from 'react';
import { Navbar, Container, NavbarBrand } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialFacebook,
} from 'react-icons/ti';
import { AiOutlineCopyright } from 'react-icons/ai';
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
        {/* <Container>
          <NavbarBrand style={{ color: 'white' }}>Footer</NavbarBrand>
        </Container> */}
        <div className="Fcontent">
          <div className="fcontent">
            <section className="left">
              About
              <section>Privacy</section>
              <section>FAQ</section>
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
            <AiOutlineCopyright />
            <h7>2021 Copyright iSHARE INC</h7>
          </div>
        </div>
        <Button variant="success upward__btn">
          <ArrowUpwardIcon />
        </Button>
      </Navbar>
    </div>
  );
};

export default Footer;
