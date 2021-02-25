import instance from "./instance";
import decode from "jwt-decode";
import { SET_USER } from "../actions/types";
import Cookies from "js-cookie";

const setUser = (token) => {
  Cookies.set("myToken", token);
  console.log("myToken", token);
  //the req with instance will be will a token
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: SET_USER,
    payload: decode(token),
  };
};

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      Cookies.set("myToken", res.data.token);
      dispatch(setUser(res.data.token));

      history.replace("/gym");
      console.log("Your user has been created successfully");
      console.log("myToken", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (user, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", user);
      Cookies.set("myToken", res.data.token);
      dispatch(setUser(res.data.token));
      // Alexc3
      history.replace("/gym");
      console.log("Your user has been sing in successfully");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signout = () => {
  Cookies.remove("myToken");
  delete instance.defaults.headers.common.Authorization;

  return {
    type: SET_USER,
    payload: null,
  };
};

export const checkForToken = () => (dispatch) => {
  const token = Cookies.get("myToken");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (user.exp >= currentTime) {
      dispatch(setUser(token));
    } else {
      Cookies.remove("myToken");
      dispatch(signout());
    }
  }
};