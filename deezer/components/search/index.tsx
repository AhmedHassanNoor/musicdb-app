import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'components/_global/button';
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

const buttonDefaultStyle = () => css`
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font-size: 20px;
      cursor: pointer;
      outline: inherit;
      `;

const Search = () => {
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = useState('');

  const handleSubmit = (searchParam: string) => {
    if (searchParam !== '') {
      return getSearchedTracks(searchParam).then(
          (res) => dispatch(setTrack(res.data)), // Todo: extract and store the needed partial response data into redux
      );
    }
  };


  return (
    <Box position="relative" width="100%" px="1">
      <form onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(searchParam);
      }}>
        <Input
          css={css`
            border-top: 0;
            border-right: 0;
            border-left: 0;
            border-bottom: 1px solid ${theme.colors.lightGrey};
            &:focus, &:active {
              border-bottom: 1px solid ${theme.colors.lime};
            } 
          `}
          type="text"
          value={searchParam || ''}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Search"
          fontSize="2"
          maxLength={50}
        />
        <Box
          position="absolute"
          top="0"
          right="5"
        >
          <Button
            css={buttonDefaultStyle()}
            type="button"
          >
            <FiSearch color={theme.colors.lime}/>
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Search;
