'use client';

import { createTheme, Select, Switch, TextInput } from '@mantine/core';

export const theme = createTheme({
  colors: {
    violet: [
      '#f3e9ff',
      '#e0c7ff',
      '#caa3ff',
      '#b47cff',
      '#a058ff',
      '#943fff',
      '#8d32ff',
      '#7a23e0',
      '#6b1bc7',
      '#5c10ae',
    ],
    green: [
      '#e6fcf5',
      '#c3fae8',
      '#96f2d7',
      '#69e9c3',
      '#41e5af',
      '#25dfa0',
      '#12db8d',
      '#0caf73',
      '#088d5a',
      '#036b42',
      '#6FCF97',
    ],
    orange: [
      '#fff4e6',
      '#ffe8cc',
      '#ffd99f',
      '#ffcd75',
      '#ffc24d',
      '#ffb830',
      '#ffb01d',
      '#e09b0e',
      '#c78700',
      '#ad7200',
    ],
    red: [
      '#ffe0e6',
      '#ffc2d0',
      '#ffa3b9',
      '#ff81a5',
      '#ff6a96',
      '#ff5e8f',
      '#ff548d',
      '#e0477e',
      '#c73d72',
      '#ac3368',
    ],
    cyan: [
      '#e0f7fa',
      '#b2ebf2',
      '#80deea',
      '#4dd0e1',
      '#26c6da',
      '#00bcd4',
      '#00acc1',
      '#0097a7',
      '#00838f',
      '#006064',
    ],
  },
  primaryColor: 'violet',
  primaryShade: { light: 4, dark: 6 },
  fontFamily:
    'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily:
      'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  },
  components: {
    Switch: {
      defaultProps: {
        c: '#969696',
      },
    },
    Select: {
      defaultProps: {
        c: '#969696',
      },
    },
    TextInput: {
      defaultProps: {
        c: '#969696',
      },
    },
    Text: {
      defaultProps: {
        c: '#969696',
      },
    },
    Card: {
      defaultProps: {
        p: 'md',
        radius: 'md',
      },
    },
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
  },
});
