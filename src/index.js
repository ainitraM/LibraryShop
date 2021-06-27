import App from './App';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';

const store = configureStore();

render (
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);
