
import {
  SEARCH_BOOK_BY_ID_PENDING,
  SEARCH_BOOK_BY_ID_SUCCESS,
  SEARCH_BOOK_BY_ID_ERROR
} from '../action_types/searchBookByIdActionTypes';

const searchBookById = (selectedBooks = [], action) => {
  const { payload } = action;

  switch (action.type) {
    case SEARCH_BOOK_BY_ID_PENDING:
      return [...selectedBooks];
    case SEARCH_BOOK_BY_ID_SUCCESS:
      console.log('--== searchBookById :: SEARCH_BOOK_BY_ID_SUCCESS ', payload.data);
      selectedBooks.push(...payload.data);
      return [...selectedBooks];
    case SEARCH_BOOK_BY_ID_ERROR:
      return [...selectedBooks];
    default:
      return [...selectedBooks];
  }
};

export default searchBookById;
