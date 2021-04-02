import React, { useState, useEffect } from 'react';
import { Link as LinkR } from 'react-router-dom';
import { Navbar, Nav, Button, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navigation.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navigation = () => {
  const [logo, setLogo] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const showLogo = () => {
    if (window.scrollY >= 70) {
      setLogo(true);
    } else {
      setLogo(false);
    }
  };

  window.addEventListener('scroll', showLogo);

  return (
    <>
      {!logo && (
        <Navbar bg="" variant="dark" className="navbar__first" sticky="top">
          <Button
            // className="sign__btn"
            variant="outline-success signup__btn"
            href="/"
          >
            Home
          </Button>

          <Nav className="ml-auto ">
            <LinkR
              className="nav__link"
              style={{
                color: '#D3D3D3',
                textDecoration: 'none',
                marginRight: '20px',
                cursor: 'pointer',
              }}
              to="/login"
            >
              Log In
            </LinkR>
          </Nav>

          <Button
            // className="sign__btn"
            variant="outline-success signup__btn"
            href="/registration"
          >
            Sign Up
          </Button>
        </Navbar>
      )}
      {logo && (
        <Navbar bg="" variant="dark" className="navbar__first" sticky="top">
          <NavbarBrand className="navbar__title">
            <LinkR
              className="title__link"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: 25,
              }}
              to="/"
            >
              iShareBooks
            </LinkR>
          </NavbarBrand>
          <Nav className="ml-auto ">
            <Link
              className="nav__link"
              data-aos="slide-down"
              style={{
                color: '#D3D3D3',
                textDecoration: 'none',
                marginRight: '20px',
                cursor: 'pointer',
              }}
              to="about"
              smooth={true}
              duration={1000}
            >
              About
            </Link>
            <Link
              className="nav__link"
              data-aos="slide-down"
              style={{
                color: '#D3D3D3',
                textDecoration: 'none',
                marginRight: '20px',
                cursor: 'pointer',
              }}
              to="services"
              smooth={true}
              duration={1000}
            >
              Services
            </Link>
            <Link
              className="nav__link"
              data-aos="slide-down"
              style={{
                color: '#D3D3D3',
                textDecoration: 'none',
                marginRight: '20px',
                cursor: 'pointer',
              }}
              to="faq"
              smooth={true}
              duration={1000}
            >
              FAQ
            </Link>
            <LinkR
              className="nav__link"
              style={{
                color: '#D3D3D3',
                textDecoration: 'none',
                marginRight: '20px',
                cursor: 'pointer',
              }}
              to="/login"
            >
              Log In
            </LinkR>
          </Nav>

          <Button variant="outline-success signup__btn" href="/registration">
            Sign Up
          </Button>
        </Navbar>
      )}

      <div className="navbar__second">
        <h1 className="navbar__logo" href="/home">
          <LinkR className="navbar__logoLink" to="/">
            iShareBooks
          </LinkR>
        </h1>
        <div className="navbar__icons">
          <Tippy content="Will be implemented in the future" placement="bottom">
            <ShoppingCartIcon className="cart" />
          </Tippy>

          <p>0</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
