import React from 'react'
import Flight from "../flight/flight";

const FlightList = () => {

  const arrMovies = [1, 2, 3, 4, 5];

  const createList = () => {
    const elements = arrMovies.map((movie) => {
      return (
          <Flight
            // key={movie.id}
            // movie={movie}
            // guestSessionId={guestSessionId}
            // allGenres={this.props.allGenres}
            // setChangeRateArr={setChangeRateArr}
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

export default FlightList;