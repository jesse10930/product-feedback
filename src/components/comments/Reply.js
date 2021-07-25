import React, { useState } from 'react';
import ReplyInput from './ReplyInput';

const Reply = ({ reply, id }) => {
  // Destructure reply prop
  const { content, replyingTo, user } = reply;

  // Declare comp level state
  const [replyActive, setReplyActive] = useState(false);

  // On Reply click
  const onReplyClick = () => {
    let newReplyState = !replyActive;
    setReplyActive(newReplyState);
  };

  return (
    <div className='reply-container'>
      <div className='pic-cont'>
        <img className='pic' src={user.image} alt='prof-pic' />
      </div>
      <div className='comment-top'>
        <h4 className='header4 name'>{user.name}</h4>
        <div className='username-n-reply'>
          <p className='body2 username'>@{user.username}</p>
          <button className='header4 reply' onClick={onReplyClick}>
            Reply
          </button>
        </div>
      </div>
      <div id='comment-bot'>
        <p className='comment-text body2'>
          <span className='replying-to'>@{replyingTo} </span>
          {content}
        </p>
      </div>
      {replyActive ? (
        <ReplyInput
          userName={user.username}
          id={id}
          onReplyClick={onReplyClick}
        />
      ) : null}
    </div>
  );
};

export default Reply;
