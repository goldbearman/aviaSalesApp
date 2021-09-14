import React, { useEffect } from "react";

import "./app.scss";
import Header from "../header/header";
import FilterList from "../filter-list/filter-list";
import MainContainer from "../main-container/main-container";
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { connect } from "react-redux";
import { fetchCustomers } from "../redux/asyncAction";
import AviasalesService from "../../services/aviasales-service";


const App = ({counter, onFilter}) => {

  const aviaSalesService = new AviasalesService();

  useEffect(() => {
    aviaSalesService
      .getId().then(idKey => {
      onFilter(idKey);
    });
  }, []);

  if (counter.stop) {
    counter.progressBar = 100;
  }

  return (
    <div className="air-container">
      <Header className="header"></Header>
      <Container className="content">
        {!counter.stop && <ProgressBar className="progressBarLocation" animated now={counter.progressBar}/>}
        <Row>
          <Col md={4}>
            <FilterList/>
          </Col>
          <Col md={8}>
            <MainContainer/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    onFilter: (idKey) => dispatch(fetchCustomers(idKey))
  }
}
export default connect(mapStateToProps, mapDispathToProps)(App);


