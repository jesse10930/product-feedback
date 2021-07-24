import React, { useContext } from 'react';
import RequestsContainer from '../requests/RequestsContainer';
import DataContext from '../../context/data/dataContext';

const RoadmapRequests = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { requests } = dataContext;

  // Declare requests that are planned, in-progress, or live
  let plannedArr = requests.filter(
    (request) => request['status'] === 'planned'
  );
  let inProgressArr = requests.filter(
    (request) => request['status'] === 'in-progress'
  );
  let liveArr = requests.filter((request) => request['status'] === 'live');

  return (
    <div id='roadmap-reqs'>
      <RequestsContainer
        plannedArr={plannedArr}
        inProgressArr={inProgressArr}
        liveArr={liveArr}
      />
    </div>
  );
};

export default RoadmapRequests;
