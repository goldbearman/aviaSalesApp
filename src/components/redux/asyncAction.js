import AviasalesService from "../../services/aviasales-service";
import {onInitialState} from "./actions";

const aviaSalesService = new AviasalesService();

const onErrorRate = () => {
  console.log("err");
};

export const fetchCustomers = () => {
  return dispatch => {
    aviaSalesService
      .getFlights()
      .then((arr) => {
        console.log(arr);
        dispatch(onInitialState({allFilms:arr.tickets,error:false}))
      })
      .catch(dispatch(onInitialState({allFilms:[],error:false,loading:false})));
  }
}