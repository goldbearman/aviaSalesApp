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

    case "INITIALSTATE":
      // const fiveFilms = action.allFilms.slice(0,6);
      // console.log(fiveFilms);
      console.log("INITIALSTATE");
      return {...state, allFilms: action.allFilms};

    case "CLICKCHEAPEST":
      console.log("CLICKCHEAPEST");
      // return {...state, allFilms: action.allFilms};
      console.log(state);
      let newState = Object.assign({}, {...state, allFilms: action.allFilms});
      let t = newState.allFilms.sort((a, b) => {
        console.log(a.price);
        if (a.price > b.price) return 1; // если первое значение больше второго
        if (a.price == b.price) return 0; // если равны
        if (a.price < b.price) return -1; // если первое значение меньше второго
        // let z = a.price - b.price;
      });
      console.log(t);

    default:
      return state;
  }
};

export default reducer;