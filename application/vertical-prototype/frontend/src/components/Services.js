import React from 'react';
//import styled from 'styled-components';
import { Row, Container, Col, Card, Button } from 'react-bootstrap';
import bookImage from './book1.jpg';
import './Services.css';
// import 'tachyons';
// import ServicesSell from './ServiceSell';
// import ServiceTrade from './ServiceTrade';
// import ServiceBuy from './ServiceBuy';
// import ServiceFree from './ServiceFree';

const Services = () => {
  return (
    <div className="services" id="services">
      <Container fluid="l" className="services__container">
        <Row style={{ width: '100%' }}>
          <Col>
            <Card
              className="services__card"
              style={{
                width: '100%',
                height: '80%',
                borderRadius: '0px',
              }}
            >
              <Card.Img
                className="services__image"
                variant="top"
                src={bookImage}
                style={{
                  height: '90%',
                  width: '100%',
                }}
              />
              <p className="services__description">Buy Books From Us.</p>
              <Card.Body>
                <Button variant="primary services__btn">Buy Books</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="services__card"
              style={{
                width: '100%',
                height: '80%',
                borderRadius: '0px',
              }}
            >
              <Card.Img
                className="services__image"
                variant="top"
                src={bookImage}
                style={{ height: '90%', width: '100%' }}
              />
              <p className="services__description">Trade Books From Us.</p>
              <Card.Body>
                <Button variant="primary services__btn">Trade Books</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Row style={{ width: '50%', marginTop: '0px' }}>
          <Col>
            <Card
              style={{
                width: '100%',
                height: '80%',
                borderRadius: '0px',
                backgroundColor: '#2E3236',
              }}
            >
              <Card.Img
                variant="top"
                src={bookImage}
                style={{ height: '90%', width: '100%' }}
              />
              <Card.Body>
                <Button variant="primary">Free Books</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </div>

    // <div className="rowC">
    //   <h1> Services </h1>
    //   <div className="bg-light-green dib br3 pa ma2 grow bw2 shadow-5 row  ">
    //     <div>
    //       <ServiceBuy />
    //     </div>

    //     <div>
    //       <ServiceTrade />
    //     </div>

    //     <div>
    //       <ServiceFree />
    //     </div>
    //   </div>
    // </div>
  );
};
export default Services;
