import React, { useState, Fragment, useContext } from 'react';
import DataContext from '../../context/data/dataContext';

const NewModal = ({ onGoBackClick }) => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { addFeedback } = dataContext;

  // Declare comp level state
  const [activeCategory, setActiveCategory] = useState('Feature');
  const [open, setOpen] = useState(false);
  const [feedbackTitle, setFeedbackTitle] = useState('');
  const [feedbackDetail, setFeedbackDetail] = useState('');
  const [titleAlert, setTitleAlert] = useState(false);
  const [descAlert, setDescAlert] = useState(false);

  // Checkmark markup
  const checkMark = (
    <svg xmlns='http://www.w3.org/2000/svg' width='13' height='11'>
      <path
        fill='none'
        stroke='#AD1FEA'
        strokeWidth='2'
        d='M1 5.233L4.522 9 12 1'
      />
    </svg>
  );

  // Show dropdown
  const onTriggerClick = () => {
    let newOpen = !open;
    setOpen(newOpen);
  };

  // Close dropdown
  const onOptionClick = (e) => {
    let newActiveCategory = e.target.innerText;
    let newOpen = !open;
    setOpen(newOpen);
    setActiveCategory(newActiveCategory);
  };

  // On title change
  const onTitleChange = (e) => {
    setFeedbackTitle(e.target.value.substring(0, 50));
  };

  // On details change
  const onDetailChange = (e) => {
    setFeedbackDetail(e.target.value.substring(0, 150));
  };

  // On cancel click
  const onCancelClick = (e) => {
    e.preventDefault();
    onGoBackClick();
  };

  // On add feedback click
  const onAddFeedbackClick = (e) => {
    e.preventDefault();
    if (feedbackTitle.length === 0 && feedbackDetail.length === 0) {
      let newTitleAlert = true;
      let newDescAlert = true;
      setTitleAlert(newTitleAlert);
      setDescAlert(newDescAlert);
    } else if (feedbackTitle.length === 0) {
      let newTitleAlert = true;
      let newDescAlert = false;
      setTitleAlert(newTitleAlert);
      setDescAlert(newDescAlert);
    } else if (feedbackDetail.length === 0) {
      let newTitleAlert = false;
      let newDescAlert = true;
      setTitleAlert(newTitleAlert);
      setDescAlert(newDescAlert);
    } else {
      addFeedback(feedbackTitle, activeCategory, feedbackDetail);
      onGoBackClick();
    }
  };

  return (
    <div className='modal-container'>
      <form className='modal-content'>
        <button className='goback-grey header4' onClick={onGoBackClick}>
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
        <div className='modal-body'>
          <div className='modal-icon'>
            <svg width='56' height='56' xmlns='http://www.w3.org/2000/svg'>
              <defs>
                <radialGradient
                  cx='103.9%'
                  cy='-10.387%'
                  fx='103.9%'
                  fy='-10.387%'
                  r='166.816%'
                  id='a'
                >
                  <stop stopColor='#E84D70' offset='0%' />
                  <stop stopColor='#A337F6' offset='53.089%' />
                  <stop stopColor='#28A7ED' offset='100%' />
                </radialGradient>
              </defs>
              <g fill='none' fillRule='evenodd'>
                <circle fill='url(#a)' cx='28' cy='28' r='28' />
                <path
                  fill='#FFF'
                  fillRule='nonzero'
                  d='M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z'
                />
              </g>
            </svg>
          </div>
          <h1 className='header1 modal-bold'>Create New Feedback</h1>
          <div className='fb-container'>
            <h4 className='header4 modal-bold'>Feedback Title</h4>
            <p className='body2 modal-light'>
              Add a short, descriptive headline
            </p>
            <input
              type='text'
              className={titleAlert ? 'fb-title-input alert' : 'fb-title-input'}
              value={feedbackTitle}
              onChange={onTitleChange}
            />
          </div>
          <div className='fb-container'>
            <h4 className='header4 modal-bold'>Category</h4>
            <p className='body2 modal-light'>
              Choose a category for your feedback
            </p>
            <div className='fb-dropdown-wrapper'>
              <div
                className={open ? 'fb-dropdown open' : 'fb-dropdown'}
                onClick={onTriggerClick}
              >
                <div className='fb-select-trigger body2'>{activeCategory}</div>
                <div className='options'>
                  <span className='option body1' onClick={onOptionClick}>
                    Feature
                    <Fragment>
                      {activeCategory === 'Feature' ? checkMark : null}
                    </Fragment>
                  </span>
                  <span className='option body1' onClick={onOptionClick}>
                    UI
                    <Fragment>
                      {activeCategory === 'UI' ? checkMark : null}
                    </Fragment>
                  </span>
                  <span className='option body1' onClick={onOptionClick}>
                    UX
                    <Fragment>
                      {activeCategory === 'UX' ? checkMark : null}
                    </Fragment>
                  </span>
                  <span className='option body1' onClick={onOptionClick}>
                    Enhancement
                    <Fragment>
                      {activeCategory === 'Enhancement' ? checkMark : null}
                    </Fragment>
                  </span>
                  <span className='option body1' onClick={onOptionClick}>
                    Bug
                    <Fragment>
                      {activeCategory === 'Bug' ? checkMark : null}
                    </Fragment>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='fb-container-lg'>
            <h4 className='header4 modal-bold'>Feedback Detail</h4>
            <p className='body2 modal-light'>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              className={
                descAlert ? 'fb-detail-input alert' : 'fb-detail-input'
              }
              value={feedbackDetail}
              onChange={onDetailChange}
            />
          </div>
          <p
            className={
              titleAlert || descAlert ? 'alert-text body3' : 'invisible'
            }
          >
            Can't leave any fields empty
          </p>
          <div className='modal-footer'>
            <button
              className='btn3 header4 modal-cancel'
              onClick={onCancelClick}
            >
              Cancel
            </button>
            <button
              className='btn1 header4 modal-add'
              onClick={onAddFeedbackClick}
            >
              Add Feedback
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewModal;
