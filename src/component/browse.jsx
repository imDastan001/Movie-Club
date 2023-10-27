import Header from "./header";
import MainScreen from "./mainScreen";
import SecondaryScreen from "./secondaryScreen";
import useMovieApi from "../hooks/useMovieapi";
import usePopularMovie from "../hooks/usePopularmovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import GptPage from "./GptPage";
import { useSelector } from "react-redux";
const browse = () => {
  useMovieApi();
  usePopularMovie();
  useTopRatedMovie();

  return (
    <>
      <Header />
      {useSelector((store) => store.Gpttoogle.toogle) ? (
        <GptPage />
      ) : (
        <>
          <MainScreen />
          <SecondaryScreen />
        </>
      )}
    </>
  );
};
export default browse;
