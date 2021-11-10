import dataItems from "../data.json";

const initialStore = {
  data: dataItems,
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case "ALL":
      return {
        ...state,
        data: dataItems,
      };
    case "XRP":
      return {
        ...state,
        data: state.data.filter((elem) => elem.title.startsWith("XRP")),
      };
    case "BCH":
      return {
        ...state,
        data: state.data.filter((elem) => elem.title.startsWith("BCH")),
      };
    case "LTC":
      return {
        ...state,
        data: state.data.filter((elem) => elem.title.startsWith("LTC")),
      };
    default:
      return state;
  }
};

export default reducer;
