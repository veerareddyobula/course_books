import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import SearchForm from './index';

const mockStore = configureStore([]);

describe('SearchForm Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      fetchTitlesList: () => true,
      booksTitlesList: []
    });
    const onSubmitHandler = () => true;
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <SearchForm submitHandler={onSubmitHandler} />
      </Provider>
    );
  });
  it('SearchForm Component Snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
