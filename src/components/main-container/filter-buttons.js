import React, { useState } from 'react';
// OTHER LIBRARIES
import PropTypes from 'prop-types';
// REACT-BOOTSTRAP
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
// REDUX
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

import scss from './main-container.module.scss';

function FilterButtons({ checkCheapest, checkFastest }) {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { id: 100, name: 'САМЫЙ ДЕШЁВЫЙ', value: '1' },
    { id: 101, name: 'САМЫЙ БЫСТРЫЙ', value: '2' },
  ];

  return (
    <>
      <ButtonGroup className={`mb-2 ${scss.btnGroup}`}>
        {radios.map((radio, idx) => (
          <ToggleButton
            onClick={radio.value === '1' ? () => checkCheapest() : () => checkFastest()}
            className={`${scss.btn} ${scss.btnBlueColor}`}
            key={radio.id}
            id={`radio-${idx}`}
            type="radio"
            variant="outline-primary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

const mapStateToProps = (state) => ({
  counter: state,
});

FilterButtons.propTypes = {
  checkCheapest: PropTypes.func,
  checkFastest: PropTypes.func,
};
FilterButtons.defaultProps = {
  checkCheapest: () => {
  },
  checkFastest: () => {
  },
};

export default connect(mapStateToProps, actions)(FilterButtons);
