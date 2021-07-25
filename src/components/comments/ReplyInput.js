import React, { useContext, useState } from 'react';
import DataContext from '../../context/data/dataContext';

const ReplyInput = ({ id, onReplyClick, userName }) => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { addReply } = dataContext;

  // Declare comp level state
  const [userReply, setUserReply] = useState('');

  // On Reply change
  const userReplyChange = (e) => {
    // Set state for input field
    setUserReply(e.target.value.substring(0, 250));
  };

  // On form submition
  const onPostReplyClick = (e) => {
    e.preventDefault();
    onReplyClick();
    addReply(userReply, id, userName);
    setUserReply('');
  };

  return (
    <form
      className='add-rep-cont'
      autoComplete='off'
      onSubmit={onPostReplyClick}
    >
      <textarea
        className='reply-input'
        name='userReply'
        placeholder='Type your reply here'
        value={userReply}
        onChange={userReplyChange}
      />
      <input
        type='submit'
        className={
          userReply.length > 0
            ? 'btn1 header4 post-rep-btn'
            : 'btn1 header4 post-rep-btn disabled'
        }
        value='Post Reply'
      ></input>
    </form>
  );
};

export default ReplyInput;
