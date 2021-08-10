import React from 'react';
import Tags from '../home_layouts/Tags';
import Roadmap from '../home_layouts/Roadmap';

const MobileSidebar = () => {
  return (
    <div id='mobile-sidebar-overlay' className='hide'>
      <div id='mobile-sidebar'>
        <Tags />
        <Roadmap />
      </div>
    </div>
  );
};

export default MobileSidebar;
