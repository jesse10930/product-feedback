import React, { useContext, useState } from 'react';
import DataContext from '../../context/data/dataContext';

const ReplyInput = ({ id, onReplyClick, userName }) => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { addReply } = dataContext;

  // Declare comp level state
  const [userReply, setUserReply] = useState('');
  const [alert, setAlert] = useState(false);

  // On Reply change
  const userReplyChange = (e) => {
    // Set state for input field
    setUserReply(e.target.value.substring(0, 250));
  };

  // On form submition
  const onPostReplyClick = (e) => {
    e.preventDefault();
    if (userReply.length === 0) {
      let newAlert = true;
      setAlert(newAlert);
    } else {
      let newAlert = false;
      onReplyClick();
      addReply(userReply, id, userName);
      setUserReply('');
      setAlert(newAlert);
    }
  };

  return (
    <form
      className='add-rep-cont'
      autoComplete='off'
      onSubmit={onPostReplyClick}
    >
      <textarea
        name='userReply'
        className={alert ? 'reply-input alert' : 'reply-input'}
        placeholder='Type your reply here'
        value={userReply}
        onChange={userReplyChange}
      />
      <p className={alert ? 'alert-text body3 reply-alert' : 'hide'}>
        Can't leave any fields empty
      </p>
      <input
        type='submit'
        className='btn1 header4 post-rep-btn'
        value='Post Reply'
      ></input>
    </form>
  );
};

export default ReplyInput;
