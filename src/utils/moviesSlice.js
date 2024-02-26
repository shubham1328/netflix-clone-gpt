import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topratedMovies: null,
    },
    reducers:{
        nowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopratedMovies:(state, action) => {
            state.topratedMovies = action.payload
        },
    }
});

export const { nowPlayingMovies, addTrailerVideo, addPopularMovies, addTopratedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;