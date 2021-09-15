import React, { useEffect } from 'react';

import {
  ProgressBar, Container, Row, Col,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import cn from 'classnames';
import PropTipes from 'prop-types';
import Header from '../header/header';
import FilterList from '../filter-list/filter-list';
import MainContainer from '../main-container/main-container';
import { fetchCustomers } from '../redux/asyncAction';
import AviasalesService from '../../services/aviasales-service';
import classes from './app.module.scss';
import 'bootstrap/dist/css/bootstrap.css';

const App = ({ counter, onFilter }) => {
  const aviaSalesService = new AviasalesService();

  useEffect(() => {
    aviaSalesService
      .getId().then((idKey) => {
        onFilter(idKey);
      });
  }, []);

  if (counter.stop) {
    const arr = counter;
    arr.progressBar = 100;
  }

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className={cn(classes.airContainer)}>
      <Header className="header" />
      <Container className={cn(classes.content)}>
        {/* eslint-disable-next-line max-len */}
        {!counter.stop && <ProgressBar className={classes.progressBarLocation} animated now={counter.progressBar} />}
        <Row>
          <Col md={4}>
            <FilterList />
          </Col>
          <Col md={8}>
            <MainContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state,
});

const mapDispathToProps = (dispatch) => ({
  onFilter: (idKey) => dispatch(fetchCustomers(idKey)),
});

App.propTypes = {
  counter: PropTipes.arrayOf(PropTipes.object),
  onFilter: PropTipes.func,
};
App.defaultProps = {
  counter: {},
  onFilter: () => {},
};

export default connect(mapStateToProps, mapDispathToProps)(App);
