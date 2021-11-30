import React from 'react';
import { Box } from 'components/_global/box';
import { Album, Artist as ArtistInterface, Track } from 'types/types';
import { NextPageContext } from 'next';
import { Layout } from 'components/layout';
import TopTracks from 'components/top-track';
import Artist from 'components/artist';
import Albums from 'components/albums';

interface Props {
  artist: ArtistInterface;
  topList: Track[];
  albums: Album[];
}


const TrackDeatilsPage = ({ artist, topList, albums }: Props) => {
  return (
    <Layout isArtistPage>
      <Box display={['block', 'flex']} my={2}>
        {artist && (
          <Artist hasTopTracks={topList?.length > 0} artist={artist} numOfAlumbs={albums?.length}/>
        )}
        {topList?.length > 0 && (
          <TopTracks topList={topList}/>
        )}
      </Box>
      {albums.length > 0 && (
        <Albums albums={albums} />
      )}
    </Layout>
  );
};

TrackDeatilsPage.getInitialProps = async (context: NextPageContext) => {
  const host = 'http://localhost:3000/'; // Only in development
  const id = typeof context.query.id === 'string' ? context.query.id : undefined;

  if (id !== undefined) {
    const artist = await fetch(`${host}/api/artist?id=${id}`);
    const topList = await fetch(`${host}/api/top-list?id=${id}`);
    const albums = await fetch(`${host}/api/albums?id=${id}`);

    const artistData = artist && await artist.json();
    const topListData = topList && await topList.json();
    const albumsData = topList && await albums.json();

    return {
      artist: !artistData?.error?.message ? artistData : {},
      topList: !topListData?.error?.message ? topListData.data : {},
      albums: !albumsData?.error?.message ? albumsData.data : {},
    };
  }

  return {
    artist: {},
    topList: {},
  };
};

export default TrackDeatilsPage;
