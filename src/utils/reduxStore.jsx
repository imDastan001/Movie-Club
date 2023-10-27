import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice"
import GptToogleReducer from "./GptToogleSlice"
import languageReducer from "./languageSlice"


const appStore = configureStore({
reducer:{
    movies:moviesReducer,
    Gpttoogle:GptToogleReducer,
    language:languageReducer,
}

});
export default appStore;