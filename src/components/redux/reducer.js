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
  allFilms: [],
  filterArr: [],
  numberFlight: 5,
  button: 1,
  error: false,
  loading: false,
  stop: false,
  progressBar: 0,
};

const reducer = (state = arrChecked, action) => {
  const arrAllFalse = {
    10: false,
    0: false,
    1: false,
    2: false,
    3: false,
  };

  const arrAllTrue = {
    10: true,
    0: true,
    1: true,
    2: true,
    3: true,
  };

  const checkState = (element, prevState) => {
    let newState = { ...prevState };
    newState.filterArr = [];

    newState.checkBoxes[element] = !newState.checkBoxes[element];
    if (element === 10 && newState.checkBoxes[element]) {
      newState.checkBoxes = arrAllTrue;
    }
    if (element === 10 && !newState.checkBoxes[element]) {
      newState.checkBoxes = arrAllFalse;
    }
    if (!newState.checkBoxes[element] && element !== 10) newState.checkBoxes[10] = false;
    newState = fillFilterArr(newState);
    return sortArr(newState);
  };

  const fillFilterArr = (newState) => {
    let count = 0;
    for (const key in newState.checkBoxes) {
      if (newState.checkBoxes[key]) {
        console.log(key);

        newState.filterArr = newState.filterArr.concat(newState.allFilms.filter((item) =>
          // console.log(item.segments[0].stops.length);
          item.segments[0].stops.length === +key));
        console.log(newState.filterArr);
        count++;
      }
    }
    if (count === 4) newState.checkBoxes[10] = true;
    newState.loading = true;
    return newState;
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
      arr.button === 1 ? sortTemplate(arr.filterArr, 'price') : sortFastest(arr.filterArr);
    } else arr.button === 1 ? sortTemplate(arr.allFilms, 'price') : sortFastest(arr.allFilms);
    return arr;
  };

  switch (action.type) {
    case ON_CHEKCBOX:
      console.log('ON_CHEKCBOX');
      return checkState(action.number, state);

    case INITIALSTATE:
      const newState = { ...state, ...action.allFilms, filterArr: [...state.filterArr, ...action.allFilms.filterArr] };
      newState.allFilms = newState.filterArr;
      newState.progressBar = (newState.allFilms.length / 8000) * 100;
      return sortArr(newState);

    case CLICK_CHEAPEST:
      const newStateSheap = { ...state, button: 1 };
      return sortArr(newStateSheap);

    case CLICK_FASTEST:
      const newStateFast = { ...state, button: 2 };
      return sortArr(newStateFast);

    case FIVE_MORE_TICKETS:
      const newStateFiveMoreTickets = { ...state };
      newStateFiveMoreTickets.numberFlight += 5;
      return newStateFiveMoreTickets;

    default:
      return state;
  }
};

export default reducer;
