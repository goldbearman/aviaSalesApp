import React, { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import scss from './main-container.module.scss';
import * as actions from '../redux/actions';

function FilterButtons({ checkCheapest, checkFastest }) {
  // const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'САМЫЙ ДЕШЁВЫЙ', value: '1' },
    { name: 'САМЫЙ БЫСТРЫЙ', value: '2' },
    // {name: 'ОПТИМАЛЬНЫЙ', value: '3'},
  ];

  return (
    <>
      <ButtonGroup className={`mb-2 ${scss.btnGroup}`}>
        {radios.map((radio, idx) => (
          <ToggleButton
            onClick={radio.value === '1' ? () => checkCheapest() : () => checkFastest()}
            className={`${scss.btn} ${scss.btnBlueColor}`}
            /* eslint-disable-next-line react/no-array-index-key */
            key={idx}
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
