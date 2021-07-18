import React, { useReducer } from 'react';
import DataContext from './dataContext';
import dataReducer from './dataReducer';
import { GET_DATA } from '../types';

const DataState = (props) => {
  const initialState = {
    requests: [],
  };
  const [state, dispatch] = useReducer(dataReducer, initialState);

  // Get Data
  const getData = () => {
    const data = require('../../data.json');
    const requests = data['productRequests'];

    dispatch({
      type: GET_DATA,
      payload: requests,
    });
  };

  return (
    <DataContext.Provider
      value={{
        requests: state.requests,
        getData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
