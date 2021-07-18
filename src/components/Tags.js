import React, { useState } from 'react';
import Tag from './Tag';

const Tags = () => {
  // Component level state
  const [tagLabels, setTagLabels] = useState([
    'All',
    'UI',
    'UX',
    'Enhancement',
    'Bug',
    'Feature',
  ]);
  const [current, setCurrent] = useState('All');

  // When tag is clicked
  const onTagClick = (e) => {
    setCurrent(e.target.value);
  };

  return (
    <div id='tags-container'>
      {tagLabels.map((label, i) => (
        <Tag
          key={i}
          labelName={label}
          activeProp={label === current ? true : false}
          onTagClick={onTagClick}
        />
      ))}
    </div>
  );
};

export default Tags;
