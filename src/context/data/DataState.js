import React, { useReducer } from 'react';
import DataContext from './dataContext';
import dataReducer from './dataReducer';
import { GET_DATA, UPDATE_TAG, UPDATE_SORTBY } from '../types';

const DataState = (props) => {
  const initialState = {
    curUser: {},
    requests: [],
    activeTag: 'All',
    sortByFilter: 'Most Upvotes',
  };
  const [state, dispatch] = useReducer(dataReducer, initialState);

  // Get Data
  const getData = () => {
    const data = require('../../data.json');

    localStorage.setItem('currentUser', JSON.stringify(data['currentUser']));
    localStorage.setItem('requests', JSON.stringify(data['productRequests']));

    const curUser = JSON.parse(localStorage.getItem('curUser'));
    const requests = JSON.parse(localStorage.getItem('requests'));

    dispatch({
      type: GET_DATA,
      payload1: curUser,
      payload2: requests,
    });
  };

  // Update active tag filter
  const updateActiveTag = (clickedTag) => {
    let newTag = clickedTag;

    dispatch({
      type: UPDATE_TAG,
      payload: newTag,
    });
  };

  // Update sort by filter
  const updateSortByFilter = (clickedSortBy) => {
    let newSortBy = clickedSortBy;

    dispatch({
      type: UPDATE_SORTBY,
      payload: newSortBy,
    });
  };

  return (
    <DataContext.Provider
      value={{
        curUser: state.curUser,
        requests: state.requests,
        activeTag: state.activeTag,
        sortByFilter: state.sortByFilter,
        getData,
        updateActiveTag,
        updateSortByFilter,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
