import React, { useState } from 'react';
import { Link as LinkR } from 'react-router-dom';
import { Navbar, Nav, Button, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navigation.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navigation = () => {
  const [logo, setLogo] = useState(false);

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
          <Nav className="ml-auto ">
            <Link
              className="nav__link"
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
              style={{
                color: '#D3D3D3',
                textDecoration: 'none',
                marginRight: '20px',
                cursor: 'pointer',
              }}
              to="trending"
              smooth={true}
              duration={1000}
            >
              FAQ
            </Link>
            <Link
              className="nav__link"
              style={{
                color: '#D3D3D3',
                textDecoration: 'none',
                marginRight: '20px',
                cursor: 'pointer',
              }}
              to="#login"
            >
              Log In
            </Link>
          </Nav>

          <Button variant="outline-success signup__btn" href="/registration">
            Sign Up
          </Button>
        </Navbar>
      )}
      {logo && (
        <Navbar bg="" variant="dark" className="navbar__first" sticky="top">
          <NavbarBrand className="navbar__title">
            <LinkR
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
              style={{
                color: '#D3D3D3',
                textDecoration: 'none',
                marginRight: '20px',
                cursor: 'pointer',
              }}
              to="trending"
              smooth={true}
              duration={1000}
            >
              FAQ
            </Link>
            <Link
              className="nav__link"
              style={{
                color: '#D3D3D3',
                textDecoration: 'none',
                marginRight: '20px',
                cursor: 'pointer',
              }}
              to="#login"
            >
              Log In
            </Link>
          </Nav>

          <Button variant="outline-success signup__btn" href="/registration">
            Sign Up
          </Button>
        </Navbar>
      )}

      <div className="navbar__second">
        <h1 className="navbar__logo" href="/home">
          iShareBooks
          {/* <Link className="navbar__logoLink" to="#home">
            iShareBooks
          </Link> */}
          {/* <a href="/">iShareBooks</a> */}
        </h1>
        <div className="navbar__icons">
          <ShoppingCartIcon className="cart" />
          <p>0</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
