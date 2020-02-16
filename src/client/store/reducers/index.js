import { combineReducers } from 'redux';
import booksTitlesList from './_fetchTitlesListReducer';
import selectedBooks from './_searchBookByIdReducer';

export default combineReducers({
  booksTitlesList,
  selectedBooks
});
