import React from 'react';
import classes from './Button.module.scss';
import { ReactComponent as AppleIcon } from '../../assets/icon-apple.svg';
import { ReactComponent as AndroidIcon } from '../../assets/icon-android.svg';
const Button = ({ children, buttonType, ...otherProps }) => {
  const BUTTON_TYPE_CLASSES = {
    ios: 'ios-download',
    android: 'android-download',
  };
  return (
    <button
      className={`${classes.btn} ${
        classes[`${BUTTON_TYPE_CLASSES[buttonType]}`]
      } `}
      {...otherProps}
    >
      {buttonType === 'ios' && (
        <AppleIcon className={classes['btn__icon']}></AppleIcon>
      )}
      {buttonType === 'android' && (
        <AndroidIcon className={classes['btn__icon']}></AndroidIcon>
      )}
      {children}
    </button>
  );
};

export default Button;
