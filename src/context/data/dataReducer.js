import { GET_DATA } from '../types';

const dataReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      console.log(action.payload);
      return {
        ...state,
        requests: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
