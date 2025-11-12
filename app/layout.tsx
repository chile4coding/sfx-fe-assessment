import '@mantine/core/styles.css';
import './globals.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { TranslationProvider } from '@/context/TranslationContext';
import { theme } from '../theme';

export const metadata = {
  title: 'SFx change',
  description:
    'SFx money app is a super money app that uses USDC to enable money transfers from Africa and to make Onchain and Offchain payments easy for Africans in...',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <TranslationProvider>{children}</TranslationProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
