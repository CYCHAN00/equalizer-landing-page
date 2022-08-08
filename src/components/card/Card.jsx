import classes from './Card.module.scss';

import React from 'react';
import Button from '../button/Button';

const Card = () => {
  return (
    <div className={classes.card}>
      <h2 className={classes['card__title']}>Premium EQ</h2>
      <p className={classes['card__details']}>
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </p>
      <div className={classes['card__price']}>
        <span className={classes['card____price--money']}>$4</span>
        <span className={classes['card____price--unit']}>/ month</span>
      </div>
      <div className={[classes['card__button']]}>
        <Button buttonType='ios' type='button'>
          iOS Download
        </Button>
        <Button buttonType='android' type='button'>
          Android Download
        </Button>
      </div>
    </div>
  );
};

export default Card;
