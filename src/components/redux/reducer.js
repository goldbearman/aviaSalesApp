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
  loading: false
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
    let newState = Object.assign({}, prevState);
    newState.filterArr = [];

    newState.checkBoxes[element] = !newState.checkBoxes[element];
    if (element === 10 && newState.checkBoxes[element]) {
      newState.checkBoxes = arrAllTrue;
    }
    if (element === 10 && !newState.checkBoxes[element]) {
      newState.checkBoxes = arrAllFalse;
    }
    if (!newState.checkBoxes[element] && element !== 10) newState.checkBoxes[10] = false;
    // let count = 0;
    // for (let key in newState.checkBoxes) {
    //   if (newState.checkBoxes[key]) {
    //     console.log(key);
    //
    //     newState.filterArr = newState.filterArr.concat(newState.allFilms.filter(item => {
    //       // console.log(item.segments[0].stops.length);
    //       return item.segments[0].stops.length === +key
    //     }));
    //     console.log(newState.filterArr);
    //     count++
    //   }
    // }
    // if (count === 4) newState.checkBoxes[10] = true;

    newState = fillFilterArr(newState);

    /////Filter flight//////
    sortArr(newState.allFilms, newState.filterArr, newState.button);
    return newState;
  };

  const fillFilterArr = (newState) => {
    let count = 0;
    for (let key in newState.checkBoxes) {
      if (newState.checkBoxes[key]) {
        console.log(key);

        newState.filterArr = newState.filterArr.concat(newState.allFilms.filter(item => {
          // console.log(item.segments[0].stops.length);
          return item.segments[0].stops.length === +key
        }));
        console.log(newState.filterArr);
        count++
      }
    }
    if (count === 4) newState.checkBoxes[10] = true;
    newState.loading = true;
    return newState;
  }

  const sortTemplate = (arr, parameter1) => {
    arr.sort((a, b) => {
      return a[parameter1] - b[parameter1];
    });
    return arr;
  };

  const sortFastest = (arr) => {
    arr.sort((a, b) => {
      return a.segments[0].duration - b.segments[0].duration;
    });
  };


  const sortArr = (allFlights, filterFlight, button) => {
    if (filterFlight.length > 0) {
      button === 1 ? sortTemplate(filterFlight, "price") : sortFastest(filterFlight);
    } else button === 1 ? sortTemplate(allFlights, "price") : sortFastest(allFlights);
  };

  switch (action.type) {

    case "CLICKFIRST":
      return checkState(10, state);

    case "CLICKSECOND":
      return checkState(0, state);

    case "CLICKTHIRD":
      return checkState(1, state);

    case "CLICKFOURTH":
      return checkState(2, state);

    case "CLICKFIFTH":
      return checkState(3, state);

    case "INITIALSTATE":
      console.log("INITIALSTATE");
      // if(action.allFilms){
      console.log(action.allFilms)
      let newState = Object.assign({}, state, action.allFilms);
      return fillFilterArr(newState);
    // }else Object.assign({}, state, {error: !action.allFilms[1]});


    case "CLICKCHEAPEST":
      console.log("CLICKCHEAPEST");
      let newStateSheap = Object.assign({}, state, {button: 1});
      sortArr(newStateSheap.allFilms, newStateSheap.filterArr, newStateSheap.button);
      return newStateSheap;

    case "CLICKFASTEST":
      console.log("CLICKFASTEST");
      let newStateFast = Object.assign({}, state, {button: 2});
      sortArr(newStateFast.allFilms, newStateFast.filterArr, newStateFast.button);
      return newStateFast;

    case "FIVEMORETICKETS":
      console.log("FIVEMORETICKETS");
      let newStateFiveMoreTickets = Object.assign({}, state);
      newStateFiveMoreTickets.numberFlight += 5;
      return newStateFiveMoreTickets;

    default:
      return state;
  }
};

export default reducer;