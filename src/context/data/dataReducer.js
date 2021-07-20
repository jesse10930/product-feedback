import { GET_DATA, UPDATE_TAG, UPDATE_SORTBY, UPDATE_UPVOTE } from '../types';

const dataReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        curUser: action.payload1,
        requests: action.payload2,
      };
    case UPDATE_TAG:
      return {
        ...state,
        activeTag: action.payload,
      };
    case UPDATE_SORTBY:
      return {
        ...state,
        sortByFilter: action.payload,
      };
    case UPDATE_UPVOTE:
      return {
        ...state,
        requests: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
