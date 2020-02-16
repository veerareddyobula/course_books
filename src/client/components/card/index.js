import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const BookDisplayCard = (props) => {
  const { details } = props;
  console.log('--== TableDisplay --= ', details);
  return (
    <div className="card">
      <div>Title</div>
      <div>{details.titles}</div>
      <div>Author</div>
      <div>{details.author}</div>
      <div>Short Summary</div>
      <div className="truncate">{details.summary}</div>
    </div>
  );
};

BookDisplayCard.propTypes = {
  details: PropTypes.shape.isRequired
};

export default BookDisplayCard;
