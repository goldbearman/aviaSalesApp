import React, { Component } from "react";

import "./app.scss";
import Header from "../header/header";
import FilterList from "../filter-list/filter-list";
import MainContainer from "../main-container/main-container";
import { Container, Row, Col, Button } from 'react-bootstrap';

const App = () => {
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

export default App;
