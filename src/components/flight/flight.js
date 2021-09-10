import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './flight.scss';

import { format } from 'date-fns'

const Flight = ({item}) => {

  const {price, carrier, segments: [one, two]} = item;

  console.log(one.duration);

  const travelTime = (date) => {
    const dateNew = new Date(0, 0, 0, 0, 0, 0);
    dateNew.setMinutes(date);
    return format(dateNew, "H'ч' m'м'");
  };

  const transfer = {
    0: "без пересадок",
    1: "1 пересадка",
    2: "2 пересадки",
    3: "3 пересадки",
    4: "4 пересадки",
  };

  // let timeStart = '2021-03-30T06:14:00.000Z';
  const timeStartFinish = (date, duration) => {
    let newTime = date.replace('.000Z', '+00:00');
    let timeStart = new Date(newTime);
    let timeFinish = timeStart.setMinutes(timeStart.getMinutes() + duration);
    return `${format(new Date(newTime), "HH:mm")}-${format(new Date(timeFinish), "HH:mm")}`
  };

  let poster;
  // eslint-disable-next-line camelcase
  if (carrier) {
    // eslint-disable-next-line camelcase
    poster = `https://pics.avs.io/99/36/${carrier}.png`;
  }
  // else poster = icon;

  return (
    <Container className="flight-container">
      <Row>
        <Col className="price">{`${price} P`}</Col>
        <Col className="airline airline-position">
          <img className="card__poster" src={poster} alt="carrier" />
        </Col>
      </Row>
      <Row>
        <Col className="flight-map">
          <div>{`${one.origin}-${one.destination}`}</div>
          <div className="information">{timeStartFinish(one.date, one.duration)}</div>
        </Col>
        <Col className="travel-time">
          <div>В пути</div>
          <div className="information">{travelTime(one.duration)}</div>
        </Col>
        <Col className="transfers">
          <div>{transfer[one.stops.length]}</div>
          <div className="information">{one.stops.join(",")}</div>
        </Col>
      </Row>

      <Row>
        <Col className="flight-map">
          <div>{`${two.origin}-${two.destination}`}</div>
          <div className="information">{timeStartFinish(two.date, two.duration)}</div>
        </Col>
        <Col className="travel-time">
          <div>В пути</div>
          <div className="information">{travelTime(two.duration)}</div>
        </Col>
        <Col className="transfers">
          <div>{transfer[two.stops.length]}</div>
          <div className="information">{two.stops.join(",")}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default Flight;