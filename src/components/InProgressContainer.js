import React from 'react';
import InProgressCard from './InProgressCard';

const InProgressContainer = ({ inProgressArr }) => {
  let count = inProgressArr.length;

  return (
    <div className='req-cards-container'>
      <div className='req-cards-title'>
        <h3 className='title-bold header3'>In-Progress ({count})</h3>
        <p className='title-small body1'>Currently being developed</p>
      </div>
      {inProgressArr.map((inProgressItem, i) => (
        <InProgressCard inProgressItem={inProgressItem} key={i} />
      ))}
    </div>
  );
};

export default InProgressContainer;
