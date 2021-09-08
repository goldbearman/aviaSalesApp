import React from 'react'
import Flight from "../flight/flight";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

const FlightList = ({counter}) => {

  const arrMovies = counter.allFilms;
  console.log(counter);

  const createList = () => {

    const elements = arrMovies.slice(0,5).map((ticket) => {
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
