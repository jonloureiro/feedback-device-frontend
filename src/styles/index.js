import { loadTheme, initializeIcons } from 'office-ui-fabric-react';

import './style.scss';

initializeIcons();

loadTheme({
  palette: {
    themePrimary: '#247ba0',
    themeLighterAlt: '#f3f9fb',
    themeLighter: '#d2e7f0',
    themeLight: '#aed3e3',
    themeTertiary: '#6aabc6',
    themeSecondary: '#3689ac',
    themeDarkAlt: '#206f91',
    themeDark: '#1b5e7a',
    themeDarker: '#14455a',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#b1b8bb',
    neutralSecondary: '#99a2a4',
    neutralPrimaryAlt: '#828b8e',
    neutralPrimary: '#2e3436',
    neutralDark: '#565f62',
    black: '#42494c',
    white: '#ffffff',
  },
});
