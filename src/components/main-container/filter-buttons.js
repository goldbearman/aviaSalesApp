import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import scss from "./main-container.module.scss";

function FilterButtons() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  console.log(scss);

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

export default FilterButtons;