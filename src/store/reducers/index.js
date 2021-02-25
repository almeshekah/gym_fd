import { combineReducers } from "redux";
import authReducer from "./authReducer";
import classReducer from "./classReducer"
import gymReducer from "./gymReducer";
const rootReducer = combineReducers({
  
  authReducer: authReducer,
  classReducer,
  gymReducer


});

export default rootReducer;