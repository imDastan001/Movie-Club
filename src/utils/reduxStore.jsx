import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice"
import trailerReducer from "./movieSlice"

const appStore = configureStore({
reducer:{
    movies:moviesReducer,
}

});
export default appStore;