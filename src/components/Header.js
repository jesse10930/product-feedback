import React, { useState, useContext } from 'react';
import DataContext from '../context/data/dataContext';

const Header = () => {
  // Declare component level state
  const [hide, setHide] = useState(true);
  const [curDisplay, setCurDisplay] = useState('Most Upvotes');

  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { requests } = dataContext;

  // Get suggestion count
  let suggCount = 0;
  for (let i = 0; i < requests.length; i++) {
    if (requests[i]['status'] === 'suggestion') {
      suggCount += 1;
    }
  }

  // On sort by click
  const onSortByClick = () => {
    let newHide = !hide;
    setHide(newHide);
  };

  // On sort by option click
  const onSortByOptionClick = (e) => {
    let newCurDisplay = e.target.value
      ? e.target.value
      : e.target.parentNode.value;
    let newHide = !hide;

    setCurDisplay(newCurDisplay);
    setHide(newHide);

    e.target.lastElementChild
      ? e.target.lastElementChild.classList.toggle('invisible')
      : e.target.nextSibling.classList.toggle('invisible');
  };

  return (
    <div id='header-container'>
      <img
        id='header-img'
        src={require('../images/favicon-32x32.png').default}
        alt='icon'
      />
      <h3 id='sugg-count' className='header3'>
        {suggCount} Suggestions
      </h3>
      <div id='sort-btn-n-dropdown'>
        <button className='sort-by' onClick={onSortByClick}>
          <p className='body3'>Sort by:</p>
          <h4 className='header4'>{curDisplay}</h4>
          {hide ? (
            <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1 1l4 4 4-4'
                stroke='#ffffff'
                strokeWidth='2'
                fill='none'
                fillRule='evenodd'
              />
            </svg>
          ) : (
            <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1 6l4-4 4 4'
                stroke='#ffffff'
                strokeWidth='2'
                fill='none'
                fillRule='evenodd'
              />
            </svg>
          )}
        </button>
        <div
          className={hide ? 'dropdown-container hide' : 'dropdown-container'}
        >
          <button
            className='dropdown-text'
            value='Most Upvotes'
            onClick={onSortByOptionClick}
          >
            <p className='body1'>Most Upvotes</p>
            <svg
              className={curDisplay === 'Most Upvotes' ? '' : 'invisible'}
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='11'
            >
              <path
                fill='none'
                stroke='#AD1FEA'
                strokeWidth='2'
                d='M1 5.233L4.522 9 12 1'
              />
            </svg>
          </button>
          <button
            className='dropdown-text'
            value='Least Upvotes'
            onClick={onSortByOptionClick}
          >
            <p className='body1'>Least Upvotes</p>
            <svg
              className={curDisplay === 'Least Upvotes' ? '' : 'invisible'}
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='11'
            >
              <path
                fill='none'
                stroke='#AD1FEA'
                strokeWidth='2'
                d='M1 5.233L4.522 9 12 1'
              />
            </svg>
          </button>
          <button
            className='dropdown-text'
            value='Most Comments'
            onClick={onSortByOptionClick}
          >
            <p className='body1'>Most Comments</p>
            <svg
              className={curDisplay === 'Most Comments' ? '' : 'invisible'}
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='11'
            >
              <path
                fill='none'
                stroke='#AD1FEA'
                strokeWidth='2'
                d='M1 5.233L4.522 9 12 1'
              />
            </svg>
          </button>
          <button
            className='dropdown-text'
            value='Least Comments'
            onClick={onSortByOptionClick}
          >
            <p className='body1'>Least Comments</p>
            <svg
              className={curDisplay === 'Least Comments' ? '' : 'invisible'}
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='11'
            >
              <path
                fill='none'
                stroke='#AD1FEA'
                strokeWidth='2'
                d='M1 5.233L4.522 9 12 1'
              />
            </svg>
          </button>
        </div>
      </div>
      <button id='header-btn' className='btn1 header4'>
        <svg width='9' height='9' xmlns='http://www.w3.org/2000/svg'>
          <text
            transform='translate(-24 -20)'
            fill='#F2F4FE'
            fillRule='evenodd'
            fontFamily='Jost-Bold, Jost'
            fontSize='14'
            fontWeight='bold'
          >
            <tspan x='24' y='27.5'>
              +
            </tspan>
          </text>
        </svg>
        Add Feedback
      </button>
    </div>
  );
};

export default Header;
