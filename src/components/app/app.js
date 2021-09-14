import React, { useEffect } from "react";

import Header from "../header/header";
import FilterList from "../filter-list/filter-list";
import MainContainer from "../main-container/main-container";
import { ProgressBar } from 'react-bootstrap';
import { connect } from "react-redux";
import { fetchCustomers } from "../redux/asyncAction";
import AviasalesService from "../../services/aviasales-service";
import classes from "./app.module.scss";
import globalStyle from '../../assets/global-style/bootstrap.css';
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.css';


const App = ({counter, onFilter}) => {

  console.log(classes);

  const aviaSalesService = new AviasalesService();

  useEffect(() => {
    aviaSalesService
      .getId().then(idKey => {
      onFilter(idKey);
    });
  }, []);

  if (counter.stop) {
    counter.progressBar = 100;
  }

  return (
    <div className={cn(classes.airContainer)}>
      <Header className="header"></Header>
      <div className={cn(globalStyle.container,classes.content)}>
        {!counter.stop && <ProgressBar className={classes.progressBarLocation} animated now={counter.progressBar}/>}
        <div className={globalStyle.row}>
          <div className={globalStyle.col4} >
            <FilterList/>
          </div>
          <div className={globalStyle.col8} >
            <MainContainer/>
          </div>
        </div>
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
    onFilter: (idKey) => dispatch(fetchCustomers(idKey))
  }
}
export default connect(mapStateToProps, mapDispathToProps)(App);


