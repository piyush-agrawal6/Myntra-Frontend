import * as types from "./types";
const TOKEN = localStorage.getItem("token");
const initialState = {
  userLogin: { loading: false, error: false, message: "" },
  userRegister: { loading: false, error: false, message: "" },
  data: {
    isAuthenticated: !!TOKEN,
    token: TOKEN,
    user: null,
  },
};

export  function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    // case types.AUTH_LOGIN_REQUEST:
    //   return {
    //     ...state,
    //     userLogin: { loading: true, error: false },
    //   };
    // case AUTH_LOGIN_SUCCESS:
    //   localStorage.setItem("token", payload.token);
    //   return {
    //     ...state,
    //     userLogin: { loading: false, error: false, message: payload.message },
    //     data: {
    //       isAuthenticated: true,
    //       token: payload.token,
    //       user: payload.user,
    //     },
    //   };
    // case AUTH_LOGIN_FAILURE:
    //   return {
    //     ...state,
    //     userLogin: { loading: false, error: true, message: payload.message },
    //   };

    // case AUTH_LOGOUT:
    //   localStorage.removeItem("token");
    //   return {
    //     ...state,
    //     data: {
    //       isAuthenticated: false,
    //       token: null,
    //       user: null,
    //     },
    //   };

    case types.REGISTER_USER_REQUEST:
      return {
        ...state,
        userRegister: { loading: true, error: false },
      };
    case types.REGISTER_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        userRegister: {
          loading: false,
          error: false,
          message: payload.message,
        },
        data: {
          isAuthenticated: true,
          token: payload.token,
          user: payload.user,
        },
      };
    case types.REGISTER_USER_ERROR:
      return {
        ...state,
        userRegister: { loading: false, error: true, message: payload.message },
      };
    default:
      return state;
  }
}
