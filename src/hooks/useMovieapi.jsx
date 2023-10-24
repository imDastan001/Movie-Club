import { API_Option } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from "../utils/movieSlice"

const useMovieApi= ()=>{

const dispatch =useDispatch();

  const MoviedbCall = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_Option
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results))
  };

  useEffect(() => {
    MoviedbCall();
  }, []);

}
export default useMovieApi;
