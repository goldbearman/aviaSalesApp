import AviasalesService from "../../services/aviasales-service";
import { onInitialState } from "./actions";

const aviaSalesService = new AviasalesService();

const onErrorRate = () => {
  console.log("err");
};

export const fetchCustomers = () => {
  return dispatch => {
    let stop = false;
    // while (!stop) {
    console.log("LOOP");
    aviaSalesService
      .getId().then(id => {
      console.log(id);
      for (let i = 0; i < 40; i++) {
      //   while (!stop) {
        if (stop === true) {
          break;
        }
        aviaSalesService.getFlights(id)
          .then((arr) => {
            stop = arr.stop;
            console.log(arr.stop);
            dispatch(onInitialState({allFilms: arr.tickets, filterArr: arr.tickets, error: false, loading: true}))
          })
          .catch(dispatch(onInitialState({allFilms: [], filterArr: [], error: false, loading: false})));
      }
    })
  }
  // }
}