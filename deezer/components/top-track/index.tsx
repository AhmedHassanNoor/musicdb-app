import React, { memo } from 'react';
import { Box, Flex } from 'components/_global/box';
import { Track } from 'types/types';
import { Text } from 'components/_global/typography';
import theme from 'themes';
import { secToMinutes } from 'utils/sec-to-minutes';

const TopTracks = ({ topList }: { topList: Track[] }) => (
  <Box px="2" width="100%">
    <Text
      textShadow="white 0px 0px 10px;"
      my={2}
      p={2}
      fontFamily={theme.fonts.header}
      color={theme.colors.mediumGrey}
      fontSize={[4, 5]}
    >
      Top tracks
    </Text>
    {topList.map((list, index) => (
      <Flex
        width="100%"
        p={2}
        key={list.id}
        justifyContent="space-between"
        borderBottom={`1px solid ${theme.colors.mediumGrey}`}
        my="3"
        color={theme.colors.mediumGrey}
      >
        <Text>{`${index + 1} - ${list.title}`}</Text>
        {list.duration && <Text>{secToMinutes(list.duration)}</Text>}
      </Flex>
    ))}
  </Box>
);

export default memo(TopTracks);
