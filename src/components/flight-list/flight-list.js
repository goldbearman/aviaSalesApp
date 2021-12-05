import React from 'react';
// OTHER LIBRARIES
import PropTypes from 'prop-types';
// REDUX
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
// CUSTOM COMPONENTS
import Flight from '../flight/flight';

const FlightList = ({ counter }) => {
  let key = 100;
  const createList = () => {
    const elements = counter.filterArr.slice(0, counter.numberFlight).map((ticket) => (
      <Flight
        item={ticket}
        key={key++}
      />
    ));
    return elements;
  };

  return (
    createList()
  );
};

FlightList.propTypes = {
  counter: PropTypes.shape({
    filterArr: PropTypes.arrayOf(PropTypes.object),
    numberFlight: PropTypes.number,
  }),
  onFilter: PropTypes.func,
};
FlightList.defaultProps = {
  counter: {
    filterArr: [],
    numberFlight: 5,
  },
  onFilter: () => {},
};

const mapStateToProps = (state) => ({
  counter: state,
});

export default connect(mapStateToProps, actions)(FlightList);
