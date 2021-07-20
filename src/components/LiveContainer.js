import React from 'react';
import LiveCard from './LiveCard';

const LiveContainer = ({ liveArr }) => {
  let count = liveArr.length;

  return (
    <div className='req-cards-container'>
      <div className='req-cards-title'>
        <h3 className='title-bold header3'>Live ({count})</h3>
        <p className='title-small body1'>Released features</p>
      </div>
      {liveArr.map((liveItem, i) => (
        <LiveCard liveItem={liveItem} key={i} />
      ))}
    </div>
  );
};

export default LiveContainer;
