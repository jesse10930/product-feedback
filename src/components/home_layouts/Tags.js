import React, { useState, useContext } from 'react';
import Tag from './Tag';
import DataContext from '../../context/data/dataContext';

const Tags = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { activeTag, updateActiveTag } = dataContext;

  // Component level state
  const [tagLabels] = useState([
    'All',
    'UI',
    'UX',
    'Enhancement',
    'Bug',
    'Feature',
  ]);

  // When tag is clicked
  const onTagClick = (e) => {
    updateActiveTag(e.target.value);
  };

  return (
    <div id='tags-container'>
      {tagLabels.map((label, i) => (
        <Tag
          key={i}
          labelName={label}
          activeProp={label === activeTag ? true : false}
          onTagClick={onTagClick}
        />
      ))}
    </div>
  );
};

export default Tags;
