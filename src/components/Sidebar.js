import React from 'react';
import Fembanner from './Fembanner';
import Tags from './Tags';
import Roadmap from './Roadmap';

const Sidebar = () => {
  return (
    <div id='side-bar-container'>
      <Fembanner />
      <Tags />
      <Roadmap />
    </div>
  );
};

export default Sidebar;
