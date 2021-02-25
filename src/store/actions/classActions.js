// ACTION TYPES
import * as types from "./types";
import instance from "./instance";

// ACTIONS

export const fetchClass = () => async (dispatch) => {
  try {
    const res = await instance.get("/class");
    
    dispatch({
      type: types.FETCH_CLASS,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const addClass = (newClass) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newClass) formData.append(key, newClass[key]);
    const res = await instance.post(
      `/gym/${newClass.gymId}/class`,
      formData
    );
    dispatch({
      type: types.ADD_CLASS,
      payload: { newClass: res.data },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};



export const updateClass = (updatedClass) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedClass) formData.append(key, updatedClass[key]);
    const res = await instance.put(`/class/${updatedClass.id}`, formData);
    dispatch({
      type: types.UPDATE_CLASS,
      payload: { updatedClass: res.data },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};