// ACTION TYPES
import * as types from "./types";
import instance from "./instance";
// ACTIONS

export const fetchGym = () => async (dispatch) => {
  try {
    const res = await instance.get("/gym");
    dispatch({
      type: types.FETCH_GYM,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const addGym = (newGym) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newGym) formData.append(key, newGym[key]);
    const res = await instance.post("/gym", formData);
    dispatch({
      type: types.ADD_GYM,
      payload: { newGym: res.data },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};