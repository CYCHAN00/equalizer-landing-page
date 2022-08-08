import './App.styles.scss';
import { ReactComponent as BgPattern01 } from './assets/bg-pattern-1.svg';

import React from 'react';
import Header from './layouts/header/Header';
import Main from './layouts/main/Main';
import Footer from './layouts/footer/Footer';

const App = () => {
  return (
    <div className='container'>
      <div className='bg'>
        <img
          src={require('./assets/bg-main-desktop.png')}
          alt=''
          className='bg_image'
        />
        <BgPattern01 className='bg_pattern-01'></BgPattern01>
      </div>
      <div className='main-container'>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
