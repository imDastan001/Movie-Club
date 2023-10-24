import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'Movies',
    name:'trailer',
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerToPlay:(state , action)=>{
            state.nowPlayingTrailer = action.payload
        }
    }


})
export const {addNowPlayingMovies,addTrailerToPlay} = movieSlice.actions;
export default movieSlice.reducer;