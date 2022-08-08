import classes from './Main.module.scss';

import { ReactComponent as BgPattern02 } from '../../assets/bg-pattern-2.svg';
import React from 'react';
import Card from '../../components/card/Card';

const Main = () => {
  return (
    <div className={classes['main__bg']}>
      <BgPattern02 className={classes['main__bg--pattern']}></BgPattern02>
      <img
        src={require('../../assets/illustration-app.png')}
        alt='MockUp'
        className={classes['main__mobile']}
      />
      <div className={classes['main__card']}>
        <Card></Card>
      </div>
    </div>
  );
};

export default Main;
