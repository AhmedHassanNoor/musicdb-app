import React from 'react';
import { Box } from 'components/_global/box';
import { Album, Artist as ArtistInterface, Track } from 'types/types';
import { NextPageContext } from 'next';
import Layout from 'components/layout';
import TopTracks from 'components/top-track';
import Artist from 'components/artist';
import Albums from 'components/albums';
import theme from 'themes';

interface Props {
  artist: ArtistInterface;
  topList: Track[];
  albums: Album[];
}

const HOST = 'http://localhost:3000/'; // Only in development

const TrackDeatilsPage = ({ artist, topList, albums }: Props) => (
  <Layout isArtistPage>
    <Box maxWidth={theme.maxHeaderWidth} p={[2, 3, 5]} m="0 auto">
      <Box display={['block', 'flex']} my={2}>
        {!!artist && <Artist hasTopTracks={topList?.length > 0} artist={artist} numOfAlumbs={albums?.length} />}
        {topList?.length > 0 && <TopTracks topList={topList} />}
      </Box>
      {albums.length > 0 && <Albums albums={albums} />}
    </Box>
  </Layout>
);

TrackDeatilsPage.getInitialProps = async (context: NextPageContext) => {
  const id = typeof context.query.id === 'string' ? context.query.id : undefined;

  if (id !== undefined) {
    try {
      const artist = await fetch(`${HOST}/api/artist?id=${id}`).then((data) => data.json());
      const topList = await fetch(`${HOST}/api/top-list?id=${id}`).then((data) => data.json());
      const albums = await fetch(`${HOST}/api/albums?id=${id}`).then((data) => data.json());

      return {
        artist: !!artist ? artist : {},
        topList: !topList?.error?.message ? topList.data : {},
        albums: !albums?.error?.message ? albums.data : {},
      };
    } catch (error) {
      // TODO: If there is an error, show a custom message to the user
      console.log({ error });
    }
  }

  return {
    artist: {},
    topList: {},
  };
};

export default TrackDeatilsPage;
