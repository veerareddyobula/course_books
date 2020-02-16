import {
  FETCH_TITLES_LIST_PENDING,
  FETCH_TITLES_LIST_SUCCESS,
  FETCH_TITLES_LIST_ERROR
} from '../action_types/fetchTitlesListActionTypes';
import {
  SEARCH_BOOK_BY_ID_PENDING,
  SEARCH_BOOK_BY_ID_SUCCESS,
  SEARCH_BOOK_BY_ID_ERROR
} from '../action_types/searchBookByIdActionTypes';

export const fetchBookByTitle = params => (dispatch) => {
  dispatch({
    type: SEARCH_BOOK_BY_ID_PENDING
  });
  const { query } = params;
  fetch(`/api/find/titles/${query}/0`).then(response => response.json()).then((result) => {
    dispatch({
      type: SEARCH_BOOK_BY_ID_SUCCESS,
      payload: result
    });
  })
    .catch((error) => {
      dispatch({
        type: SEARCH_BOOK_BY_ID_ERROR,
        error
      });
    });
};

export const fetchTitlesList = () => (dispatch) => {
  dispatch({
    type: FETCH_TITLES_LIST_PENDING
  });
  fetch('/api/titles/all').then(response => response.json()).then((result) => {
    dispatch({
      type: FETCH_TITLES_LIST_SUCCESS,
      payload: result
    });
  })
    .catch((error) => {
      dispatch({
        type: FETCH_TITLES_LIST_ERROR,
        payload: error
      });
    });
};
