import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";
import { createMiddleware } from "redux-api-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = (store) => (next) => (action) => {
  return next(action);
};

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger, createMiddleware()))
);

export default store;
