import {
  GET_DATA,
  UPDATE_TAG,
  UPDATE_SORTBY,
  UPDATE_UPVOTE,
  CHANGE_SUGGCLICKED,
  ADD_COMMENT,
} from '../types';

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
    case CHANGE_SUGGCLICKED:
      return {
        ...state,
        suggClicked: action.payload1,
        activeRequest: action.payload2,
      };
    case ADD_COMMENT:
      return {
        ...state,
        requests: action.payload1,
        commentsCount: action.payload2,
        activeRequest: action.payload3,
      };
    default:
      return state;
  }
};

export default dataReducer;
