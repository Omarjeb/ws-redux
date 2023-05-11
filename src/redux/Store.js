import { createStore } from "redux";
import ReducerCounter from "./reducer/ReducerCounter";

const store = createStore(
   ReducerCounter, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store