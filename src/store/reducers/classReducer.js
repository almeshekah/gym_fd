import {
    ADD_CLASS,
    UPDATE_CLASS,
    FETCH_CLASS,
  } from "../actions/types";
  
  const initialState = {
    classes: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CLASS:
        const { newClass } = action.payload;
        return {
          ...state,
          classes: [...state.classes, newClass],
        };
      
      case UPDATE_CLASS:
        const { updatedClass } = action.payload;
        return {
          ...state,
          classes: state.classes.map((_class) =>
          _class.id === updatedClass.id ? updatedClass : _class
          ),
        };
      case FETCH_CLASS:
        return {
          ...state,
          classes: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;