import React, { Component } from "react";

import FilterButtons from "./filter-buttons";
import FlightList from "../flight-list/flight-list";
import scss from "./main-container.module.scss";
import { Button } from "react-bootstrap";

// import { createStore, bindActionCreators } from "redux";
// import reducer from "./reducer";
// import * as actions from "./actions";




const MainContainer = () => {

  // const store = createStore(reducer);
  // const {dispatch} = store;
  // const {checkOnFirst, checkOnSecond, checkOnThird, checkOnFifth, checkOnFourth} = bindActionCreators(actions, dispatch);



  console.log(scss);

  return (
    <div className={scss.container}>
      <FilterButtons/>
      <FlightList />
      <Button className={`${scss.btn} ${scss.btnFiveTickets}`} variant="primary" size="lg">Показать еще 5 билетов!</Button>
    </div>
  );
};

export default MainContainer;