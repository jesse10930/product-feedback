import React from 'react';
import RequestCard from './RequestCard';

const RequestsContainer = ({ plannedArr, inProgressArr, liveArr }) => {
  // Declare props into an array
  let reqArrs = [plannedArr, inProgressArr, liveArr];

  // Declare title messages
  let titleMsgs = {
    planned: 'Ideas prioritized for research',
    'in-progress': 'Currently being developed',
    live: 'Released features',
  };

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
        <p className='title-small body1'>{titleMsgs[reqArr[0].status]}</p>
      </div>
      {reqArr.map((reqItem, j) => (
        <RequestCard reqItem={reqItem} key={j} />
      ))}
    </div>
  ));
};

export default RequestsContainer;
