import {
  ON_CHEKCBOX, INITIALSTATE, CLICK_CHEAPEST, CLICK_FASTEST, FIVE_MORE_TICKETS,
} from './actions';

const arrChecked = {
  checkBoxes: {
    10: true,
    0: true,
    1: true,
    2: true,
    3: true,
  },
  allTickets: [],
  filterArr: [],
  numberFlight: 5,
  button: 1,
  error: false,
  loading: false,
  stop: false,
  progressBar: 0,
};

const reducer = (state = arrChecked, action) => {
  const setArrTrueFalse = (boolean, obj) => {
    const newObj = { ...obj };
    Object.keys(obj).forEach((key) => { obj[key] = boolean; });
    // for (const key in newObj) {
    //   if (Object.prototype.hasOwnProperty.call(newObj, key)) {
    //     newObj[key] = boolean;
    //   }
    // }
    return newObj;
  };

  const fillFilterArr = (newState) => {
    let count = 0;
    const result = { ...newState };
    for (const key in result.checkBoxes) {
      if (result.checkBoxes[key]) {
        result.filterArr = result.filterArr.concat(
          result.allTickets.filter((item) => item.segments[0].stops.length === +key),
        );
        count++;
      }
    }
    if (count === 4) result.checkBoxes[10] = true;
    result.loading = true;
    return result;
  };

  const sortTemplate = (arr, parameter1) => {
    arr.sort((a, b) => a[parameter1] - b[parameter1]);
    return arr;
  };

  const sortFastest = (arr) => {
    arr.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
  };

  const sortArr = (arr) => {
    if (arr.filterArr.length > 0) {
      // eslint-disable-next-line no-unused-expressions
      arr.button === 1 ? sortTemplate(arr.filterArr, 'price') : sortFastest(arr.filterArr);
      // eslint-disable-next-line no-unused-expressions
    } else arr.button === 1 ? sortTemplate(arr.allTickets, 'price') : sortFastest(arr.allTickets);
    return arr;
  };

  const checkState = (element, prevState) => {
    let newState = { ...prevState };
    newState.filterArr = [];

    newState.checkBoxes[element] = !newState.checkBoxes[element];
    if (element === 10) {
      newState.checkBoxes = setArrTrueFalse(newState.checkBoxes[element], newState.checkBoxes);
    }
    if (!newState.checkBoxes[element] && element !== 10) newState.checkBoxes[10] = false;
    newState = fillFilterArr(newState);
    return sortArr(newState);
  };

  switch (action.type) {
    case ON_CHEKCBOX:
      return checkState(action.number, state);

    case INITIALSTATE: {
      // eslint-disable-next-line max-len
      const newState = {
        ...state,
        ...action.allTickets,
        filterArr: [...state.filterArr, ...action.allTickets.filterArr],
      };
      newState.allTickets = newState.filterArr;
      newState.progressBar = (newState.allTickets.length / 8000) * 100;
      return sortArr(newState);
    }

    case CLICK_CHEAPEST: {
      const newStateSheap = { ...state, button: 1 };
      return sortArr(newStateSheap);
    }

    case CLICK_FASTEST: {
      const newStateFast = { ...state, button: 2 };
      return sortArr(newStateFast);
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