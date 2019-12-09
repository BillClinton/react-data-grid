import API from '../apis/API';

import { CREATE_USER, READ_USERS, UPDATE_USER, DESTROY_USER } from './types';

export const createUser = (formValues, dispatch) => {
  const sendData = async () => await API.post('/users', { ...formValues });

  sendData()
    .then(response => {
      dispatch({
        type: CREATE_USER,
        payload: response.data
      });
    })
    .catch(e => {
      console.log(e);
    });
};

export const readUser = (id, dispatch) => {
  const getData = async () => await API.get(`/users/${id}`);
  getData()
    .then(response => {
      dispatch({
        type: READ_USER,
        payload: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
};

export const readUsers = dispatch => {
  const getData = async () => await API.get('/users');

  getData().then(response => {
    dispatch({
      type: READ_USERS,
      payload: response.data
    });
  });
};

export const updateUser = (id, formValues, dispatch) => {
  const updateData = async () =>
    await API.patch(`/users/${id}`, { ...formValues });

  updateData()
    .then(response => {
      dispatch({
        type: UPDATE_USER,
        payload: response.data
      });
    })
    .catch(e => {
      console.log(e);
    });
};

export const deleteUser = (id, dispatch) => {
  const deleteData = async () => await API.delete(`/users/${id}`);

  deleteData().then(response => {
    dispatch({
      type: DESTROY_USER,
      payload: id
    });
  });
};
