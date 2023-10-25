import MovieCard from "./moviecard";
import { useSelector } from "react-redux";
const MovieList = ({ title , type}) => {


  // const { original_title, vote_average, release_date, poster_path, overview } =
  //   movielist[0];

  return (
    <>
      <div>
        <div>
          <h1 className="text-white text-3xl ml-8">{title}</h1>
        </div>
        <div className="flex overflow-x-scroll">
            {type.map(x=> <MovieCard key={x.id} title={x.original_title} poster={x.poster_path} />)}    
        </div>
       
      </div>
    </>
  );
};
export default MovieList;
