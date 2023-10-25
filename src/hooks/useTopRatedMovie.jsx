import { useEffect } from "react";
import {API_Option} from "../utils/secret"; 
import { useDispatch } from "react-redux";
import { addPlayingTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovie = ()=>{

const dispatch = useDispatch();
const callTopRatedMovie = async()=>{
const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_Option);
const data = await response.json();
dispatch(addPlayingTopRatedMovies(data.results));




}

useEffect(()=>{
    callTopRatedMovie();
},[]);


    
}
export default useTopRatedMovie;