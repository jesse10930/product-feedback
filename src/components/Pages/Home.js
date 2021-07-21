import React, { useContext, Fragment } from 'react';
import Sidebar from '../Sidebar';
import SuggestionsContainer from '../SuggestionsContainer';
import SuggestionComments from '../SuggestionComments';
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
          <SuggestionComments />
        </div>
      )}
    </Fragment>
  );
};

export default Home;
