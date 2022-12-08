/* eslint-disable no-console */
import axios from 'axios';
import {
  CHECK_USER, LOGOUT, SET_AUTH, SET_REG,
} from '../types';

export const setRegUser = (payload) => ({ type: SET_REG, payload });
export const setAuthUser = (payload) => ({ type: SET_AUTH, payload });
export const setCheckUser = (payload) => ({ type: CHECK_USER, payload });
export const logoutUser = () => ({ type: LOGOUT });

export const regUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  axios.post('/auth/registration', inputs)
    .then((res) => dispatch(setRegUser(res.data)))
    .catch(console.log);
};

export const authUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  axios.post('/auth/authorization', inputs)
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const logoutUserAsync = () => (dispatch) => {
  axios('/auth/logout')
    .then(() => dispatch(logoutUser()))
    .catch(console.log);
};

export const checkAuth = () => (dispatch) => {
  axios.post('/auth/check')
    .then((res) => dispatch(setCheckUser(res.data)))
    .catch(console.log);
};
