import axios from "axios";
import {apiRegister} from "./constants"
export const registeration = async (Username,email,password) => {
    const data = {
      name: Username,
      mail: email,
      pass: password,
    };

    try {
      const response = await axios.post(
        apiRegister,
        data
      );

    } catch (error) {
      console.log(error);
    }
        return true;
  };