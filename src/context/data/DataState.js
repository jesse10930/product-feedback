import React, { useReducer } from 'react';
import DataContext from './dataContext';
import dataReducer from './dataReducer';
import { GET_DATA, UPDATE_TAG, UPDATE_SORTBY, UPDATE_UPVOTE } from '../types';

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
    if (localStorage.getItem('requests') === null) {
      const data = require('../../data.json');

      localStorage.setItem('currentUser', JSON.stringify(data['currentUser']));
      localStorage.setItem('requests', JSON.stringify(data['productRequests']));
    }

    let curUser = JSON.parse(localStorage.getItem('curUser'));
    let requests = JSON.parse(localStorage.getItem('requests'));

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

  // Update upvote value
  const updateUpvote = (curUpvoteVal, sugId, add) => {
    let curRequests = state.requests;
    let reqIndex = curRequests.findIndex((req) => req.id === sugId);

    curRequests[reqIndex].upvotes = add ? curUpvoteVal + 1 : curUpvoteVal - 1;

    localStorage.setItem('requests', JSON.stringify(curRequests));

    let updatedRequests = JSON.parse(localStorage.getItem('requests'));

    dispatch({
      type: UPDATE_UPVOTE,
      payload: updatedRequests,
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
        updateUpvote,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
