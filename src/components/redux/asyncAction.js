import AviasalesService from "../../services/aviasales-service";
import {onInitialState} from "./actions";

const aviaSalesService = new AviasalesService();

const onErrorRate = () => {
  return {};
};

export const fetchCustomers = () => {
  return dispatch => {
    aviaSalesService
      .getResource()
      .then((arr) => {
        console.log(arr.tickets);
        dispatch(onInitialState(arr.tickets))
      })
      .catch(onErrorRate );
  }
}