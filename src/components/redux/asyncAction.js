import AviasalesService from "../../services/aviasales-service";
import {checkCheapest} from "./actions";

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
        dispatch(checkCheapest(arr.tickets))
      })
      .catch(onErrorRate );
  }
}