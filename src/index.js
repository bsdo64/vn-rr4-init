import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './RootApp';
import { Provider } from 'react-redux';
import store from './store';

const render = (Component) => {
  ReactDOM.render(
  <Provider store={store}>
    <Component />
  </Provider>,
    document.getElementById('root')
  );
};

render(RootApp);

if (module.hot) {
  module.hot.accept('./RootApp', () => {
    render(RootApp)
  });
}

