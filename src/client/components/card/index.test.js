import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import BookDisplayCard from './index';

const mockStore = configureStore([]);

describe('BookDisplayCard Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({});
    const details = {
      titles: 'Letters from a Self-Made Merchant to His Son',
      queries: 'life sentences book',
      book_id: 2,
      author: 'Anna Quindlen',
      id: 2,
      summary: 'The Book in Three Sentences: The only thing you have that nobody else has is control of your life. The hardest thing of all is to learn to love the journey, not the destination. Get a real life rather than frantically chasing the next level of success.'
    };
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <BookDisplayCard details={details} />
      </Provider>
    );
  });
  it('BookDisplayCard Component Snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
