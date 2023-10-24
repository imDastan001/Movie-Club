import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import VideoBackground from "./videoBackground"
const MainScreen = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movie) return;
  const mainMovie = movie[1];

  const {original_title,overview,id}=mainMovie
  




  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id}/>
    </>
  );
};
export default MainScreen;
