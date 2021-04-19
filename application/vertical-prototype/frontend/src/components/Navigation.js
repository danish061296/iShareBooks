import React, { useState, useEffect } from 'react';
import { Link as LinkR, useHistory } from 'react-router-dom';
import { Navbar, Nav, Button, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navigation.css';
import axios from 'axios';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsLoggedIn,
  setEmail,
  setUsername,
  setPassword,
} from '../redux/actions/userActions';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tippy from '@tippyjs/react';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'tippy.js/dist/tippy.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navigation = () => {
  const [logo, setLogo] = useState(false);
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.userReducer.cart);
  const userId = useSelector((state) => state.userReducer.userid);

  console.log(userId);

  const history = useHistory();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleSelect = (e) => {
    console.log(`The selected is ${e}`);

    if (e == 'profile') {
      axios.get(`http://localhost:3001/profile/${userId}`).then((response) => {
        dispatch(setEmail(response.data[0].email));
        dispatch(setUsername(response.data[0].name));
        console.log(response.data[0].name);

        console.log(response.data[0].name);
      });
      history.push(`/profile/${userId}`);
    } else if (e == 'logout') {
      if (isLoggedIn) {
        dispatch(setIsLoggedIn(false));
        dispatch(setUsername(''));
        dispatch(setEmail(''));
        dispatch(setPassword(''));
      }
      store.addNotification({
        title: '',
        message: 'You have succussfully logged out!',
        type: 'success',
        insert: 'top',
        container: 'top-center',
        dismiss: {
          duration: 2000,
          showIcon: true,
        },
      });

      history.push('/login');
    }
    console.log(e);
    // dispatch(setSearchType(e));
  };

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
          {/* <Button
            // className="sign__btn"
            variant="outline-success signup__btn"
            href="/"
          >
            Home
          </Button> */}
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

          <LinkR
            style={{
              color: 'white',
              textDecoration: 'none',

              cursor: 'pointer',
            }}
            to="/registration"
          >
            <Button variant="outline-success signup__btn">Sign Up</Button>
          </LinkR>
        </Navbar>
      )}
      {logo && (
        <div>
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

            <LinkR
              style={{
                color: 'white',
                textDecoration: 'none',

                cursor: 'pointer',
              }}
              to="/registration"
            >
              <Button variant="outline-success signup__btn">Sign Up</Button>
            </LinkR>
          </Navbar>
        </div>
      )}
      <div className="navbar__second">
        <ReactNotification />

        {/* <h1 className="navbar__logo" href="/home"> */}
        <div className="navbar__logo">
          <LinkR className="navbar__logoLink" to="/">
            <h1>iShareBooks</h1>
          </LinkR>
        </div>

        {/* </h1> */}

        <div className="navbar__icons">
          <LinkR className="cart__link" to="/viewlistings">
            <ShoppingCartIcon className="cart" />

            <p>{cart?.length}</p>
          </LinkR>
        </div>
        {isLoggedIn && (
          <div className="account__btn">
            <DropdownButton
              // className="dropdown__btn"
              variant=" dropdown__btn"
              alignRight
              title="Account"
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="profile">Profile</Dropdown.Item>
              <Dropdown.Item eventKey="logout">Logout</Dropdown.Item>
            </DropdownButton>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
