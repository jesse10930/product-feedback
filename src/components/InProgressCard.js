import React, { useContext, useState } from 'react';
import DataContext from '../context/data/dataContext';

const InProgressCard = ({ inProgressItem }) => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { updateUpvote } = dataContext;

  // Declare component level state
  const [activeUpVote, setActiveUpVote] = useState(false);

  // Destructure props
  const { title, category, upvotes, description, comments, id } =
    inProgressItem;

  // Check if comments exists
  let commentCount = comments ? comments.length : 0;

  // Capitalize category
  let capCategory = category.charAt(0).toUpperCase() + category.slice(1);

  // On up vote click
  const onUpVoteClick = (e) => {
    let buttonDiv =
      e.target.tagName === 'BUTTON'
        ? e.target
        : e.target.tagName === 'path'
        ? e.target.parentNode.parentNode
        : e.target.parentNode;
    let newActiveState = !activeUpVote;
    let upVoteVal = parseInt(buttonDiv.childNodes[1].textContent);

    buttonDiv.classList.toggle('req-card-upvote-active');
    setActiveUpVote(newActiveState);
    updateUpvote(upVoteVal, id, newActiveState);
  };

  return (
    <div className='req-card'>
      <div className='req-card-top-color req-card-top-inprogress'></div>
      <div className='req-card-title'>
        <div className='in-progress-dot dot'></div>
        <p className='body1'>In-progress</p>
      </div>
      <h3 className='title-bold header3'>{title}</h3>
      <p className='body1 title-small'>{description}</p>
      <div className='non-tag header4'>{capCategory}</div>
      <div className='req-card-bottom'>
        <button className='req-card-upvote' onClick={onUpVoteClick}>
          <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1 6l4-4 4 4'
              stroke={activeUpVote ? '#FFFFFF' : '#4661E6'}
              strokeWidth='2'
              fill='none'
              fillRule='evenodd'
            />
          </svg>
          <h4 className='header4'>{upvotes}</h4>
        </button>
        <div className='comments-n-num'>
          <svg width='18' height='16' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z'
              fill='#CDD2EE'
              fillRule='nonzero'
            />
          </svg>
          <h3 className='header3'>{commentCount}</h3>
        </div>
      </div>
    </div>
  );
};

export default InProgressCard;
