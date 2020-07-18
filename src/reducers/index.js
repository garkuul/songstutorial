import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'Hardwired',
      duration: '5:02',
    },
    {
      title: 'Seek and Destroy',
      duration: '4:22',
    },
    {
      title: 'For Whom The Bell Tolls',
      duration: '8:23',
    },
    {
      title: 'Ragnarok',
      duration: '3:43',
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
