import {DefaultTheme} from '@react-navigation/native';

const Theme = {
  ...DefaultTheme,
  colors: {
    primary: '#75dafe',
    secondary: '#3c6c82',
    white: '#ffffff',
    error: '#f27474',
    warning: '#f8bb86',
    info: '#3fc3ee',
    buttonBackground: '#6b9fca',
    successBackground: '#59bbe1',
    failureBackground: '#f77985',
    transparent: '#00000000',
  },
};

export {Theme};

export type IColors = {
  primary: string;
  secondary: string;
  white: string;
  error: string;
  warning: string;
  info: string;
  buttonBackground: string;
  successBackground: string;
  failureBackground: string;
  transparent: string;
};
