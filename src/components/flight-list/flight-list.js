import React from 'react'
import Flight from "../flight/flight";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

const FlightList = ({counter}) => {
  let key = 100;
  // let arrMovies = [];
  // counter.filterArr.length > 0 ? arrMovies = counter.filterArr : arrMovies = counter.allFilms;
  // console.log(counter.filterArr);

  const createList = () => {

    const elements = counter.filterArr.slice(0, counter.numberFlight).map((ticket) => {
      // console.log(ticket);

      return (
        <Flight item={ticket} key={key++}
        />
      );
    });
    return elements;
  };
  // console.log(createList());

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
