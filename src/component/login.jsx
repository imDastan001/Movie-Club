import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/movie.jpg";
import { validcheck } from "../utils/validation";
import {sendloginData} from "../utils/loginData"
import {registeration} from "../utils/registerData"
import Header from "./header"

const login = () => {
  const navigate = useNavigate();  
  // useStates 
  const [IsSignin, setIsSignin] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Username, setUsername] = useState("");

  // validation functions 
  const Dovalidation = () => {
    const message = validcheck(email, password) 
    if (message === null) {
      IsSignin?sendloginData(email,password,navigate):setIsSignin(registeration(Username,email,password));
      
    }
    else{
    setErrorMessage(message);
    }
  };
  
  const toogleIsSignin = () => {
    console.log(IsSignin);
    setIsSignin(!IsSignin);
  };

  // webpage 
  return (
    
    <>
    <Header/>
      <div className="absolute h-full w-full">
        <img className="h-full w-full" src={Image} alt="backgroundImg" />
      </div>

      <div className="px-6 absolute bg-black bg-opacity-90 flex w-96 mx-auto left-0 right-0 my-32">
        <div className="m-auto bg-black bg-opacity-10 mt-9 mb-9 w-full">
          <h1 className="pt-3 text-3xl font-bold text-white mb-4">
            {IsSignin ? "Sign in" : "Sign up"}
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {!IsSignin && (
              <input
                className="py-3 pl-2 text-white bg-gray-800 mb-3 rounded-md w-full"
                type="text"
                placeholder="Full Name"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
            )}
            <input
              className="py-3 pl-2 text-white bg-gray-800 mb-3 rounded-md w-full"
              type="text"
              placeholder="Email or Phonenumber"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              className=" py-3 pl-2  text-white bg-gray-800 rounded-md w-full"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <p className="text-red-600 mt-1">{ErrorMessage}</p>
            <button
              type="submit"
              className=" text-white mt-4 bg-red-500 rounded-sm p-1 w-full hover:bg-red-600"
              onClick={Dovalidation}
            >
              {IsSignin ? "Sign in" : "Sign up"}
            </button>
          </form>
          <p
            className="text-white mt-4 text-lg cursor-pointer"
            onClick={toogleIsSignin}
          >
            {IsSignin
              ? "New user? Sign up now."
              : "Already Sign up? Sign in now"}
          </p>
        </div>
      </div>
    </>
  );
};

export default login;
