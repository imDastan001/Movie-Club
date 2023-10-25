import Header from "./header";
import MainScreen from "./mainScreen";
import SecondaryScreen from "./secondaryScreen";
import useMovieApi from "../hooks/useMovieapi";
import usePopularMovie from "../hooks/usePopularmovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
const browse = () => {
    useMovieApi();
    usePopularMovie();
    useTopRatedMovie();

  return (
    <>
      <Header />
      <MainScreen/>
      <SecondaryScreen />
    
    </>
  );
};
export default browse;
