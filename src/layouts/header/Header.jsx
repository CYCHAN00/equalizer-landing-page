import classes from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import React from 'react';

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo className={classes['header_logo']}></Logo>
      <h1 className={classes['header_title']}>
        We make your music sound extraordinary.
      </h1>
      <p className={classes['header_content']}>
        A system audio equalizer specifically designed for Android and iOS.
        Freely tune the way your music sounds with a professional grade
        parametric EQ & volume mixer. Control bass, mids, treble, gain control,
        reverb, and more!
      </p>
    </header>
  );
};

export default Header;
