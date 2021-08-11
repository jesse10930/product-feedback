import React, { useContext } from 'react';
import DataContext from '../../context/data/dataContext';

const MobileRoadmapDisplay = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { requests } = dataContext;

  // Declare requests that are planned, in-progress, or live
  let plannedArr = requests.filter(
    (request) => request['status'] === 'planned'
  );
  let inProgressArr = requests.filter(
    (request) => request['status'] === 'in-progress'
  );
  let liveArr = requests.filter((request) => request['status'] === 'live');

  // On Dislay option click
  const onTitleDisplayClick = (e) => {
    const planElem = document.getElementById('mob-reqs-disp-planned');
    const inProgElem = document.getElementById('mob-reqs-disp-inprogress');
    const liveElem = document.getElementById('mob-reqs-disp-live');
    const planCardsElem = document.getElementById('req-cards-cont-0');
    const inProgCardsElem = document.getElementById('req-cards-cont-1');
    const liveCardsElem = document.getElementById('req-cards-cont-2');

    if (e.target.id === 'planned-opt') {
      planElem.classList.add('active-display-title');
      inProgElem.classList.remove('active-display-title');
      liveElem.classList.remove('active-display-title');
      planCardsElem.classList.remove('hide');
      inProgCardsElem.classList.add('hide');
      liveCardsElem.classList.add('hide');
    } else if (e.target.id === 'in-prog-opt') {
      planElem.classList.remove('active-display-title');
      inProgElem.classList.add('active-display-title');
      liveElem.classList.remove('active-display-title');
      planCardsElem.classList.add('hide');
      inProgCardsElem.classList.remove('hide');
      liveCardsElem.classList.add('hide');
    } else {
      planElem.classList.remove('active-display-title');
      inProgElem.classList.remove('active-display-title');
      liveElem.classList.add('active-display-title');
      planCardsElem.classList.add('hide');
      inProgCardsElem.classList.add('hide');
      liveCardsElem.classList.remove('hide');
    }
  };

  return (
    <div id='mob-reqs-disp'>
      <div
        id='mob-reqs-disp-planned'
        className='mob-reqs-disp-opt active-display-title'
      >
        <p id='planned-opt' className='body2' onClick={onTitleDisplayClick}>
          Planned ({plannedArr.length})
        </p>
      </div>
      <div id='mob-reqs-disp-inprogress' className='mob-reqs-disp-opt'>
        <p id='in-prog-opt' className='body2' onClick={onTitleDisplayClick}>
          In-Progress ({inProgressArr.length})
        </p>
      </div>
      <div id='mob-reqs-disp-live' className='mob-reqs-disp-opt'>
        <p id='live-opt' className='body2' onClick={onTitleDisplayClick}>
          Live ({liveArr.length})
        </p>
      </div>
    </div>
  );
};

export default MobileRoadmapDisplay;
