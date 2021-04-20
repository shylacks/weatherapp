import { SUCCESS } from "../types/types";

// const _ = require("lodash");

const initialState = {
  json: "none",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        json: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
