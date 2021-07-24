import React from 'react';
import Reply from './Reply';

const Comment = ({ comment }) => {
  // Destructur comment prop
  const { content, user, replies } = comment;

  const repliesArr = replies ? replies : [];

  return (
    <div className='comment-container'>
      <div className='pic-cont'>
        <img className='pic' src={user.image} alt='prof-pic' />
      </div>
      <div className={repliesArr.length > 0 ? 'grey-line' : 'hide'}></div>
      <div className='comment-top'>
        <h4 className='header4 name'>{user.name}</h4>
        <div className='username-n-reply'>
          <p className='body2 username'>@{user.username}</p>
          <button className='header4 reply'>Reply</button>
        </div>
      </div>
      <div id='comment-bot'>
        <p className='comment-text body2'>{content}</p>
      </div>
      {repliesArr.map((reply, i) => (
        <Reply reply={reply} key={i} />
      ))}
    </div>
  );
};

export default Comment;
