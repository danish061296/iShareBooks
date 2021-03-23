import React from 'react';
import { Navbar, Container, NavbarBrand } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
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
        <Container>
          <NavbarBrand style={{ color: 'white' }}>Footer</NavbarBrand>
        </Container>
        <Button variant="success upward__btn">
          <ArrowUpwardIcon />
        </Button>
      </Navbar>
    </div>
  );
};

export default Footer;
