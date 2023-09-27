import {configureStore} from '@reduxjs/toolkit';
import photoReducer from './slices/photosSlice';

export default configureStore({
  reducer: {photos: photoReducer},
});
