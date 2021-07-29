import React, { useContext, Fragment } from 'react';
import RoadmapHeader from '../roadmap_layouts/RoadmapHeader';
import RoadmapRequests from '../roadmap_layouts/RoadmapRequests';
import CommentsComponent from '../comments/CommentsComponent';
import DataContext from '../../context/data/dataContext';

const RoadmapPage = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { suggClicked } = dataContext;

  // // Effect to set page location
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

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
