import { useEffect } from "react";
import {API_Option} from "../utils/secret"; 
import { useDispatch } from "react-redux";
import { addPlayingPopularMovies } from "../utils/movieSlice";

const usePopularMovie = ()=>{

const dispatch = useDispatch();
const callPopularMovie = async()=>{
const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_Option);
const data = await response.json();
dispatch(addPlayingPopularMovies(data.results));




}

useEffect(()=>{
    callPopularMovie();
},[]);


    
}
export default usePopularMovie;