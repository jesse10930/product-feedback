import React, { useContext, useState } from 'react';
import DataContext from '../context/data/dataContext';

const AddComment = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { curUSer, addComment } = dataContext;

  // Declare comp level state
  const [chars, setChars] = useState(250);

  // Calculate numer of chars remaing in input
  const keyStroke = (e) => {
    let inputString = e.target.value;
    let newChars = 250 - inputString.length;
    setChars(newChars);
  };

  const onPostClick = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <form id='add-com-cont'>
      <h3 id='add-com-title' className='header3'>
        Add Comment
      </h3>
      <input id='comment-input' type='text' onKeyUp={keyStroke} />
      <div id='add-com-bot'>
        <p id='chars-left' className='body2'>
          {chars} Characters Left
        </p>
        <button type='submit' className='btn1 header4' onClick={onPostClick}>
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default AddComment;
