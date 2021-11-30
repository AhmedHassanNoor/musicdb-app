import React from 'react';
import { Box, Flex } from 'components/_global/box';
import { Album } from 'types/types';
import { Text } from 'components/_global/typography';
import theme from 'themes';

const Albums = ({ albums }: { albums: Album[] }) => {
  return (
    <>
      <Text
        textShadow="white 0px 0px 10px;"
        my={2}
        p={2}
        fontFamily={theme.fonts.header}
        color={theme.colors.mediumGrey}
        fontSize="5"
      >
        Albums
      </Text>
      <Flex
        flexWrap="wrap"
        flexDirection={['column', 'row']}
        m="0 auto"
        p={[2, 3]}
        maxWidth={theme.maxHeaderWidth}>
        {
          albums.map((album) => (
            <Box
              width={['100%', '50%', '25%']}
              p={2}
              key={album.id}
              boxShadow={theme.shadows.cards}
              mb={3}
            >
              <Box>
                <img width="100%" src={album.cover_medium} />
              </Box>
              <Text my={2} color={theme.colors.mediumGrey}>{album.title}</Text>
              <Text my={2} color={theme.colors.mediumGrey}>{album.release_date}</Text>
            </Box>
          ))
        }
      </Flex>
    </>
  );
};

export default Albums;
