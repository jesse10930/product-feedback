import React, { useContext, useEffect, Fragment } from 'react';
import RoadmapHeader from '../roadmap_layouts/RoadmapHeader';
import RoadmapRequests from '../roadmap_layouts/RoadmapRequests';
import CommentsComponent from '../comments/CommentsComponent';
import DataContext from '../../context/data/dataContext';
import MobileRoadmapDisplay from '../mobile/MobileRoadmapDisplay';

const RoadmapPage = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { suggClicked, getData } = dataContext;

  // Effect to get data on initial load
  useEffect(() => {
    getData();
    const htmlDiv = document.getElementsByTagName('HTML')[0];
    htmlDiv.style.overflow = 'scroll';
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {!suggClicked ? (
        <div id='roadmap-page'>
          <RoadmapHeader />
          <MobileRoadmapDisplay />
          <RoadmapRequests />
        </div>
      ) : (
        <div id='sugg-comments'>
          <CommentsComponent />
        </div>
      )}
    </Fragment>
  );
};

export default RoadmapPage;
