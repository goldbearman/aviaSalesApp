export const checkOnFirst = () => ({type: "CLICKFIRST"});
export const checkOnSecond = () => ({type: "CLICKSECOND"});
export const checkOnThird = () => ({type: "CLICKTHIRD"});
export const checkOnFourth = () => ({type: "CLICKFOURTH"});
export const checkOnFifth = () => ({type: "CLICKFIFTH"});

export const checkCheapest = () => ({type: "CLICKCHEAPEST"});

export const onInitialState = (allFilms) => ({type: "INITIALSTATE", allFilms});