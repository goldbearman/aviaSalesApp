import {
  ON_CHEKCBOX, INITIALSTATE, CLICK_CHEAPEST, CLICK_FASTEST, FIVE_MORE_TICKETS,
} from './actions';

const arrChecked = {
  checkBoxes: {
    Все: true,
    'Без пересадок': true,
    '1 пересадка': true,
    '2 пересадки': true,
    '3 пересадки': true,
  },
  allTickets: [],
  numberFlight: 5,
  button: 1,
  error: false,
  loading: false,
  stop: false,
  progressBar: 0,
};

const setArrTrueFalse = (boolean, obj) => {
  const newObj = { ...obj };
  Object.keys(newObj).forEach((key) => { newObj[key] = boolean; });
  return newObj;
};

const checkState = (element, prevState) => {
  const newState = { ...prevState };

  newState.checkBoxes[element] = !newState.checkBoxes[element];
  if (element === 'Все') {
    newState.checkBoxes = setArrTrueFalse(newState.checkBoxes[element], newState.checkBoxes);
  }
  if (!newState.checkBoxes[element] && element !== 'Все') newState.checkBoxes['Все'] = false;
  let count = 0;
  Object.values(newState.checkBoxes).forEach((value) => {
    if (value) count++;
  });
  if (count === 4) newState.checkBoxes['Все'] = true;
  return newState;
};

const reducer = (state = arrChecked, action) => {
  switch (action.type) {
    case ON_CHEKCBOX:
      return checkState(action.number, state);

    case INITIALSTATE: {
      const newState = {
        ...state,
        ...action.allTicketsObj,
        allTickets: [...state.allTickets, ...action.allTicketsObj.allTickets],
      };
      newState.progressBar = (newState.allTickets.length / 8500) * 100;
      return newState;
    }

    case CLICK_CHEAPEST: {
      return { ...state, button: 1 };
    }

    case CLICK_FASTEST: {
      return { ...state, button: 2 };
    }

    case FIVE_MORE_TICKETS: {
      const newStateFiveMoreTickets = { ...state };
      newStateFiveMoreTickets.numberFlight += 5;
      return (newStateFiveMoreTickets);
    }

    default:
      return state;
  }
};

export default reducer;
