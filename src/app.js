import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Home from './components/Home';
import Activity from './components/CreateActivity';
import configureStore from './configureReduxStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Activity />
  </ Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
