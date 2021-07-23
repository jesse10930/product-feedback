import React, { useContext, Fragment } from 'react';
import RoadmapHeader from '../RoadmapHeader';
import RoadmapRequests from '../RoadmapRequests';
import CommentsComponent from '../CommentsComponent';
import DataContext from '../../context/data/dataContext';

const RoadmapPage = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { suggClicked } = dataContext;

  return (
    <Fragment>
      {!suggClicked ? (
        <div id='roadmap-page'>
          <RoadmapHeader />
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
