import axios from "axios";
import apiLogin from "./constants"

export   const sendloginData = async (email,password,navigate) => {

  const data = {
      mail: email,
      pass: password,
    };
    try {
      const response = await axios.post(
        {apiLogin},
        data
      );
      const token = response.data.token;
      localStorage.setItem('token',token);
      console.log("response is send", token);
      navigate('/browse');
    } 
    catch (error) {
      console.log(error);
    }
    
  };