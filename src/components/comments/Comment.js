import React, { useState } from 'react';
import Reply from './Reply';
import ReplyInput from './ReplyInput';

const Comment = ({ comment }) => {
  // Destructure comment prop
  const { content, user, replies, id } = comment;

  // Declare comp level state
  const [replyActive, setReplyActive] = useState(false);

  // Declare array for replies
  const repliesArr = replies ? replies : [];

  // On Reply click
  const onReplyClick = () => {
    let newReplyState = !replyActive;
    setReplyActive(newReplyState);
  };

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
          <button className='header4 reply' onClick={onReplyClick}>
            Reply
          </button>
        </div>
      </div>
      <div id='comment-bot'>
        <p className='comment-text body2'>{content}</p>
      </div>
      {replyActive ? (
        <ReplyInput
          id={id}
          userName={user.username}
          onReplyClick={onReplyClick}
        />
      ) : null}
      {repliesArr.map((reply, i) => (
        <Reply reply={reply} id={id} key={i} />
      ))}
    </div>
  );
};

export default Comment;
