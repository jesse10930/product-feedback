import React from 'react';
import Comment from './Comment.js';

const CommentsContainer = ({ comments }) => {
  return (
    <div id='coms-cont'>
      <h3 id='num-of-coms' className='header3'>
        {comments.length} Comments
      </h3>
      {comments.map((comment, i) => (
        <Comment comment={comment} key={i} />
      ))}
    </div>
  );
};

export default CommentsContainer;
