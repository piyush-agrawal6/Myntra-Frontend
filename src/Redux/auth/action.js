import * as types from "./types";
import axios from "axios";

//Register User
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: types.REGISTER_USER_REQUEST });
    const data = await axios.post(
      `https://busy-rose-earthworm-cap.cyclic.app/user/new`,
      userData
    );
    console.log(data.data);
    dispatch({
      type: types.REGISTER_USER_SUCCESS,
      payload: {
        token: data.data.token,
        message: data.data.message,
        user: data.data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: types.REGISTER_USER_ERROR,
    });
  }
};

export const authLogin = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_USER_REQUEST });

    const res = await axios.post(
      "https://busy-rose-earthworm-cap.cyclic.app/user/login",
      data
    );
    console.log(res);
    dispatch({
      type: types.LOGIN_USER_SUCCESS,
      payload: {
        token: res.data.token,
        message: res.data.message,
        user: res.data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: types.LOGIN_USER_ERROR,
    });
  }
};
