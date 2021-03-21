import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navigation.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import logo from '../logo.png';

const Navigation = () => {
  return (
    <>
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
            to="faq"
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
