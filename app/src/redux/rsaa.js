import { REQUEST, SUCCESS, FAILURE } from "./types/types";
import { createAction } from "redux-api-middleware";

const KEY = "42f7ec7ad05c4a96982141833211804";

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
