import React from 'react';
import classes from './Footer.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as FbIcon } from '../../assets/icon-facebook.svg';
import { ReactComponent as InsIcon } from '../../assets/icon-instagram.svg';
import { ReactComponent as TwtIcon } from '../../assets/icon-twitter.svg';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Logo className={classes['footer__logo']}></Logo>
      <p className={classes.copyright}>
        All rights reserved © Equalizer 2021 <br></br>Have any problems? Contact
        us via social media or email us at <span>equalizer@example.com</span>
      </p>
      <div className={classes.link}>
        <FbIcon className={classes['footer__icon']}>
          <path fill='current'></path>
        </FbIcon>
        <InsIcon className={classes['footer__icon']}>
          <path fill='current'></path>
        </InsIcon>
        <TwtIcon className={classes['footer__icon']}>
          <path fill='current'></path>
        </TwtIcon>
      </div>
    </div>
  );
};

export default Footer;
