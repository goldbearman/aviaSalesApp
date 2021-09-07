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

    case "CLICKCHEAPEST":
      console.log("CLICKCHEAPEST");
      return {...state, allFilms: action.allFilms};

    default:
      return state;
  }
};

export default reducer;