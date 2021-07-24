import React from 'react';

const Reply = ({ reply }) => {
  // Destructure reply prop
  const { content, replyingTo, user } = reply;
  return (
    <div className='reply-container'>
      <div className='pic-cont'>
        <img className='pic' src={user.image} alt='prof-pic' />
      </div>
      <div className='comment-top'>
        <h4 className='header4 name'>{user.name}</h4>
        <div className='username-n-reply'>
          <p className='body2 username'>@{user.username}</p>
          <button className='header4 reply'>Reply</button>
        </div>
      </div>
      <div id='comment-bot'>
        <p className='comment-text body2'>
          <span className='replying-to'>@{replyingTo} </span>
          {content}
        </p>
      </div>
    </div>
  );
};

export default Reply;
