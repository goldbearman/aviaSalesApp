import AviasalesService from '../../services/aviasales-service';
import { onInitialState } from './actions';

const aviaSalesService = new AviasalesService();

export const fetchCustomers = (idKey) => {
  console.log(idKey);
  return (dispatch) => {
    console.log('LOOP');
    getArrTickets(dispatch, idKey);
  };
};

const getArrTickets = (dispatch, idKey) => {
  let stop = false;
  aviaSalesService.getFlights(idKey)
    .then((arr) => {
      stop = arr.stop;
      console.log(arr.stop);
      if (!arr.stop) {
        // lastValue++;\
        getArrTickets(dispatch, idKey);
      }
      dispatch(onInitialState({
        allFilms: arr.tickets,
        filterArr: arr.tickets,
        error: false,
        loading: true,
        stop: arr.stop,
      }));
    })
    .catch(dispatch(onInitialState({
      allFilms: [], filterArr: [], error: false, loading: false, stop: false,
    })));
};
