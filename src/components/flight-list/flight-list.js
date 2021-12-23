import React from 'react';
// OTHER LIBRARIES

// REDUX
import { useSelector } from 'react-redux';
// CUSTOM COMPONENTS
import Flight from '../flight/flight';

const FlightList = () => {
  const {
    allTickets, numberFlight, checkBoxes, button,
  } = useSelector((state) => state);
  let keyFlightList = 100;

  // eslint-disable-next-line no-console
  console.log(allTickets);

  const fillFilterArr = (allTicketsArr, checkBoxesArr) => {
    const tickets = [...allTicketsArr];
    let concatTickets = [];
    // eslint-disable-next-line no-console
    console.log(tickets);
    // eslint-disable-next-line no-console
    console.log(checkBoxesArr);
    let count = -2;
    Object.keys(checkBoxesArr).forEach((key) => {
      count++;
      // eslint-disable-next-line no-console
      console.log(key, count);
      if (checkBoxesArr[key]) {
        concatTickets = concatTickets.concat(
          tickets.filter((item) => item.segments[0].stops.length === count),
        );
      }
    });
    return concatTickets;
  };

  const sortTemplate = (arr, parameter1) => {
    arr.sort((a, b) => a[parameter1] - b[parameter1]);
    return arr;
  };

  const sortFastest = (arr) => {
    arr.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
    return arr;
  };

  const sortArr = (arr, buttonNumber) => {
    let tickets = [...arr];

    if (buttonNumber === 1) tickets = sortTemplate(tickets, 'price');
    else tickets = sortFastest(tickets);

    // eslint-disable-next-line max-len
    // else if (buttonNumber === 1) { sortTemplate(arr.allTickets, 'price'); } else sortFastest(arr.allTickets);
    return tickets;
  };

  const createList = () => {
    const elements = sortArr(fillFilterArr(allTickets, checkBoxes), button)
      .slice(0, numberFlight)
      .map((ticket) => (
        <Flight
          item={ticket}
          key={keyFlightList++}
        />
      ));
    return elements;
  };

  return (
    createList()
  );
};

export default FlightList;
