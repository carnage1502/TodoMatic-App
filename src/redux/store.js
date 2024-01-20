import { createStore } from "redux";
import reducerS from "./reducers";

const store = createStore(reducerS);

export default store;
