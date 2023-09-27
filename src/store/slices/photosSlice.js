import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import baseApi from '../../api/api';

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  async page => {
    const response = await baseApi.get('photos/', {params: {page: page}});
    return response.data;
  },
);

const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    photos: [],
    page: 1,
    isLoading: false,
    isError: false,
  },
  reducers: {
    getPhotos: (state, action) => {
      state.photos = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    incrementPage: state => {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPhotos.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.page === 1) {
          state.photos = action.payload;
        } else {
          state.photos = [...state.photos, ...action.payload];
        }
      })
      .addCase(fetchPhotos.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const {getPhotos, setPage, incrementPage} = photosSlice.actions;

export default photosSlice.reducer;
