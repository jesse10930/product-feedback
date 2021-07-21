import React, { useContext } from 'react';
import PlannedContainer from './PlannedContainer';
import InProgressContainer from './InProgressContainer';
import LiveContainer from './LiveContainer';
import DataContext from '../context/data/dataContext';

const RoadmapRequests = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { requests } = dataContext;

  // Declare requests that are suggestions
  let plannedArr = requests.filter(
    (request) => request['status'] === 'planned'
  );

  //
  let inProgressArr = requests.filter(
    (request) => request['status'] === 'in-progress'
  );
  let liveArr = requests.filter((request) => request['status'] === 'live');

  return (
    <div id='roadmap-reqs'>
      <PlannedContainer plannedArr={plannedArr} />
      <InProgressContainer inProgressArr={inProgressArr} />
      <LiveContainer liveArr={liveArr} />
    </div>
  );
};

export default RoadmapRequests;
