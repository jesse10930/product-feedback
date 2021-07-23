import React, { useContext, Fragment } from 'react';
import Sidebar from '../Sidebar';
import SuggestionsContainer from '../SuggestionsContainer';
import CommentsComponent from '../CommentsComponent';
import DataContext from '../../context/data/dataContext';

const Home = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { suggClicked } = dataContext;

  return (
    <Fragment>
      {!suggClicked ? (
        <div id='sidebar-sugg-layout'>
          <Sidebar />
          <SuggestionsContainer />
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
