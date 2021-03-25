import React from 'react';
import { Navbar, Container, NavbarBrand, Button } from 'react-bootstrap';
import './Services.css';
const Services = () => {
  return (
    // <div className="services" id="services">
    //   Services
    // </div>

    <div>
      <Navbar className="services" color="" dark style={{ height: '2000px' }}>
        <>
          <div className="services" id="services">
            <Container> Services</Container>
            <h1 onclick="BuyOrSellClick()"> Buy or Sell Books! </h1>

            <h3 className="BuyOrSell">
              {' '}
              We pride ourselves in being the world's largest textbook buyback
              price comparison tool. In addition to helping you get rid of your
              old textbooks, we also offer: Best Price Recommendations With one
              simple search we connect you to various companies buying used
              textbooks online. By comparing textbook buyback prices, we ensure
              you receive the best prices for your textbooks. Shipping is free
              and you're often paid the same day your book is received.{' '}
            </h3>

            <h1 onclick="TradeBook()"> Trade Your Books! </h1>

            <h3 className="font1">
              {' '}
              Trade Books with Our Online Book Swapping Club... It's easy: List
              books you'd like to swap with other club members. Once a book is
              requested, mail it to the club member. In return, you may choose
              from 1,153,440 available books! You pay postage for the books you
              send out; the books you receive come to you postage-paid. Books
              you request are yours to keep, or swap again!{' '}
            </h3>
            <h1 onclick="FreeBook()"> Free Books! </h1>

            <h3 className="font1">
              {' '}
              Give & receive: Every time you give someone a book , you earn a
              point and can get any book you want from anyone else at BookMooch.
              Once you've read a book, you can keep it forever or put it back
              into BookMooch for someone else, as you wish.{' '}
            </h3>
          </div>
        </>
      </Navbar>
    </div>
  );
};
export default Services;
