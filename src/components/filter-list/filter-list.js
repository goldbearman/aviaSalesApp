import React from "react";
import classes from "./filter-list.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../redux/actions";



const FilterList = ({counter,onCheck}) => {

  const {checkBoxes} = counter;

  return (
    <div className="filter-list">
      <h1>количество пересадок</h1>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox" checked={checkBoxes[10]} onChange={()=>onCheck(10)}
                 defaultChecked={checkBoxes[10]} disabled={!counter.stop}/>
          <span className="check__box"></span>
          Все</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox" checked={checkBoxes[0]} onChange={()=>onCheck(0)}
                 defaultChecked={checkBoxes[0]} disabled={!counter.stop}/>
          <span className="check__box"></span>
          Без пересадок</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox" checked={checkBoxes[1]} onChange={()=>onCheck(1)}
                 defaultChecked={checkBoxes[1]} disabled={!counter.stop}/>
          <span className="check__box"></span>
          1 пересадка</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox" checked={checkBoxes[2]} onChange={()=>onCheck(2)}
                 defaultChecked={checkBoxes[2]} disabled={!counter.stop}/>
          <span className="check__box"></span>
          2 пересадки</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox" checked={checkBoxes[3]} onChange={()=>onCheck(3)}
                 defaultChecked={checkBoxes[3]} disabled={!counter.stop}/>
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

const mapDispathToProps = (dispatch) => {
  return {
    onCheck: (idKey) => dispatch(actions.onCheckBox(idKey))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(FilterList);