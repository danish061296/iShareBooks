import React from 'react';
import { Navbar, Container, NavbarBrand } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Navbar color="" dark style={{ height: '300px', background: '#18504c' }}>
        <Container>
          <NavbarBrand style={{ color: 'white' }}>Footer</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
