import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { checkForToken } from "./actions/authActions";
import {fetchGym} from  "./actions/gymActions";
import {fetchClass} from  "./actions/classActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// Treasuer
store.dispatch(checkForToken());
store.dispatch(fetchGym());
store.dispatch(fetchClass());


export default store;