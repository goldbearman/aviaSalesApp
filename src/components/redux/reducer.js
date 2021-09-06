import AviasalesService from "../../services/aviasales-service";

const aviaSalesService = new AviasalesService();

const onErrorRate = () => {
  return {};
};

const getTickets = () => {
 return  aviaSalesService
    .getResource()
    .then((arr) => {
      console.log(arr.tickets);
      return arr.tickets;
    })
    .catch(onErrorRate );
};

const arrChecked = {
  first: false,
  second: false,
  third: false,
  fourth: false,
  fifth: false,
  check: 1,
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

  const checkState = (element, arr) => {
    arr[element] = !arr[element];
    if (!arr[element]) arr.first = false;
    let count = 0;
    for (let key in arr) {
      if (arr[key]) count++;
    }
    if (count === 4) arr.first = true;
    return arr;
  }

  switch (action.type) {

    case "CLICKFIRST":
      state.first = !state.first;
      if (state.first) {
        state = arrAllTrue;
      } else state = arrAllFalse;
      return state;

    case "CLICKSECOND":
      return Object.assign({}, checkState("second", state));

    case "CLICKTHIRD":
      return Object.assign({}, checkState("third", state));

    case "CLICKFOURTH":
      return Object.assign({}, checkState("fourth", state));

    case "CLICKFIFTH":
      return Object.assign({}, checkState("fifth", state));

    case "CLICKCHEAPEST":
      return getTickets();


    default:
      return state;
  }
};

export default reducer;