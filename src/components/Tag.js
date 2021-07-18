import React, { useState, useEffect } from 'react';

const Tag = ({ labelName }) => {
  // Component leve state
  const [active, setActive] = useState(false);

  // Effect to set initial active state
  useEffect(() => {
    if (labelName === 'All') {
      setActive(true);
    }
    // eslint-disable-next-line
  }, []);

  // Set active state on click
  const onTagClick = () => {
    let newActiveState = !active;
    setActive(newActiveState);
  };

  return (
    <div
      className={active ? 'tag-active tag header4' : 'tag header4'}
      onClick={onTagClick}
    >
      {labelName}
    </div>
  );
};

export default Tag;
