/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.scss';
import { fetchTitlesList } from '../../store/actions';

const AutoCompleteTextBox = (props) => {
  const { val, onChangeHandler } = props;
  const [filteredQueries, setFilteredQueries] = React.useState([]);

  React.useEffect(() => {
    props.fetchTitlesList();
  }, []);

  React.useEffect(() => {
    const { booksTitlesList } = props;
    console.log('---== booksTitlesList ', booksTitlesList);
    const temp = booksTitlesList.filter(item => item.includes(val) && item !== val);
    setFilteredQueries(temp);
  }, [val]);

  const getKey = React.useCallback(index => Math.random() + new Date().getTime() + index);


  return (
    <div className="auto-complete">
      <input type="text" placeholder="Search books" value={val} onChange={event => onChangeHandler(event.target.value)} />
      {
            val && val.length > 0 && (
            <div>
              <ul>
                {
                    filteredQueries && filteredQueries.map((item, index) => (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                      <li key={getKey(index)} onClick={() => onChangeHandler(item)}>{item}</li>
                    ))
                }
              </ul>
            </div>
            )
      }
    </div>
  );
};

AutoCompleteTextBox.propTypes = {
  val: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  fetchTitlesList: PropTypes.func.isRequired,
  booksTitlesList: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
  booksTitlesList: state.booksTitlesList
});

const mapDispatchToProps = {
  fetchTitlesList
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoCompleteTextBox);
