import React, { createContext, useReducer, useEffect } from 'react';
import UserReducer from '../reducers/UserReducer';
import {
  createUser,
  readUsers,
  updateUser,
  destroyUser
} from '../actions/UserActions';

export const UserStore = createContext();

const initialState = {
  users: []
};

const UserStoreProvider = props => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const create = data => createUser(data, dispatch);
  const read = () => readUsers(dispatch);
  const update = (id, data) => updateUser(id, data, dispatch);
  const destroy = id => destroyUser(id, dispatch);

  useEffect(read, []);

  const store = {
    data: state.users,
    create,
    read,
    update,
    destroy
  };

  return (
    <UserStore.Provider value={{ store, dispatch }}>
      {props.children}
    </UserStore.Provider>
  );
};

export default UserStoreProvider;
