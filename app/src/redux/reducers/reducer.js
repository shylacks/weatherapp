import { SUCCESS } from "../types/types";

// const _ = require("lodash");

const initialState = {
  weather: "none",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        weather: action.payload.weather,
      };
    default:
      return state;
  }
};

export default reducer;
