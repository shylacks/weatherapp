import { REQUEST, SUCCESS, FAILURE } from "./types/types";
import { createAction } from "redux-api-middleware";

export const getWeather = () => (dispatch) =>
  dispatch(
    createAction({
      endpoint: "http://localhost:4000/",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      types: [REQUEST, SUCCESS, FAILURE],
    })
  );
