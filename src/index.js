import React from 'react';
import { render } from 'react-dom';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import TestBoard from './components/TestBoard';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <TestBoard />
  </Provider>,
  document.getElementById('root'),
);
