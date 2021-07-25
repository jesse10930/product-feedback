import React, { useContext, useState } from 'react';
import DataContext from '../../context/data/dataContext';

const AddComment = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { addComment } = dataContext;

  // Declare comp level state
  const [chars, setChars] = useState(250);
  const [userComment, setUserComment] = useState('');

  // On comment change
  const userCommentChange = (e) => {
    // Set state for input field
    setUserComment(e.target.value.substring(0, 250));

    // Set state for chars remaining
    let inputString = e.target.value;
    let newChars = inputString.length > 250 ? 0 : 250 - inputString.length;
    setChars(newChars);
  };

  // On form submition
  const onPostClick = (e) => {
    e.preventDefault();
    addComment(userComment);
    setUserComment('');
    setChars(250);
  };

  return (
    <form id='add-com-cont' autoComplete='off' onSubmit={onPostClick}>
      <h3 id='add-com-title' className='header3'>
        Add Comment
      </h3>
      <textarea
        id='comment-input'
        name='userComment'
        placeholder='Type your comment here'
        value={userComment}
        onChange={userCommentChange}
      />
      <div id='add-com-bot'>
        <p id='chars-left' className='body2'>
          {chars} Characters Left
        </p>
        <input
          type='submit'
          className={
            userComment.length > 0 ? 'btn1 header4' : 'btn1 header4 disabled'
          }
          value='Post Comment'
        ></input>
      </div>
    </form>
  );
};

export default AddComment;
