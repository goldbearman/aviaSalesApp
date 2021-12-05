import AviasalesService from '../services/aviasales-service';
import { onInitialState } from './actions';

const aviaSalesService = new AviasalesService();

const getArrTickets = (dispatch, idKey) => {
  aviaSalesService.getFlights(idKey)
    .then((arr) => {
      if (!arr.stop) {
        getArrTickets(dispatch, idKey);
      }
      dispatch(onInitialState({
        allTickets: arr.tickets,
        filterArr: arr.tickets,
        error: false,
        loading: true,
        stop: arr.stop,
      }));
    })
    .catch(dispatch(onInitialState({
      allTickets: [], filterArr: [], error: false, loading: false, stop: false,
    })));
};

export const fetchCustomers = () => (dispatch) => {
  aviaSalesService.getId().then((idKey) => {
    getArrTickets(dispatch, idKey);
  }).catch(dispatch(onInitialState({
    allTickets: [], filterArr: [], error: false, loading: false, stop: false,
  })));
};
