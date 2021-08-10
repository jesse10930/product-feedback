import React, { useContext, useEffect, Fragment } from 'react';
import Sidebar from '../home_layouts/Sidebar';
import HomeContainer from '../home_layouts/HomeContainer';
import CommentsComponent from '../comments/CommentsComponent';
import DataContext from '../../context/data/dataContext';
import MobileHeader from '../mobile/MobileHeader';

const Home = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { suggClicked, getData } = dataContext;

  // Effect to get data on initial load
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {!suggClicked ? (
        <div id='sidebar-sugg-layout'>
          <MobileHeader />
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
