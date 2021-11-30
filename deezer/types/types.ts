export interface Album {
    __typename?: 'Album';
    id: number;
    cover?: string;
    cover_big?: string;
    cover_medium: string;
    cover_small?: string;
    cover_xl?: string;
    md5_image?: string;
    title: string;
    tracklist?: string;
    release_date?: string;
    type: string;
  }

export interface Artist {
    __typename?: 'Artist';
    id: number;
    link?: string;
    name: string;
    picture?: string;
    picture_big?: string;
    picture_medium: string;
    picture_small?: string;
    picture_xl?: string;
    tracklist?: string;
    nb_fan?: number;
    type: string;
    error?: {
      message: string;
    }
  }

export interface Track {
    __typename?: 'Track';
    id: number;
    duration?: number;
    explicit_content_cover?: number;
    explicit_content_lyrics?: number;
    explicit_lyrics?: boolean;
    link?: string;
    md5_image?: string;
    preview?: string;
    rank?: number;
    readable?: boolean;
    title?: string;
    title_short?: string;
    title_version?: string;
    album?: Album;
    artist?: Artist;
    type: string;
}
