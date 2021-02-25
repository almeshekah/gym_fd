import * as types from "../actions/types";

const initialState = {
  gyms: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_GYM:
      const { newGym } = action.payload;
      return {
        ...state,
        gyms: [...state.gyms, newGym],
      };
    case types.FETCH_GYM:
      return {
        ...state,
        gyms: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;