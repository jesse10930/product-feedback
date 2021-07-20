import React from 'react';
import Sidebar from '../Sidebar';
import SuggestionsContainer from '../SuggestionsContainer';

const Home = () => {
  return (
    <div id='sidebar-sugg-layout'>
      <Sidebar />
      <SuggestionsContainer />
    </div>
  );
};

export default Home;
