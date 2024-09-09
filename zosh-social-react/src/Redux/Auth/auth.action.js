// import axios from "axios";
// import { api, API_BASE_URL } from "../../config/api";
// import {
//   GET_PROFILE_FAILUER,
//   GET_PROFILE_REQUEST,
//   GET_PROFILE_SUCCESS,
//   LOGIN_FAILUER,
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   UPDATE_PROFILE_FAILUER,
//   UPDATE_PROFILE_REQUEST,
//   UPDATE_PROFILE_SUCCESS,
// } from "./auth.actionType";

// export const loginUserAction = (loginData) => async (dispatch) => {
//   dispatch({ type: LOGIN_REQUEST });
//   try {
//     const { data } = await axios.post(
//       `${API_BASE_URL}/auth/signin`,
//       loginData.data
//     );
//     if (data.token) {
//       localStorage.setItem("jwt", data.token);
//     }
//     console.log("login success", data);
//     dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
//   } catch (error) {
//     console.log("-------", error);
//     dispatch({ type: LOGIN_FAILUER, payload: error });
//   }
// };

// export const registerUserAction = (loginData) => async (dispatch) => {
//   dispatch({ type: LOGIN_REQUEST });
//   try {
//     const { data } = await axios.post(
//       `${API_BASE_URL}/auth/signup`,
//       loginData.data
//     );
//     if (data.token) {
//       localStorage.setItem("jwt", data.token);
//     }
//     console.log("register----", data);
//     dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
//   } catch (error) {
//     console.log("-------", error);
//     dispatch({ type: LOGIN_FAILUER, payload: error });
//   }
// };

// export const getProfileAction = (jwt) => async (dispatch) => {
//   dispatch({ type: GET_PROFILE_REQUEST });
//   try {
//     const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
//       header: {
//         Authorization: `Bearer ${jwt}`,
//       },
//     });

//     console.log("profile----", data);
//     dispatch({ type: GET_PROFILE_SUCCESS, payload: data });
//   } catch (error) {
//     console.log("-------", error);
//     dispatch({ type: GET_PROFILE_FAILUER, payload: error });
//   }
// };

// export const updateProfileAction = (reqData) => async (dispatch) => {
//   dispatch({ type: UPDATE_PROFILE_REQUEST });
//   try {
//     const { data } = await api.post(`${API_BASE_URL}/api/users`, reqData);

//     console.log("update profile----", data);
//     dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
//   } catch (error) {
//     console.log("-------", error);
//     dispatch({ type: UPDATE_PROFILE_FAILUER, payload: error });
//   }
// };

// auth.action.js

import axios from "axios";
import { api, API_BASE_URL } from "../../config/api";
import {
  GET_PROFILE_FAILUER,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  LOGIN_FAILUER,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILUER,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_PROFILE_FAILUER,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  SEARCH_USERS_REQUEST,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAILURE,
  
} from "./auth.actionType";

export const loginUserAction = (loginData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/signin`,
      loginData.data
    );
    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }
    console.log("login success", data);
    dispatch({ type: LOGIN_SUCCESS, payload: data.token }); // Changed to data.token
  } catch (error) {
    console.log("-------", error);
    dispatch({ type: LOGIN_FAILUER, payload: error.message }); // Changed to error.message
  }
};

export const registerUserAction = (registerData) => async (dispatch) => { // Renamed parameter to registerData
  dispatch({ type: REGISTER_REQUEST }); // Changed to REGISTER_REQUEST
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/signup`,
      registerData.data
    );
    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }
    console.log("register----", data);
    dispatch({ type: REGISTER_SUCCESS, payload: data.token }); // Changed to REGISTER_SUCCESS
  } catch (error) {
    console.log("-------", error);
    dispatch({ type: REGISTER_FAILUER, payload: error.message }); // Changed to REGISTER_FAILUER
  }
};

export const getProfileAction = (jwt) => async (dispatch) => {
  dispatch({ type: GET_PROFILE_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    console.log("profile----", data);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.log("-------", error);
    dispatch({ type: GET_PROFILE_FAILUER, payload: error.message }); // Changed to error.message
  }
};

export const updateProfileAction = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST });
  try {
    const { data } = await api.post(`${API_BASE_URL}/api/users`, reqData);

    console.log("update profile----", data);
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.log("-------", error);
    dispatch({ type: UPDATE_PROFILE_FAILUER, payload: error.message }); // Changed to error.message
  }
};
export const searchUsersAction = (searchTerm) => async (dispatch) => {
  dispatch({ type: SEARCH_USERS_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/users/search`, {
      params: { query: searchTerm }
    });

    dispatch({ type: SEARCH_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SEARCH_USERS_FAILURE, payload: error.message });
  }
};
