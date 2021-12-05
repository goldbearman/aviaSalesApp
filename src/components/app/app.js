import React, { useEffect } from 'react';
// OTHER LIBRARIES
import cn from 'classnames';
import PropTypes from 'prop-types';
// REACT-BOOTSTRAP
import {
  ProgressBar, Container, Row, Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// REDUX
import { connect } from 'react-redux';
import { fetchCustomers } from '../../redux/asyncAction';
// CUSTOM COMPONENTS
import Header from '../header/header';
import FilterList from '../filter-list/filter-list';
import MainContainer from '../main-container/main-container';

import classes from './app.module.scss';

const App = ({ counter, onFilter }) => {
  useEffect(() => {
    onFilter();
  }, []);

  if (counter.stop) {
    const arr = counter;
    arr.progressBar = 100;
  }

  return (
    <div className={cn(classes.airContainer)}>
      <Header className="header" />
      <Container className={cn(classes.content)}>
        {!counter.stop
        && (
        <ProgressBar
          className={classes.progressBarLocation}
          animated
          now={counter.progressBar}
        />
        )}
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
