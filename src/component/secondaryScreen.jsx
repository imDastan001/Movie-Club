import { useSelector } from "react-redux";
import MovieList from "./movielist"

const SecondaryScreen=()=>{
    const movielist = useSelector((store) => store.movies?.nowPlayingMovies);
    const popularMovieList = useSelector((store)=> store.movies?.PlayingPopularMovies);
    const topRatedMovieList = useSelector((store)=> store.movies?.PlayingTopRatedMovies);
    if (!movielist || !popularMovieList || !topRatedMovieList) return;
return(
<>
<div className="bg-black">
<MovieList title={"Now Playing"} type={movielist}/>
<MovieList title={"Popular Movies"} type={popularMovieList}/>
<MovieList title={"Top Rated Movies"} type={topRatedMovieList}/>

</div>
</>

    )
}
export default SecondaryScreen;