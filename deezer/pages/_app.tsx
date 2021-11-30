import type { AppProps } from 'next/app';
import { Provider as StoreProvider } from 'react-redux';
import store from 'redux/store';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StoreProvider store={store}>
    <Component {...pageProps} />
  </StoreProvider>
);

export default MyApp;
