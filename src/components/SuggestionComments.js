import React, { useContext } from 'react';
import SuggestionCommentsHeader from './SuggestionCommentsHeader';
import SuggestionCommentsContainer from './SuggestionCommentsContainer';
import AddComment from './AddComment';
import DataContext from '../context/data/dataContext';

const SuggestionComments = () => {
  // Declare and destructure context
  const dataContext = useContext(DataContext);
  const { activeRequest } = dataContext;

  // Descturcutre active request
  const { category, comments, description, title, upvotes } = activeRequest;

  // Get comments count
  let commentsCount = comments ? comments.length : 0;

  // Capitalize category
  let capCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div id='sugg-comms-cont'>
      <SuggestionCommentsHeader
        upvotes={upvotes}
        title={title}
        description={description}
        category={capCategory}
        count={commentsCount}
      />
      <SuggestionCommentsContainer comments={comments} />
      <AddComment />
    </div>
  );
};

export default SuggestionComments;
