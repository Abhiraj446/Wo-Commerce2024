import axios from "axios";
import {
    LOGIN_REQUEST, 
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL
    
} from"../constants/userConstant"
// // Login
// export const login = (email, password) => async (dispatch) => {
//   try {
//     dispatch({ type: LOGIN_REQUEST });

//     const config = { headers: { "Content-Type": "application/json" } };
//     const { data } = await axios.post("http://localhost:5000/api/v1/login", { email, password }, config);

//     dispatch({ type: LOGIN_SUCCESS, payload: data.user });
//   } catch (error) {
//     dispatch({
//       type: LOGIN_FAIL,
//       payload: error.response?.data?.message || "Login failed",
//     });
//   }
// };

// export const register= (name, email,password) => async (dispatch) => {
//   try {
//     dispatch({ type: REGISTER_USER_REQUEST });

//     const config = { headers: { "Content-Type": "application/json" } };
//     const { data } = await axios.post("http://localhost:5000/api/v1/register", { name,email, password }, config);

//     dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
//   } catch (error) {
//     dispatch({
//       type: REGISTER_USER_FAIL,
//       payload: error.response?.data?.message || "Rgister failed",
//     });
//   }
// };

// ###################################################
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/login",
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : "Login failed",
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/register",
      { name, email, password },
      config
    );

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : "Register failed",
    });
  }
};



export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get("http://localhost:5000/api/v1/me");

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : "Failed to load user",
    });
  }
};
