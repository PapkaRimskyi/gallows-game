import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/style.scss';

import Header from './blocks/site-blocks/header/game-header';
import Main from './blocks/site-blocks/main/game-main';
import Footer from './blocks/site-blocks/footer/game-footer';

const root = document.getElementById('root');

function Index() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

ReactDOM.render(<Index />, root);
