import React from "react";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialFacebook,
} from "react-icons/ti";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Navbar
        className="footer"
        color=""
        dark
        style={{ height: "300px", background: "#18504c" }}
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
                <a href="https://www.facebook.com/"> 
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&trk=login_reg_redirect">
                  <FaLinkedin />
                </a>
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
