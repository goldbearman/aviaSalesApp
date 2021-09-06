import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./components/redux/reducer";
import App from "./components/app/app";


const loggerMiddleware = store => next => action => {
  const result = next(action);
  console.log("Midl", store.getState());
  return result;
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root"));

