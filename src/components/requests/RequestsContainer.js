import React from 'react';
import RequestCard from './RequestCard';

const RequestsContainer = ({ plannedArr, inProgressArr, liveArr }) => {
  // Declare props into an array, sorted by upvotes
  let reqArrs = [
    plannedArr.sort((a, b) =>
      !a.upvotes || !b.upvotes ? 1 : b.upvotes - a.upvotes
    ),
    inProgressArr.sort((a, b) =>
      !a.upvotes || !b.upvotes ? 1 : b.upvotes - a.upvotes
    ),
    liveArr.sort((a, b) =>
      !a.upvotes || !b.upvotes ? 1 : b.upvotes - a.upvotes
    ),
  ];

  // Declare title messages
  let titleMsgs = {
    planned: 'Ideas prioritized for research',
    'in-progress': 'Currently being developed',
    live: 'Released features',
  };

  return reqArrs.map((reqArr, i) =>
    reqArr.length === 0 ? (
      <div
        className='empty-div invisible'
        key={Math.floor(Math.random() * 1000)}
      ></div>
    ) : (
      <div
        id={'req-cards-cont-' + i}
        key={i}
        className={
          window.innerWidth > 400
            ? 'req-cards-container'
            : i === 0
            ? 'req-cards-container'
            : 'req-cards-container hide'
        }
      >
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
    )
  );
};

export default RequestsContainer;
