import { createAction } from 'typesafe-actions';
import { Track } from 'types/types';

export const setTrack = createAction('@tracks/SET_TRACK')<Track[]>();

export const clearTrack = createAction('@tracks/CLEAR_TRACK')();
