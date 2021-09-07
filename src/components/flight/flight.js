import { Col, Container, Row } from "react-bootstrap";

import React from 'react';
import './flight.scss';

const Flight = ({item}) => {
  console.log(item)
  const {price, carrier, segments: [one, two]} = item;
  // const [{oneDirection}, {twoDirection}] = segments;
  // console.log(origin1, destination1, date1, stops1, duration1);
  console.log(one.duration);

  return (
    <Container className="flight-container">
      <Row>
        <Col className="price">{`${price} P`}</Col>
        <Col className="airline">
          {carrier}
        </Col>
      </Row>

      <Row>
        <Col className="flight-map">
          <div>Mow-HKT</div>
          <div className="information">10:45-08:00</div>
        </Col>
        <Col className="travel-time">
          <div>В пути</div>
          <div className="information">{one.duration}</div>
        </Col>
        <Col className="transfers">
          <div>{one.stops.length}</div>
          <div className="information">{one.stops.join(",")}</div>
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