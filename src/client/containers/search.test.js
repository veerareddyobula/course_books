import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import SearchContainer from './search';

const mockStore = configureStore([]);

describe('SearchContainer Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      fetchBookByTitle: [],
      selectedBooks: () => true,
      booksTitlesList: []
    });
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <SearchContainer />
      </Provider>
    );
  });
  it('SearchContainer Component Snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
