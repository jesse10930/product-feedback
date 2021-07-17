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

  return (
    <div id='tags-container'>
      {tagLabels.map((label, i) => (
        <Tag key={i} labelName={label} />
      ))}
    </div>
  );
};

export default Tags;
