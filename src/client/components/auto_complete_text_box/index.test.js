import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import AutoCompleteTextBox from './index';

const mockStore = configureStore([]);

describe('AutoCompleteTextBox Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      fetchTitlesList: () => true,
      booksTitlesList: []
    });
    const changeHandler = () => true;
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <AutoCompleteTextBox val="Fr" onChangeHandler={changeHandler} />
      </Provider>
    );
  });
  it('AutoCompleteTextBox Component Snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
