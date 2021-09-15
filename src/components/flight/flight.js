import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import cn from 'classnames';
import classes from './flight.module.scss';
import globalStyle from '../../assets/global-style/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import { format } from 'date-fns';

const Flight = ({ item }) => {
  const { price, carrier, segments: [one, two] } = item;

  const travelTime = (date) => {
    const dateNew = new Date(0, 0, 0, 0, 0, 0);
    dateNew.setMinutes(date);
    return format(dateNew, "H'ч' m'м'");
  };

  const transfer = {
    0: 'без пересадок',
    1: '1 пересадка',
    2: '2 пересадки',
    3: '3 пересадки',
    4: '4 пересадки',
  };

  const timeStartFinish = (date, duration) => {
    const newTime = date.replace('.000Z', '+00:00');
    const timeStart = new Date(newTime);
    const timeFinish = timeStart.setMinutes(timeStart.getMinutes() + duration);
    return `${format(new Date(newTime), 'HH:mm')}-${format(new Date(timeFinish), 'HH:mm')}`;
  };

  let poster;
  // eslint-disable-next-line camelcase
  if (carrier) {
    // eslint-disable-next-line camelcase
    poster = `https://pics.avs.io/99/36/${carrier}.png`;
  }

  const lenghtPrice = price.toString().length;
  const startPrice = price.toString().slice(0, lenghtPrice - 3);
  const finishPrice = price.toString().slice(lenghtPrice - 4, lenghtPrice - 1);

  return (
    <Container className={cn(classes.flight_container, classes.travel_time)}>
      <Row className={classes.row}>
        <Col className={classes.price}>{`${startPrice.concat(` ${finishPrice}`)} P`}</Col>
        <Col className={cn(classes.airline, classes.airline_position)}>
          <img className={classes.card__poster} src={poster} alt="carrier" />
        </Col>
      </Row>
      <Row className={classes.row}>
        <Col className={classes.travel_time}>
          <div>{`${one.origin}-${one.destination}`}</div>
          <div className={classes.information}>{timeStartFinish(one.date, one.duration)}</div>
        </Col>
        <Col className={classes.travel_time}>
          <div>В пути</div>
          <div className={classes.information}>{travelTime(one.duration)}</div>
        </Col>
        <Col className={classes.travel_time}>
          <div>{transfer[one.stops.length]}</div>
          <div className={classes.information}>{one.stops.join(',')}</div>
        </Col>
      </Row>

      <Row className={classes.row}>
        <Col>
          <div>{`${two.origin}-${two.destination}`}</div>
          <div className={classes.information}>{timeStartFinish(two.date, two.duration)}</div>
        </Col>
        <Col className={classes.travel_time}>
          <div>В пути</div>
          <div className={classes.information}>{travelTime(two.duration)}</div>
        </Col>
        <Col className={classes.travel_time}>
          <div>{transfer[two.stops.length]}</div>
          <div className={classes.information}>{two.stops.join(',')}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Flight;
