import React from 'react';
import RequestCard from './RequestCard';

const RequestsContainer = ({ plannedArr, inProgressArr, liveArr }) => {
  // Declare component level state
  let reqArrs = [plannedArr, inProgressArr, liveArr];

  return reqArrs.map((reqArr, i) => (
    <div className='req-cards-container' key={i}>
      <div className='req-cards-title'>
        <h3 className='title-bold header3'>
          {reqArrs[0].length > 0
            ? reqArr[0].status.charAt(0).toUpperCase() +
              reqArr[0].status.slice(1)
            : ''}{' '}
          ({reqArr.length})
        </h3>
        <p className='title-small body1'>Ideas prioritized for research</p>
      </div>
      {reqArr.map((reqItem, j) => (
        <RequestCard reqItem={reqItem} key={j} />
      ))}
    </div>
  ));
};

export default RequestsContainer;
