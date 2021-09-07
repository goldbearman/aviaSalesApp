import React, { Component, useEffect } from "react";

import "./app.scss";
import Header from "../header/header";
import FilterList from "../filter-list/filter-list";
import MainContainer from "../main-container/main-container";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { fetchCustomers } from "../redux/asyncAction";

const App = ({onFilter}) => {

  useEffect(() => {
    console.log("useEffect");
    onFilter();
  }, []);

  return (
    <div className="air-container">
      <Header className="header"></Header>
      <Container className="content">
        <Row>
          <Col md={4}>
            <FilterList/>
          </Col>
          <Col md={8}>
            <MainContainer/>
          </Col>
        </Row>
        {/*<Button as="input" type="button" value="Input" />*/}
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
    onFilter: () => dispatch(fetchCustomers())
  }
}
export default connect(mapStateToProps, mapDispathToProps)(App);


