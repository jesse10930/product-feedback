import React, { useContext, useEffect } from 'react';
import Suggestion from './Suggestion';
import DataContext from '../context/data/dataContext';

const Suggestions = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { requests, activeTag, sortByFilter } = dataContext;

  // Declare requests that are suggestions
  let suggestionsObj = requests.filter(
    (request) => request['status'] === 'suggestion'
  );

  // Declare filterd suggestions for category filter
  let lowerCaseTag = activeTag.charAt(0).toLowerCase() + activeTag.slice(1);

  let filtered =
    activeTag === 'All'
      ? suggestionsObj
      : suggestionsObj.filter((sug) => sug['category'] === lowerCaseTag);

  // Sort filtered suggestions
  switch (sortByFilter) {
    case 'Most Upvotes':
      filtered.sort((a, b) =>
        !a.upvotes || !b.upvotes ? 1 : b.upvotes - a.upvotes
      );
      break;
    case 'Least Upvotes':
      filtered.sort((a, b) =>
        !a.upvotes || !b.upvotes ? -1 : a.upvotes - b.upvotes
      );
      break;
    case 'Most Comments':
      filtered.sort((a, b) =>
        !a.comments || !b.comments ? 1 : b.comments.length - a.comments.length
      );
      break;
    case 'Least Comments':
      filtered.sort((a, b) =>
        !a.comments || !b.comments ? -1 : a.comments.length - b.comments.length
      );
      break;
    default:
      filtered.sort((a, b) => b.upvotes - a.upvotes);
  }

  // useEffect(() => {
  //   switch (sortByFilter) {
  //     case 'Most Upvotes':
  //       filtered.sort((a, b) =>
  //         !a.upvotes || !b.upvotes ? 1 : b.upvotes - a.upvotes
  //       );
  //       break;
  //     case 'Least Upvotes':
  //       filtered.sort((a, b) =>
  //         !a.upvotes || !b.upvotes ? -1 : a.upvotes - b.upvotes
  //       );
  //       break;
  //     case 'Most Comments':
  //       filtered.sort((a, b) =>
  //         !a.comments || !b.comments ? 1 : b.comments.length - a.comments.length
  //       );
  //       break;
  //     case 'Least Comments':
  //       filtered.sort((a, b) =>
  //         !a.comments || !b.comments
  //           ? -1
  //           : a.comments.length - b.comments.length
  //       );
  //       break;
  //     default:
  //       filtered.sort((a, b) => b.upvotes - a.upvotes);
  //   }
  // }, [sortByFilter]);

  return (
    <div id='all-suggs'>
      {filtered.map((suggestionItem, i) => (
        <Suggestion suggestionItem={suggestionItem} key={i} />
      ))}
    </div>
  );
};

export default Suggestions;
