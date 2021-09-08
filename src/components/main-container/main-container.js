import React, { Component } from "react";

import FilterButtons from "./filter-buttons";
import FlightList from "../flight-list/flight-list";
import scss from "./main-container.module.scss";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../redux/actions";


const MainContainer = ({fiveMoreTickets}) => {

  console.log(scss);

  return (
    <div className={scss.container}>
      <FilterButtons/>
      <FlightList />
      <Button className={`${scss.btn} ${scss.btnFiveTickets}`} onClick={fiveMoreTickets} size="lg">Показать еще 5 билетов!</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps, actions)(MainContainer);

