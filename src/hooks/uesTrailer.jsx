import { useEffect} from "react";
import { API_Option } from "../utils/secret";
import { useDispatch } from "react-redux";
import { addTrailerToPlay } from "../utils/movieSlice";





const useTrailer=(id)=>{
   
    const dispatch = useDispatch()
    const findTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+id+"/videos",
      API_Option
    );
    const newdata = await data.json();

    const trailer = newdata.results.filter((x) => x.type === "Trailer");
    dispatch(addTrailerToPlay(trailer[0]));
  };

  useEffect(() => {
    findTrailer();
  }, []);
}
export default useTrailer;