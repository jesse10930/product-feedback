import React from 'react';

const Roadmap = () => {
  return (
    <div id='roadmap-container'>
      <div id='rm-title'>
        <h3 className='header3'>Roadmap</h3>
        <button className='view-btn header4'>View</button>
      </div>
      <div id='rm-list'>
        <div className='rm-list-item'>
          <div id='suggestion-dot' className='dot'></div>
          <div className='body1'>Suggestion</div>
          <div className='body1'>6</div>
        </div>
        <div className='rm-list-item'>
          <div id='planned-dot' className='dot'></div>
          <div className='body1'>Planned</div>
          <div className='body1'>2</div>
        </div>
        <div className='rm-list-item'>
          <div id='in-progress-dot' className='dot'></div>
          <div className='body1'>In-Progress</div>
          <div className='body1'>3</div>
        </div>
        <div className='rm-list-item'>
          <div id='live-dot' className='dot'></div>
          <div className='body1'>Live</div>
          <div className='body1'>1</div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
