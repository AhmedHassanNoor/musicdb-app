import React from 'react';
import { Flex, Box } from 'components/_global/box';
import Search from 'components/search';
import { css } from '@emotion/react';
import theme from 'themes';
import Link from 'next/link';

const Header = ({ isArtistPage }: { isArtistPage?: boolean }) => {
  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      top="0"
      left="0"
      backgroundColor={theme.colors.background}
      zIndex="9999"
      m="0 auto"
      css={css`
        ${isArtistPage && css`
          border-bottom: 2px solid ${theme.colors.lightGrey}
        `}
      `}
    >
      <Link href="/">
        <Box width={['90px', '70px']} height={['80px', '70px']}>
          <img
            css={css`
              width:100%; 
              cursor: pointer;
            `}
            src="https://e-cdns-files.dzcdn.net/img/common/opengraph-logo.png"
          />
        </Box>
      </Link>
      {!isArtistPage && <Search />}
    </Flex>
  );
};

export default Header;
