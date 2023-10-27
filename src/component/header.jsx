import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleGpt } from "../utils/GptToogleSlice";
import { changeLang } from "../utils/languageSlice";
import language from "../utils/language";

const header = (signin) => {
  const toogle = useSelector((store) => store.Gpttoogle.toogle);
  const lang = useSelector((store) => store.language.lang);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    dispatch(changeLang("en"));
    toogle&&dispatch(toogleGpt());
    localStorage.removeItem("token");
    navigate("/");
  };
  const handleClick = (e) => {
    dispatch(changeLang(e.target.value));
  };

  const handleGptToogle = () => {
    dispatch(toogleGpt());
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/browse");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="flex   justify-between absolute z-10 bg-gradient-to-b from-black w-screen">
        <img className="w-60 mt-3" src={Logo} alt="MovieClub logo" />
        <div>
          {token && (
            <button
              onClick={handleGptToogle}
              className="text-white font-bold mr-9 bg-blue-600 px-8 py-2 my-3 rounded-md hover:bg-blue-800"
            >
              {toogle ? language[lang].Homepage : "GPT Search"}
            </button>
          )}
          {token && (
            <button
              onClick={handleLogout}
              className="text-white font-bold mr-9 bg-red-600 px-8 py-2 my-3 rounded-md hover:bg-red-800"
            >
              {toogle ? language[lang].signout : "Sign Out"}
            </button>
          )}
          {toogle && (
            <select
              name="Language"
              id="lang"
              className="bg-black text-white p-2 rounded-md"
              onClick={handleClick}
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          )}
        </div>
      </div>
    </>
  );
};
export default header;
