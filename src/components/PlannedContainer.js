import React from 'react';
import PlannedCard from './PlannedCard';

const PlannedContainer = ({ plannedArr }) => {
  let count = plannedArr.length;
  return (
    <div className='req-cards-container'>
      <div className='req-cards-title'>
        <h3 className='title-bold header3'>Planned ({count})</h3>
        <p className='title-small body1'>Ideas prioritized for research</p>
      </div>
      {plannedArr.map((plannedItem, i) => (
        <PlannedCard plannedItem={plannedItem} key={i} />
      ))}
    </div>
  );
};

export default PlannedContainer;
