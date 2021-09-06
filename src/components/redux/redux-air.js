import React from "react";
import FilterList from "../filter-list/filter-list";

import { createStore, bindActionCreators } from "redux";

import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);
const {dispatch} = store;

const {checkOnFirst, checkOnSecond, checkOnThird, checkOnFifth, checkOnFourth} = bindActionCreators(actions, dispatch);

const update = () => {

};

store.subscribe(update);



