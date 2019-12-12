import API from '../api/API';

import {
  CREATE_USER,
  READ_USERS,
  UPDATE_USER,
  DESTROY_USER,
  SET_LOADING
} from './types';

export const createUser = (formValues, dispatch) => {
  setLoading(true, dispatch);
  const sendData = async () => await API.post('/users', { ...formValues });

  sendData()
    .then(response => {
      dispatch({
        type: CREATE_USER,
        payload: response.data
      });
      setLoading(false, dispatch);
    })
    .catch(e => {
      console.log(e);
    });
};

export const readUsers = dispatch => {
  setLoading(true, dispatch);
  const getData = async () => await API.get('/users');

  getData().then(response => {
    dispatch({
      type: READ_USERS,
      payload: response.data
    });
    setLoading(false, dispatch);
  });
};

export const updateUser = (id, formValues, dispatch) => {
  setLoading(true, dispatch);
  const updateData = async () =>
    await API.patch(`/users/${id}`, { ...formValues });

  updateData()
    .then(response => {
      dispatch({
        type: UPDATE_USER,
        payload: response.data
      });
      setLoading(false, dispatch);
    })
    .catch(e => {
      console.log(e);
    });
};

export const destroyUser = (id, dispatch) => {
  setLoading(true, dispatch);
  const deleteData = async () => await API.delete(`/users/${id}`);

  deleteData().then(response => {
    dispatch({
      type: DESTROY_USER,
      payload: id
    });
    setLoading(false, dispatch);
  });
};

export const setLoading = (loading, dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: loading
  });
};
