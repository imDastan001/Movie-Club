import MovieCard from "./moviecard";
import { useSelector } from "react-redux";
const MovieList = ({ title }) => {
  const movielist = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movielist) return;
  console.log(movielist);
  const { original_title, vote_average, release_date, poster_path, overview } =
    movielist[0];

  return (
    <>
      <div>
        <div>
          <h1 className="text-white text-3xl ml-8">{title}</h1>
        </div>
        <div className="flex overflow-x-auto">
            <MovieCard title={original_title} poster={poster_path} />
            <MovieCard title={original_title} poster={poster_path} />
            <MovieCard title={original_title} poster={poster_path} />
            <MovieCard title={original_title} poster={poster_path} />
            <MovieCard title={original_title} poster={poster_path} />
            <MovieCard title={original_title} poster={poster_path} />
            <MovieCard title={original_title} poster={poster_path} />
            <MovieCard title={original_title} poster={poster_path} />
            <MovieCard title={original_title} poster={poster_path} />
            <MovieCard title={original_title} poster={poster_path} />
            <MovieCard title={original_title} poster={poster_path} />
            <MovieCard title={original_title} poster={poster_path} />
            <MovieCard title={original_title} poster={poster_path} /> 
        </div>
       
      </div>
    </>
  );
};
export default MovieList;
