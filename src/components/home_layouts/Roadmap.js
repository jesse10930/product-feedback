import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../../context/data/dataContext';

const Roadmap = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { requests } = dataContext;

  // Get counts for statuses
  let planCount = 0,
    inProgCount = 0,
    liveCount = 0;
  for (let i = 0; i < requests.length; i++) {
    if (requests[i]['status'] === 'live') {
      liveCount += 1;
    } else if (requests[i]['status'] === 'planned') {
      planCount += 1;
    } else if (requests[i]['status'] === 'in-progress') {
      inProgCount += 1;
    }
  }

  return (
    <div id='roadmap-container'>
      <div id='rm-title'>
        <h3 className='header3'>Roadmap</h3>
        <Link to='/roadmappage' className='view-btn header4'>
          View
        </Link>
      </div>
      <div id='rm-list'>
        <div className='rm-list-item'>
          <div className='dot planned-dot'></div>
          <p className='body1'>Planned</p>
          <h3 className='rm-num header3'>{planCount}</h3>
        </div>
        <div className='rm-list-item'>
          <div className='dot in-progress-dot'></div>
          <p className='body1'>In-Progress</p>
          <h3 className='rm-num header3'>{inProgCount}</h3>
        </div>
        <div className='rm-list-item'>
          <div className='dot live-dot'></div>
          <p className='body1'>Live</p>
          <h3 id='test' className='rm-num header3'>
            {liveCount}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
