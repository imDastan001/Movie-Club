import { useSelector } from "react-redux";
import Image from "../assets/movie.jpg";
import language from "../utils/language";
const GptSearchBar = () => {
const lang=useSelector(store=>store.language.lang);
  return (
    <>
    <div className="absolute h-full w-full bg-black">
        <img className="h-full w-full  opacity-40" src={Image} alt="backgroundImg" />
      </div>
      <div className="px-6 absolute bg-black bg-opacity-90 flex w-96 mx-auto left-0 right-0 my-32">
        <div className="m-auto bg-black bg-opacity-10 mt-9 mb-9 w-full">

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="py-3 pl-2 text-white bg-gray-800 mb-3 rounded-md w-full"
              type="text"
              placeholder={language[lang].searchBar}
            />
            <br />

            <button
              type="submit"
              className=" text-white mt-4 bg-red-500 rounded-sm p-1 w-full hover:bg-red-600"
            >
              {language[lang].searchButton}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default GptSearchBar;
