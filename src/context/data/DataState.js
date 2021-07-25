import React, { useReducer } from 'react';
import DataContext from './dataContext';
import dataReducer from './dataReducer';
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
} from '../types';

const DataState = (props) => {
  const initialState = {
    curUser: {},
    requests: [],
    activeRequest: [],
    activeTag: 'All',
    sortByFilter: 'Most Upvotes',
    suggClicked: false,
    commentsCount: 15,
  };
  const [state, dispatch] = useReducer(dataReducer, initialState);

  // Get Data
  const getData = () => {
    // If session storage empty, get data from JSON file
    if (
      sessionStorage.getItem('requests') === null ||
      sessionStorage.getItem('curUser') === null
    ) {
      const data = require('../../data.json');

      for (let i = 0; i < data['productRequests'].length; i++) {
        data['productRequests'][i]['active'] = false;
      }

      sessionStorage.setItem('curUser', JSON.stringify(data['currentUser']));
      sessionStorage.setItem(
        'requests',
        JSON.stringify(data['productRequests'])
      );
    }

    // Declare session storage data as an object
    let curUser = JSON.parse(sessionStorage.getItem('curUser'));
    let requests = JSON.parse(sessionStorage.getItem('requests'));

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

    // Find active request and change upvote value
    curRequests[reqIndex].upvotes = add ? curUpvoteVal + 1 : curUpvoteVal - 1;
    curRequests[reqIndex].active = add;

    // Set updated object in storage, and then parse to object
    sessionStorage.setItem('requests', JSON.stringify(curRequests));
    let updatedRequests = JSON.parse(sessionStorage.getItem('requests'));

    dispatch({
      type: UPDATE_UPVOTE,
      payload: updatedRequests,
    });
  };

  // Change suggestion clicked status
  const suggCompClicked = (clickedRequest) => {
    let newStatus = !state.suggClicked;
    setActiveRequest(clickedRequest, false);

    dispatch({
      type: CHANGE_SUGGCLICKED,
      payload: newStatus,
    });
  };

  // Set active request
  const setActiveRequest = (clickedRequest, comment) => {
    let newActiveRequest;

    if (!comment) {
      newActiveRequest = state.suggClicked ? [] : clickedRequest;
    } else {
      newActiveRequest = clickedRequest;
    }

    dispatch({
      type: SET_ACTIVEREQ,
      payload: newActiveRequest,
    });
  };

  // Add a comment
  const addComment = (userComment) => {
    // Get current requests and active index
    let curRequests = state.requests;
    let reqIndex = curRequests.findIndex(
      (req) => req.id === state.activeRequest.id
    );

    // Get current comments for active request, declare and store new comments array
    let curComments = curRequests[reqIndex].comments
      ? curRequests[reqIndex].comments
      : [];
    let newComment = {
      id: state.commentsCount + 1,
      content: userComment,
      user: state.curUser,
    };
    curComments.push(newComment);

    // Update requests
    curRequests[reqIndex].comments = curComments;

    // Update active request
    setActiveRequest(curRequests[reqIndex], true);

    // Set session storage and declare as JSON obj
    sessionStorage.setItem('requests', JSON.stringify(curRequests));
    let updatedRequests = JSON.parse(sessionStorage.getItem('requests'));

    dispatch({
      type: ADD_COMMENT,
      payload: updatedRequests,
    });
  };

  // Update comment count
  const updateCommentCount = () => {
    let newCommentsCount = state.commentsCount + 1;

    dispatch({
      type: COMMENTS_COUNT,
      payload: newCommentsCount,
    });
  };

  // Add a reply
  const addReply = (userReply, commentId, userName) => {
    // Get current requests, active request index
    let curRequests = state.requests;
    let reqIndex = curRequests.findIndex(
      (req) => req.id === state.activeRequest.id
    );

    // Get current request's comments and active comment
    let curComments = curRequests[reqIndex].comments;
    let commIndex = curComments.findIndex((comm) => comm.id === commentId);
    let curComment = curComments[commIndex];

    // Declare current replies array, declare new reply
    let curReplies = curComment.replies ? curComment.replies : [];
    let newReply = {
      content: userReply,
      replyingTo: userName,
      user: state.curUser,
    };

    // Add to current replies array
    curReplies.push(newReply);

    // Update replies of current comment
    curComment.replies = curReplies;

    // Update comments of active request
    const newComments = curComments.map((comment) =>
      comment.id === commentId ? curComment : comment
    );

    // Update requests
    curRequests[reqIndex].comments = newComments;

    // Update active request
    setActiveRequest(curRequests[reqIndex], true);

    // Set session storage and declare as JSON obj
    sessionStorage.setItem('requests', JSON.stringify(curRequests));
    let updatedRequests = JSON.parse(sessionStorage.getItem('requests'));

    dispatch({
      type: ADD_REPLY,
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
        suggClicked: state.suggClicked,
        activeRequest: state.activeRequest,
        commentsCount: state.commentsCount,
        getData,
        updateActiveTag,
        updateSortByFilter,
        updateUpvote,
        suggCompClicked,
        addComment,
        setActiveRequest,
        updateCommentCount,
        addReply,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
