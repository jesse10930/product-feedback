import React, { useContext, useState, Fragment } from 'react';
import EditModal from '../modals/EditModal';
import DataContext from '../../context/data/dataContext';

const CommentsHeader = ({ count, category, reqObj, updateUpvote }) => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { suggCompClicked } = dataContext;

  // Destructure props
  const { upvotes, title, description, id, active } = reqObj;

  // Declare component state
  const [compActive, setCompActive] = useState(active);
  const [compVoteCount, setCompVoteCount] = useState(upvotes);
  const [showModal, setShowModal] = useState(false);

  // On up vote click
  const onUpVoteClick = (e) => {
    let buttonDiv =
      e.target.tagName === 'DIV'
        ? e.target
        : e.target.tagName === 'path'
        ? e.target.parentNode.parentNode
        : e.target.parentNode;
    let newActiveState = !compActive;
    let upVoteVal = parseInt(buttonDiv.childNodes[1].textContent);
    let newCompVal = newActiveState ? upVoteVal + 1 : upVoteVal - 1;

    updateUpvote(upVoteVal, id, newActiveState);
    setCompActive(newActiveState);
    setCompVoteCount(newCompVal);
    e.stopPropagation();
  };

  // Active upvote style
  const activeStyling = {
    backgroundColor: '#4661E6',
    color: '#ffffff',
  };

  // On add feedback button click
  const onEditFeedbackClick = () => {
    let htmlDiv = document.getElementsByTagName('HTML')[0];
    let comsContElem = document.getElementById('coms-cont');

    if (window.innerWidth < 400) {
      comsContElem.style.display = 'none';
    } else {
      htmlDiv.style.overflow = 'hidden';
    }
    setShowModal(true);
  };

  // On modal go back click
  const onGoBackClick = () => {
    let htmlDiv = document.getElementsByTagName('HTML')[0];
    let comsContElem = document.getElementById('coms-cont');
    comsContElem.style.display = 'flex';
    htmlDiv.style.overflow = 'scroll';
    setShowModal(false);
  };

  // Save Changes on edit modal click
  // const onSaveClick = () => {
  //   let htmlDiv = document.getElementsByTagName('HTML')[0];
  //   htmlDiv.style.overflow = 'scroll';
  //   setShowModal(false);
  // }

  // Capitalize status
  const capStatus =
    reqObj.status === 'in-progress'
      ? 'In-Progress'
      : reqObj.status.charAt(0).toUpperCase() + reqObj.status.slice(1);

  // Capitalize category
  const capCategory =
    category.length === 2
      ? category.toUpperCase()
      : category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <Fragment>
      {showModal ? (
        <EditModal
          onGoBackClick={onGoBackClick}
          title={title}
          description={description}
          category={capCategory}
          status={capStatus}
          id={id}
        />
      ) : (
        <div id='comments-header'>
          <div id='coms-head-top'>
            <button className='goback-grey header4' onClick={suggCompClicked}>
              <svg
                id='left-arrow'
                width='7'
                height='10'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6 9L2 5l4-4'
                  stroke='#4661e6'
                  strokeWidth='2'
                  fill='none'
                  fillRule='evenodd'
                />
              </svg>
              Go Back
            </button>
            <button className='btn2 header4' onClick={onEditFeedbackClick}>
              Edit Feedback
            </button>
          </div>
          <div className='suggestion-component active-sugg'>
            <div
              className='upvote'
              onClick={onUpVoteClick}
              style={compActive ? activeStyling : null}
            >
              <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M1 6l4-4 4 4'
                  stroke={compActive ? '#FFFFFF' : '#4661E6'}
                  strokeWidth='2'
                  fill='none'
                  fillRule='evenodd'
                />
              </svg>
              <h4 className='header4'>{compVoteCount}</h4>
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
              <h3 className='header3'>{count}</h3>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CommentsHeader;
