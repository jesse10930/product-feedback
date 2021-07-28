import React, { useContext } from 'react';
import DataContext from '../../context/data/dataContext';

const RequestCard = ({ reqItem }) => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { updateUpvote, suggCompClicked } = dataContext;

  // Destructure props
  const {
    title,
    category,
    upvotes,
    description,
    comments,
    id,
    status,
    active,
  } = reqItem;

  // Get number of comments
  let commentCount = comments ? comments.length : 0;

  // Capitalize category
  let capCategory =
    category.length === 2
      ? category.toUpperCase()
      : category.charAt(0).toUpperCase() + category.slice(1);

  // Capitalize status
  let capStatus = status.charAt(0).toUpperCase() + status.slice(1);

  // On up vote click
  const onUpVoteClick = (e) => {
    let buttonDiv =
      e.target.tagName === 'BUTTON'
        ? e.target
        : e.target.tagName === 'path'
        ? e.target.parentNode.parentNode
        : e.target.parentNode;
    let newActiveState = !active;
    let upVoteVal = parseInt(buttonDiv.childNodes[1].textContent);

    updateUpvote(upVoteVal, id, newActiveState);
  };

  // On suggestion click
  const callSuggCompClicked = () => {
    let clickedReqItem = reqItem;
    suggCompClicked(clickedReqItem);
  };

  // Active upvote style
  const activeStyling = {
    backgroundColor: '#4661E6',
    color: '#ffffff',
  };

  return (
    <div
      className={
        status === 'planned'
          ? 'req-card req-card-planned'
          : status === 'live'
          ? 'req-card req-card-live'
          : 'req-card req-card-inprogress'
      }
    >
      <div
        className={
          status === 'planned'
            ? 'req-card-top-color req-card-top-planned'
            : status === 'live'
            ? 'req-card-top-color req-card-top-live'
            : 'req-card-top-color req-card-top-inprogress'
        }
      ></div>
      <div className='req-card-title'>
        <div
          className={
            status === 'planned'
              ? 'planned-dot dot'
              : status === 'live'
              ? 'live-dot dot'
              : 'in-progress-dot dot'
          }
        ></div>
        <p className='body1'>{capStatus}</p>
      </div>
      <button
        className='req-card-button title-bold header3'
        onClick={callSuggCompClicked}
      >
        {title}
      </button>
      <p className='body1 title-small'>{description}</p>
      <div className='non-tag header4'>{capCategory}</div>
      <div className='req-card-bottom'>
        <button
          className='req-card-upvote'
          onClick={onUpVoteClick}
          style={active ? activeStyling : null}
        >
          <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1 6l4-4 4 4'
              stroke={active ? '#FFFFFF' : '#4661E6'}
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

export default RequestCard;
