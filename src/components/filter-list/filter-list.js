import React from "react";
import classes from "./filter-list.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../redux/actions";


const FilterList = ({counter, checkOnFirst, checkOnSecond, checkOnFifth, checkOnThird, checkOnFourth}) => {

  console.log(counter);

  return (
    <div className="filter-list">
      <h1>количество пересадок</h1>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox" checked={counter.first} onChange={checkOnFirst} defaultChecked={counter.first}/>
          <span className="check__box"></span>
          Все</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox" checked={counter.second} onChange={checkOnSecond}
                 defaultChecked={counter.second}/>
          <span className="check__box"></span>
          Без пересадок</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox" checked={counter.third} onChange={checkOnThird}
                 defaultChecked={counter.third}/>
          <span className="check__box"></span>
          1 пересадка</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox" checked={counter.fourth} onChange={checkOnFourth}
                 defaultChecked={counter.fourth}/>
          <span className="check__box"></span>
          2 пересадки</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox" checked={counter.fifth} onChange={checkOnFifth}
                 defaultChecked={counter.fifth}/>
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