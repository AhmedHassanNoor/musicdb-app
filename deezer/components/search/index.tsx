import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from 'components/_global/box';
import { setTrack } from 'redux/tracks/actions';
import { css } from '@emotion/react';
import { Input } from 'components/_global/input';
import { FiSearch } from 'react-icons/fi';
import theme from 'themes';

const getSearchedTracks = async (searchParam: string): Promise<any> => {
  const response = await fetch(`/api/tracks?search=${searchParam}`);
  return await response.json();
};

const Search = () => {
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = useState('');

  const handleSubmit = useCallback(() => {
    if (searchParam !== '') {
      return getSearchedTracks(searchParam).then((res) => dispatch(setTrack(res.data)));
    }
  }, [searchParam]);

  return (
    <Box position="relative" width="100%" px="1">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <Input
          css={css`
            border-top: 0;
            border-right: 0;
            border-left: 0;
            border-bottom: 1px solid ${theme.colors.lightGrey};
            &:focus,
            &:active {
              border-bottom: 1px solid ${theme.colors.lime};
            }
          `}
          type="search"
          value={searchParam || ''}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Search for a song, an album or an artist"
          fontSize="2"
          maxLength={50}
        />
        {!searchParam && (
          <Box position="absolute" bottom="1" right="3">
            <FiSearch
              color={theme.colors.lime}
              css={css`
                cursor: pointer;
              `}
            />
          </Box>
        )}
      </form>
    </Box>
  );
};

export default Search;
