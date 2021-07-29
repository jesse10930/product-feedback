import React, { useContext, Fragment } from 'react';
import Sidebar from '../home_layouts/Sidebar';
import HomeContainer from '../home_layouts/HomeContainer';
import CommentsComponent from '../comments/CommentsComponent';
import DataContext from '../../context/data/dataContext';

const Home = () => {
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
        <div id='sidebar-sugg-layout'>
          <Sidebar />
          <HomeContainer />
        </div>
      ) : (
        <div id='sugg-comments'>
          <CommentsComponent />
        </div>
      )}
    </Fragment>
  );
};

export default Home;
