import React, { memo, ReactNode } from 'react';
import { Box, Flex } from 'components/_global/box';
import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import { css } from '@emotion/react';

const Layout = ({ children, isArtistPage }: { children: ReactNode; isArtistPage?: boolean }) => (
  <Flex minHeight="100vh" flexDirection="column" width="100%">
    <Head>
      <title>Deezer Music App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Header isArtistPage={isArtistPage} />
    <Box
      mt={5}
      css={css`
        flex: 1 0 auto;
      `}
    >
      {children}
    </Box>
    <Footer />
  </Flex>
);

export default memo(Layout);
