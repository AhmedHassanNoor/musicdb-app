import { Box, Flex } from 'components/_global/box';
import React from 'react';
import { Track } from 'types/types';
import { Text } from 'components/_global/typography';
import theme from 'themes';
import Link from 'next/link';
import { secToMinutes } from 'utils/sec-to-minutes';
import { css } from '@emotion/react';

const Track = ({ track, artistId }: {track: Track; artistId?: number }) => {
  if (!track.id && !artistId) {
    return null;
  }
  return (
    <Link href={`/track-details/${artistId}`}>
      {track && (
        <Box
          width={['100%', '50%', '33%']}
          p={2}
          key={track.id}
          boxShadow={theme.shadows.cards}
          mb={3}
        >
          <Box css={css`cursor: pointer`}>
            <img width="100%" src={track.album?.cover_medium || track.artist?.picture_medium} />
          </Box>
          <Flex justifyContent="space-between" px={1}>
            <Text fontWeight={400} fontSize={[2, 2]} >
              {track.title}
            </Text>
            {track.duration && (
              <Text fontSize={[2, 2]}>
                {secToMinutes(track.duration)}
              </Text>
            )}
          </Flex>
          <Text fontWeight={300} px={1}>{`By ${track.artist?.name}`}</Text>
          <Text fontWeight={400} px={1} fontSize={[2, 2]} >{track.album?.title}</Text>
        </Box>
      )}
    </Link>
  );
};

export default Track;
