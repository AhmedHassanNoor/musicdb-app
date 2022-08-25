import React, { memo } from 'react';
import { Box } from 'components/_global/box';
import { Artist } from 'types/types';
import { Text } from 'components/_global/typography';
import theme from 'themes';
import { css } from '@emotion/react';

const Artist = ({
  artist,
  numOfAlumbs,
  hasTopTracks,
}: {
  artist: Artist;
  numOfAlumbs?: number;
  hasTopTracks: boolean;
}) => (
  <>
    <Box px="2" position="relative" width={hasTopTracks ? '100%' : '55%'} m="0 auto">
      <Box opacity="0.7">
        <img
          css={css`
            width: 100%;
          `}
          src={artist.picture_big}
          alt={artist.name}
        />
      </Box>
      <Box position={['relative', 'absolute']} top="40%" left="1" px={['2', '4']} fontWeight={[300, 400]}>
        <Text
          textShadow={[null, 'white 0px 0px 10px']}
          my={2}
          fontFamily={theme.fonts.header}
          color={theme.colors.mediumGrey}
          fontSize={[6, 7]}
          css={css`
            @media ${theme.mediaQueries.tabletUp} {
              color: ${theme.colors.background};
            }
          `}
        >
          {artist.name}
        </Text>
        <Text
          textShadow="white 0px 0px 10px;"
          my={2}
          fontFamily={theme.fonts.header}
          fontSize="2"
          color={theme.colors.mediumGrey}
          css={css`
            @media ${theme.mediaQueries.tabletUp} {
              color: ${theme.colors.background};
            }
          `}
        >
          Fans: {artist.nb_fan}
        </Text>
        <Text
          textShadow="white 0px 0px 10px;"
          my={2}
          fontFamily={theme.fonts.header}
          fontSize="2"
          color={theme.colors.mediumGrey}
          overflow="wrap"
          css={css`
            @media ${theme.mediaQueries.tabletUp} {
              color: ${theme.colors.background};
            }
          `}
        >
          {`${artist.name} have recorded multiple succesful records and a total number of ${numOfAlumbs} albumss.`}
        </Text>
        <Text
          textShadow="white 0px 0px 10px;"
          my={2}
          fontFamily={theme.fonts.header}
          fontSize="2"
          color={theme.colors.mediumGrey}
          overflow="wrap"
          css={css`
            @media ${theme.mediaQueries.tabletUp} {
              color: ${theme.colors.background};
            }
          `}
        >
          {`This is one of the many thing that make her adored and love by ${artist.nb_fan} fans around the globe`}
        </Text>
      </Box>
    </Box>
  </>
);

export default memo(Artist);
