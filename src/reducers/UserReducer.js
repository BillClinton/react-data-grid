import {
  CREATE_USER,
  READ_USERS,
  UPDATE_USER,
  DESTROY_USER
} from '../actions/types';

export default (state = {}, action) => {
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
      const users = state.users.filter(apt => apt._id !== action.payload);
      return { ...state, users: users };
    }

    default:
      return state;
  }
};
