import React from 'react';
import { Layout } from 'components/layout';
import { useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';
import { Flex } from 'components/_global/box';
import Track from 'components/track';
import theme from 'themes';
import { Track as TrackInterface } from 'types/types';

const HOST_NAME = 'http://localhost:3000/'; // Only in development

const Home = ({ defaultTracks }: { defaultTracks: TrackInterface[] }) => {
  const tracks = useSelector(
      (state: RootState) => state.tracks.tracks,
  );
  const data = tracks.length > 1 ? tracks : defaultTracks;
  return (
    <Layout>
      {data.length > 0 && (
        <Flex
          flexWrap="wrap"
          flexDirection={['column', 'row']}
          m="0 auto"
          p={[2, 3, 5]}
          maxWidth={theme.maxHeaderWidth}>
          {
            (data || []).map((trackData) => (
              <Track key={trackData.id} track={trackData} artistId={trackData.artist?.id} />
            ))
          }
        </Flex>
      )}
    </Layout>
  );
};

// Get Default data to show before user searches
Home.getInitialProps = async () => {
  const tracks = await fetch(`${HOST_NAME}/api/tracks?search=music`);
  const data = tracks && await tracks.json();
  return {
    defaultTracks: Object.keys(data.data).length > 0 ? data.data : {},
  };
};

export default Home;
