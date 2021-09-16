import React, { useEffect } from 'react';

import {
  ProgressBar, Container, Row, Col,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Header from '../header/header';
import FilterList from '../filter-list/filter-list';
import MainContainer from '../main-container/main-container';
import { fetchCustomers } from '../redux/asyncAction';
// import AviasalesService from '../../services/aviasales-service';
import classes from './app.module.scss';
import 'bootstrap/dist/css/bootstrap.css';

const App = ({ counter, onFilter }) => {
  // const aviaSalesService = new AviasalesService();

  useEffect(() => {
    onFilter();
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

const mapDispathToProps = (dispatch) => ({
  onFilter: () => dispatch(fetchCustomers()),
});

App.propTypes = {
  counter: PropTypes.shape({
    stop: PropTypes.bool,
    progressBar: PropTypes.number,
  }),
  onFilter: PropTypes.func,
};
App.defaultProps = {
  counter: {
    stop: false,
    progressBar: 0,
  },
  onFilter: () => {},
};

const mapStateToProps = (state) => ({
  counter: state,
});

export default connect(mapStateToProps, mapDispathToProps)(App);
