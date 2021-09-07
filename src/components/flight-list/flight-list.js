import React from 'react'
import Flight from "../flight/flight";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

const FlightList = ({counter}) => {

  const arrMovies = counter.allFilms;

  const createList = () => {

    const elements = arrMovies.splice(0,6).map((ticket) => {
      console.log(ticket);
      return (
          <Flight item = {ticket}
          />
      );
    });
    return elements;
  };
  console.log(createList());

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
