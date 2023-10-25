import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'all Movies',
    name:'trailer',
    name:'Popular Movies',
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null,
        PlayingPopularMovies:null,
        PlayingTopRatedMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerToPlay:(state , action)=>{
            state.nowPlayingTrailer = action.payload
        },
        addPlayingPopularMovies:(state , action)=>{
            state.PlayingPopularMovies = action.payload
        },
        addPlayingTopRatedMovies:(state,action)=>{
            state.PlayingTopRatedMovies = action.payload
        }
    }


})
export const {addNowPlayingMovies,addTrailerToPlay,addPlayingPopularMovies,addPlayingTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;