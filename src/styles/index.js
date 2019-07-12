import { loadTheme, initializeIcons } from 'office-ui-fabric-react';

import './style.scss';

initializeIcons();

loadTheme({
  palette: {
    themePrimary: '#00a896',
    themeLighterAlt: '#f1fcfb',
    themeLighter: '#cbf1ed',
    themeLight: '#a0e5de',
    themeTertiary: '#51cbbf',
    themeSecondary: '#15b3a3',
    themeDarkAlt: '#009788',
    themeDark: '#008073',
    themeDarker: '#005e55',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#bab8b7',
    neutralSecondary: '#a3a2a0',
    neutralPrimaryAlt: '#8d8b8a',
    neutralPrimary: '#323130',
    neutralDark: '#605e5d',
    black: '#494847',
    white: '#ffffff',
  },
});
