import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/style.scss';

import Header from './components/header/header-site';
import PlayArea from './components/main/play-area';
import Footer from './components/footer/footer-site';

ReactDOM.render(<Header />, document.querySelector('.game-header'));
ReactDOM.render(<PlayArea />, document.querySelector('.game-main'));
ReactDOM.render(<Footer />, document.querySelector('.game-footer'));
