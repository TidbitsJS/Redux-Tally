import { createStore } from "redux";
import reducer from "../reducers/Reducer";

const initialState = {
  days: 11,
  hours: 31,
  minutes: 27,
  seconds: 45,
  activeSession: "SECONDS",
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
