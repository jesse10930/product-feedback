import React, { useEffect, useContext } from 'react';
import CommentsHeader from './CommentsHeader';
import CommentsContainer from './CommentsContainer';
import AddComment from './AddComment';
import DataContext from '../../context/data/dataContext';

const CommentsComponent = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { activeRequest, updateUpvote } = dataContext;

  // Descturcutre active request from context
  const { category, comments } = activeRequest;

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  // Declare comments count
  let commentsCount = comments ? comments.length : 0;

  // Capitalize category
  let capCategory = category.charAt(0).toUpperCase() + category.slice(1);

  // Set empty array if comments don't exist
  let commentsArr = comments ? comments : [];

  return (
    <div id='sugg-comms-cont'>
      <CommentsHeader
        count={commentsCount}
        category={capCategory}
        reqObj={activeRequest}
        updateUpvote={updateUpvote}
      />
      <CommentsContainer comments={commentsArr} />
      <AddComment />
    </div>
  );
};

export default CommentsComponent;
