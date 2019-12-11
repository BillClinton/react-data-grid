import {
  CREATE_USER,
  READ_USERS,
  UPDATE_USER,
  DESTROY_USER,
  SET_LOADING
} from '../actions/types';

export default (state = {}, action) => {
  console.log('reducer!!!!', action.payload);
  switch (action.type) {
    case CREATE_USER: {
      return {
        ...state,
        users: [...state.users, action.payload.user]
      };
    }

    case READ_USERS: {
      return { ...state, users: action.payload };
    }

    case UPDATE_USER: {
      const users = state.users;
      const user = action.payload;
      const index = users.findIndex(item => item._id === user._id);

      if (~index) {
        users[index] = user;
        return { ...state, users, user: null };
      }
      return { ...state };
    }

    case DESTROY_USER: {
      const users = state.users;
      const idx = action.payload;
      const filtered = users
        .slice(0, idx)
        .concat(users.slice(idx + 1, users.length));
      return { ...state, users: filtered };
    }

    case SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    default:
      return state;
  }
};
