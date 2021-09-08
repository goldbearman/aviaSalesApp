const arrChecked = {
  checkBoxes: {
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  },
  allFilms: [],
};

const reducer = (state = arrChecked, action) => {

  const arrAllFalse = {
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  };

  const arrAllTrue = {
    first: true,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
  };

  const checkState = (element, {checkBoxes, allFilms}) => {
    checkBoxes[element] = !checkBoxes[element];
    if (!checkBoxes[element]) checkBoxes.first = false;
    let count = 0;
    for (let key in checkBoxes) {
      if (checkBoxes[key]) count++;
    }
    if (count === 4) checkBoxes.first = true;
    return {checkBoxes, allFilms};
  }

  const sortTemplate = (arr, parameter1) => {
    arr.sort((a, b) => {
      return a[parameter1] - b[parameter1] ;
    });
  }

  switch (action.type) {

    case "CLICKFIRST":
      let {checkBoxes, allFilms} = state
      checkBoxes.first = !checkBoxes.first;
      if (checkBoxes.first) {
        checkBoxes = arrAllTrue;
      } else checkBoxes = arrAllFalse;
      return {checkBoxes, allFilms};

    case "CLICKSECOND":
      return Object.assign({}, checkState("second", state));

    case "CLICKTHIRD":
      return Object.assign({}, checkState("third", state));

    case "CLICKFOURTH":
      return Object.assign({}, checkState("fourth", state));

    case "CLICKFIFTH":
      return Object.assign({}, checkState("fifth", state));

    case "INITIALSTATE":
      console.log("INITIALSTATE");
      sortTemplate(action.allFilms, "price");
      return {...state, allFilms: action.allFilms};

    case "CLICKCHEAPEST":
      console.log("CLICKCHEAPEST");
      let newStateSheap = Object.assign({}, state);
      sortTemplate(newStateSheap.allFilms, "price");
      return newStateSheap;

    case "CLICKFASTEST":
      console.log("CLICKFASTEST");
      let newStateFast = Object.assign({}, state);
      newStateFast.allFilms.sort((a, b) => {
        return a.segments[0].duration - b.segments[0].duration;
      });
      return newStateFast;

    default:
      return state;
  }
};

export default reducer;