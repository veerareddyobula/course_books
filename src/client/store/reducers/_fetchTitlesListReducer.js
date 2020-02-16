import {
  FETCH_TITLES_LIST_PENDING,
  FETCH_TITLES_LIST_SUCCESS,
  FETCH_TITLES_LIST_ERROR
} from '../action_types/fetchTitlesListActionTypes';

const fetchTitlesList = (booksTitlesList = [], action) => {
  const { payload } = action;
  console.log('--== fetchTitlesList ::: action.type ', payload);
  switch (action.type) {
    case FETCH_TITLES_LIST_PENDING:
      return [...booksTitlesList];
    case FETCH_TITLES_LIST_SUCCESS:
      return [...payload.data];
    case FETCH_TITLES_LIST_ERROR:
      return [...booksTitlesList];
    default:
      return booksTitlesList;
  }
};

export default fetchTitlesList;
