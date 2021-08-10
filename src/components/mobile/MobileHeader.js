import React from 'react';
import MobileSidebar from '../mobile/MobileSidebar';

const MobileHeader = () => {
  const onHamburgerClick = (e) => {
    const hamElem = document.getElementById('hamburger');
    const closeElem = document.getElementById('close');
    const htmlDiv = document.getElementsByTagName('HTML')[0];
    const sideBarElem = document.getElementById('mobile-sidebar-overlay');

    hamElem.classList.toggle('hide');
    closeElem.classList.toggle('hide');
    htmlDiv.style.overflow = 'hidden';
    sideBarElem.classList.toggle('hide');
  };

  const onCloseClick = (e) => {
    const hamElem = document.getElementById('hamburger');
    const closeElem = document.getElementById('close');
    const htmlDiv = document.getElementsByTagName('HTML')[0];
    const sideBarElem = document.getElementById('mobile-sidebar-overlay');

    hamElem.classList.toggle('hide');
    closeElem.classList.toggle('hide');
    htmlDiv.style.overflow = 'scroll';
    sideBarElem.classList.toggle('hide');
  };
  return (
    <div id='mobile-header'>
      <div id='mobile-header-left'>
        <h3 id='mobile-header-title' className='header3'>
          Frontend Mentor
        </h3>
        <p id='mobile-header-title-light' className='body2'>
          Feedback Board
        </p>
      </div>
      <div id='ham-close'>
        <div id='hamburger' onClick={onHamburgerClick}>
          <svg width='20' height='17' xmlns='http://www.w3.org/2000/svg'>
            <g fill='#FFF' fillRule='evenodd'>
              <path d='M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z' />
            </g>
          </svg>
        </div>
        <div id='close' className='hide' onClick={onCloseClick}>
          <svg width='18' height='17' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z'
              fill='#FFF'
              fillRule='evenodd'
            />
          </svg>
        </div>
      </div>
      <MobileSidebar />
    </div>
  );
};

export default MobileHeader;
