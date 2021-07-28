import React, { useContext } from 'react';
import DataContext from '../../context/data/dataContext';

const Suggestion = ({ suggestionItem }) => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { updateUpvote, suggCompClicked } = dataContext;

  // Destructure props
  const { upvotes, title, description, comments, category, id, active } =
    suggestionItem;

  // Get number of comments
  let commentsCount = comments ? comments.length : 0;

  // Capitalize category
  let capCategory =
    category.length === 2
      ? category.toUpperCase()
      : category.charAt(0).toUpperCase() + category.slice(1);

  // On up vote click
  const onUpVoteClick = (e) => {
    let buttonDiv =
      e.target.tagName === 'DIV'
        ? e.target
        : e.target.tagName === 'path'
        ? e.target.parentNode.parentNode
        : e.target.parentNode;
    let newActiveState = !active;
    let upVoteVal = parseInt(buttonDiv.childNodes[1].textContent);

    updateUpvote(upVoteVal, id, newActiveState);
    e.stopPropagation();
  };

  // On suggestion click
  const callSuggCompClicked = () => {
    let clickedSuggItem = suggestionItem;
    suggCompClicked(clickedSuggItem);
  };

  // Active upvote style
  const activeStyling = {
    backgroundColor: '#4661E6',
    color: '#ffffff',
  };

  return (
    <button className='suggestion-component' onClick={callSuggCompClicked}>
      <div
        className='upvote'
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
      </div>
      <div className='tit-desc-cat'>
        <h3 className='header3 sug-title'>{title}</h3>
        <p className='body1 sug-desc'>{description}</p>
        <div>
          <div className='non-tag header4'>{capCategory}</div>
        </div>
      </div>
      <div className='comments-n-num'>
        <svg width='18' height='16' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z'
            fill='#CDD2EE'
            fillRule='nonzero'
          />
        </svg>
        <h3 className='header3'>{commentsCount}</h3>
      </div>
    </button>
  );
};

export default Suggestion;
