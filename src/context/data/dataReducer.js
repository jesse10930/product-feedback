import {
  GET_DATA,
  UPDATE_TAG,
  UPDATE_SORTBY,
  UPDATE_UPVOTE,
  CHANGE_SUGGCLICKED,
  ADD_COMMENT,
  SET_ACTIVEREQ,
  COMMENTS_COUNT,
  ADD_REPLY,
  ADD_FEEDBACK,
  DELETE_FEEDBACK,
  EDIT_FEEDBACK,
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
        suggClicked: action.payload,
      };
    case SET_ACTIVEREQ:
      return {
        ...state,
        activeRequest: action.payload,
      };
    case COMMENTS_COUNT:
      return {
        ...state,
        commentsCount: action.payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        requests: action.payload,
      };
    case ADD_REPLY:
      return {
        ...state,
        requests: action.payload,
      };
    case ADD_FEEDBACK:
      return {
        ...state,
        requests: action.payload,
      };
    case DELETE_FEEDBACK:
      return {
        ...state,
        requests: action.payload,
      };
    case EDIT_FEEDBACK:
      return {
        ...state,
        requests: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
