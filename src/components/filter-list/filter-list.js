import React from "react";
import classes from "./filter-list.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../redux/actions";


const FilterList = ({counter, checkOnFirst, checkOnSecond, checkOnFifth, checkOnThird, checkOnFourth}) => {

  const {checkBoxes} = counter;
  console.log(checkBoxes);

  return (
    <div className="filter-list">
      <h1>количество пересадок</h1>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox" checked={checkBoxes[10]} onChange={checkOnFirst} defaultChecked={checkBoxes.first}/>
          <span className="check__box"></span>
          Все</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox" checked={checkBoxes[0]} onChange={checkOnSecond}
                 defaultChecked={checkBoxes.second}/>
          <span className="check__box"></span>
          Без пересадок</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox" checked={checkBoxes[1]} onChange={checkOnThird}
                 defaultChecked={checkBoxes.third}/>
          <span className="check__box"></span>
          1 пересадка</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox" checked={checkBoxes[2]} onChange={checkOnFourth}
                 defaultChecked={checkBoxes.fourth}/>
          <span className="check__box"></span>
          2 пересадки</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox" checked={checkBoxes[3]} onChange={checkOnFifth}
                 defaultChecked={checkBoxes.fifth}/>
          <span className="check__box"></span>
          3 пересадки</label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps, actions)(FilterList);