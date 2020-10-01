/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './redux-files/reducers/main-reducer';

import '../sass/style.scss';

import Header from './blocks/site-blocks/header/game-header';
import Main from './blocks/site-blocks/main/game-main';
import Footer from './blocks/site-blocks/footer/game-footer';

const root = document.getElementById('root');
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function Index() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Footer />
    </Provider>
  );
}

ReactDOM.render(<Index />, root);
