import { REQUEST, SUCCESS, FAILURE } from "./types/types";
import { createAction } from "redux-api-middleware";
import { KEY } from "./key";

export const getWeather = (CITY) => (dispatch) =>
  dispatch(
    createAction({
      endpoint: `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${CITY}&aqi=yes`,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      types: [REQUEST, SUCCESS, FAILURE],
    })
  );
