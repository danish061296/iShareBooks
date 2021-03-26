import React from "react";
//import styled from 'styled-components';
import {Navbar, Container, NavbarBrand} from "react-bootstrap";
import "./Services.css";
import "tachyons";
import ServicesSell from "./ServiceSell";
import ServiceTrade from "./ServiceTrade";
import ServiceBuy from "./ServiceBuy";
import ServiceFree from "./ServiceFree";

const Services = () => {
  return (
    // <div className="services" id="services">
    //   Services
    // </div>

    <div className="rowC">
      <h1> Services </h1>
      <div className="bg-light-green dib br3 pa ma2 grow bw2 shadow-5 row  ">
        <div>
          <ServiceBuy />
        </div>
        <div>
          <ServicesSell />
        </div>

        <div>
          <ServiceTrade />
        </div>

        <div>
          <ServiceFree />
        </div>
      </div>
    </div>
  );
};
export default Services;
