import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import scss from "./main-container.module.scss";

import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { fetchCustomers } from "../redux/asyncAction";


function FilterButtons({checkCheapest, checkFastest}) {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    {name: 'САМЫЙ ДЕШЁВЫЙ', value: '1'},
    {name: 'САМЫЙ БЫСТРЫЙ', value: '2'},
    // {name: 'ОПТИМАЛЬНЫЙ', value: '3'},
  ];

  return (
    <>
      <ButtonGroup className={`mb-2 ${scss.btnGroup}`}>
        {radios.map((radio, idx) => (
          <ToggleButton
            onClick={radio.value === '1' ? () => checkCheapest() : () => checkFastest()}
            // onClick={radio.value === '1' ? ()=> console.log("111") : ()=> console.log("222") }
            // onClick={console.log(radio.value)}
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


