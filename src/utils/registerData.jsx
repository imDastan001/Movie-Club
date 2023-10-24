import axios from "axios";
import apiRegister from "./constants"
export const registeration = async (Username,email,password) => {
    const data = {
      name: Username,
      mail: email,
      pass: password,
    };
    console.log(data);
    try {
      const response = await axios.post(
        {apiRegister},
        data
      );
      console.log("respond get " + response);
    } catch (error) {
      console.log(error);
    }
        return true;
  };