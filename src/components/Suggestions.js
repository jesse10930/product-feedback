import React, { useContext } from 'react';
import Suggestion from './Suggestion';
import DataContext from '../context/data/dataContext';

const Suggestions = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { requests } = dataContext;

  // Declare requests that are suggestions
  let suggestionsObj = requests.filter(
    (request) => request['status'] === 'suggestion'
  );

  return (
    <div id='all-suggs'>
      {suggestionsObj.map((suggestionItem, i) => (
        <Suggestion suggestionItem={suggestionItem} key={i} />
      ))}
    </div>
  );
};

export default Suggestions;
