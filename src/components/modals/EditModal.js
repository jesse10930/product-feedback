import React, { useState, Fragment, useContext } from 'react';
import DataContext from '../../context/data/dataContext';

const EditModal = ({
  onGoBackClick,
  title,
  description,
  category,
  status,
  id,
}) => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { deleteFeedback, editFeedback } = dataContext;

  // Declare comp level state
  const [activeCategory, setActiveCategory] = useState(category);
  const [activeStatus, setActiveStatus] = useState(status);
  const [open, setOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [feedbackTitle, setFeedbackTitle] = useState(title);
  const [feedbackDetail, setFeedbackDetail] = useState(description);
  const [titleAlert, setTitleAlert] = useState(false);
  const [descAlert, setDescAlert] = useState(false);

  // Check mark markup
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
  const onStatusTriggerClick = () => {
    let newOpenStatus = !openStatus;
    setOpenStatus(newOpenStatus);
  };

  // Close dropdown
  const onOptionClick = (e) => {
    let newActiveCategory = e.target.innerText;
    let newOpen = !open;
    setOpen(newOpen);
    setActiveCategory(newActiveCategory);
  };
  const onStatusOptionClick = (e) => {
    let newActiveStatus = e.target.innerText;
    let newOpenStatus = !openStatus;
    setOpenStatus(newOpenStatus);
    setActiveStatus(newActiveStatus);
  };

  // On title change
  const onTitleChange = (e) => {
    // setFeedbackTitle(e.target.value);
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

  // On delete click
  const onDeleteClick = (e) => {
    e.preventDefault();
    let htmlDiv = document.getElementsByTagName('HTML')[0];
    htmlDiv.style.overflow = 'scroll';
    deleteFeedback(id);
  };

  // On save changes click
  const onSaveChangesClick = (e) => {
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
      editFeedback(
        id,
        feedbackTitle,
        activeCategory,
        activeStatus,
        feedbackDetail
      );
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
        <div className='modal-body modal-body-edit'>
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
              <g fill='none' fillRule='evenodd' transform='scale(1.4)'>
                <circle fill='url(#a)' cx='20' cy='20' r='20' />
                <path
                  d='M19.512 15.367l4.975 4.53-3.8 5.54L11.226 29l4.485-4.1c.759.275 1.831.026 2.411-.594a1.958 1.958 0 00-.129-2.82c-.836-.745-2.199-.745-2.964.068-.57.607-.767 1.676-.44 2.381L11 28.713c.255-1.06.683-2.75 1.115-4.436l.137-.531c.658-2.563 1.287-4.964 1.287-4.964l5.973-3.415zM23.257 12L28 16.443l-2.584 2.606-4.89-4.583L23.257 12z'
                  fill='#FFF'
                  fillRule='nonzero'
                />
              </g>
            </svg>
          </div>
          <h1 className='header1 modal-bold'>Edit '{title}'</h1>
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
          <div className='fb-container'>
            <h4 className='header4 modal-bold'>Update Status</h4>
            <p className='body2 modal-light'>Change feedback state</p>
            <div className='efb-dropdown-wrapper'>
              <div
                className={openStatus ? 'fb-dropdown open' : 'fb-dropdown'}
                onClick={onStatusTriggerClick}
              >
                <div className='fb-select-trigger body2'>{activeStatus}</div>
                <div className='options'>
                  <span className='option body1' onClick={onStatusOptionClick}>
                    Suggestion
                    <Fragment>
                      {activeStatus === 'Suggestion' ? checkMark : null}
                    </Fragment>
                  </span>
                  <span className='option body1' onClick={onStatusOptionClick}>
                    Planned
                    <Fragment>
                      {activeStatus === 'Planned' ? checkMark : null}
                    </Fragment>
                  </span>
                  <span className='option body1' onClick={onStatusOptionClick}>
                    In-Progress
                    <Fragment>
                      {activeStatus === 'In-Progress' ? checkMark : null}
                    </Fragment>
                  </span>
                  <span className='option body1' onClick={onStatusOptionClick}>
                    Live
                    <Fragment>
                      {activeStatus === 'Live' ? checkMark : null}
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
              descAlert || titleAlert ? 'alert-text body3' : 'invisible'
            }
          >
            Can't leave any fields empty
          </p>
          <div className='modal-footer-edit'>
            <button
              className='btn4 header4 modal-delete'
              onClick={onDeleteClick}
            >
              Delete
            </button>
            <button
              className='btn3 header4 modal-cancel'
              onClick={onCancelClick}
            >
              Cancel
            </button>
            <button
              className='btn1 header4 modal-add'
              onClick={onSaveChangesClick}
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
