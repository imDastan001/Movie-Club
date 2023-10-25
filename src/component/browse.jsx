import Header from "./header";
import MainScreen from "./mainScreen";
import SecondaryScreen from "./secondaryScreen";
import useMovieApi from "../hooks/useMovieapi";
const browse = () => {
    useMovieApi();

  return (
    <>
      <Header />
      <MainScreen/>
      <SecondaryScreen />
    
    </>
  );
};
export default browse;
