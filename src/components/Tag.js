import React from 'react';

const Tag = ({ labelName, activeProp, onTagClick }) => {
  return (
    <button
      className={activeProp ? 'tag-active tag header4' : 'tag header4'}
      value={labelName}
      onClick={onTagClick}
    >
      {labelName}
    </button>
  );
};

export default Tag;
