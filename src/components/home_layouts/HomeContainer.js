import React from 'react';
import Header from './Header';
import Suggestions from '../suggestions/Suggestions';

const SuggestionsContainer = () => {
  return (
    <div id='sugg-container'>
      <Header />
      <Suggestions />
    </div>
  );
};

export default SuggestionsContainer;
