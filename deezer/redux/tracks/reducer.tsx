import {
  Track,
} from 'types/types';
import { createReducer } from 'typesafe-actions';
import { setTrack, clearTrack } from './actions';

const emptyTracks: Track = {
  id: 0,
  duration: undefined,
  explicit_content_cover: undefined,
  explicit_content_lyrics: undefined,
  explicit_lyrics: undefined,
  link: '',
  md5_image: '',
  preview: '',
  rank: 0,
  readable: false,
  title: '',
  title_short: '',
  title_version: '',
  album: undefined,
  artist: undefined,
  type: '',
};

interface State {
  tracks: Track[];
}

const initialState: State = {
  tracks: [emptyTracks],
};

const trackReducer = createReducer(initialState)
    .handleAction(setTrack, (state, { payload }) => ({
      ...state,
      tracks: payload,
    }))
    .handleAction(clearTrack, () => initialState);

export default trackReducer;
export type trackState = ReturnType<typeof trackReducer>;

