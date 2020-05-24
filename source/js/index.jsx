import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/style.scss';

import Header from './components/header-components/header-site';
import PlayArea from './components/play-area-component/play-area';

ReactDOM.render(<Header />, document.querySelector('.game-header'));
ReactDOM.render(<PlayArea />, document.querySelector('.game-main'));
