import React from 'react'
import Flight from "../flight/flight";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

const FlightList = ({counter}) => {
  let key = 100;
  const createList = () => {

    const elements = counter.filterArr.slice(0, counter.numberFlight).map((ticket) => {
      return (
        <Flight item={ticket} key={key++}
        />
      );
    });
    return elements;
  };

  return (
    createList()
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps, actions)(FlightList);
