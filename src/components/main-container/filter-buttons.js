import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import scss from "./main-container.module.scss";

import { connect } from "react-redux";
import * as actions from "../redux/actions";


function FilterButtons({checkCheapest}) {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  console.log(radioValue);
  if (radioValue === '1') {
    checkCheapest();
  }
  if (radioValue === '2') {

  }

  const radios = [
    {name: 'САМЫЙ ДЕШОВЫЙ', value: '1'},
    {name: 'САМЫЙ БЫСТРЫЙ', value: '2'},
    {name: 'ОПТИМАЛЬНЫЙ', value: '3'},
  ];

  return (
    <>
      <ButtonGroup className={`mb-2 ${scss.btnGroup}`}>
        {radios.map((radio, idx) => (
          <ToggleButton
            className={`${scss.btn} ${scss.btnBlueColor}`}
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
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

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps, actions)(FilterButtons);

// export default FilterButtons;