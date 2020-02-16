import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBookByTitle } from '../store/actions';

import SearchForm from '../components/search_form';
import BookDisplayCard from '../components/card';

const SearchPage = (props) => {
  const searchFormSubmitHandler = React.useCallback((params) => {
    props.fetchBookByTitle(params);
  });
  const getKey = React.useCallback(index => Math.random() + new Date().getTime() + index);
  const { selectedBooks } = props;
  return (
    <>
      <h1>Search Books</h1>
      <SearchForm submitHandler={searchFormSubmitHandler} />
      <div className="mt-2">
        {
          selectedBooks && selectedBooks.length > 0 ? (
            selectedBooks.map((item, index) => (
              <div key={getKey(index)} className="d-flex">
                <BookDisplayCard details={item} />
              </div>
            ))
          ) : (
            <div>No Books Selected</div>
          )
        }
      </div>
    </>
  );
};

SearchPage.propTypes = {
  fetchBookByTitle: PropTypes.func.isRequired,
  selectedBooks: PropTypes.arrayOf(PropTypes.shape).isRequired
};

const mapStateToProps = state => ({
  selectedBooks: state.selectedBooks
});

const mapDispatchToProps = {
  fetchBookByTitle
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
