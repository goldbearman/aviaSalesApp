import { Col, Container, Row } from "react-bootstrap";

import React from 'react';
import './flight.scss';

const Flight = () => {

  return (
    <Container className="flight-container">
      <Row>
        <Col className="price">13 400 P</Col>
        <Col className="airline">
          <img src="../pictures/sslogo.png" alt="airline"/>
        </Col>
      </Row>
      <Row>
        <Col className="flight-map">
          <div>Mow-HKT</div>
          <div className="information">10:45-08:00</div>
        </Col>
        <Col className="travel-time">
          <div>В пути</div>
          <div className="information">21ч 15м</div>
        </Col>
        <Col className="transfers">
          <div>2 пересадки</div>
          <div className="information">HKG,JNB</div>
        </Col>
      </Row>
      <Row>
        <Col className="flight-map">
          <div>Mow-HKT</div>
          <div className="information">10:45-08:00</div>
        </Col>
        <Col className="travel-time">
          <div>В пути</div>
          <div className="information">21ч 15м</div>
        </Col>
        <Col className="transfers">
          <div>2 пересадки</div>
          <div className="information">HKG,JNB</div>
        </Col>
      </Row>
    </Container>
  )
}

export default Flight;