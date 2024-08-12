import axios from "axios";
import { UserAuthentication } from "../types/auth";

export const signup = async (form: UserAuthentication) => {
  try {
    const response = await axios.post("http://localhost:3000/api/signup", form);
    return response.data;
  } catch (err) {
    throw (err as Error).message;
  }
};

export const login = async (form: UserAuthentication) => {
  try {
    const response = await axios.post("http://localhost:3000/api/auth", form);
    return response.data;
  } catch (err) {
    throw (err as Error).message;
  }
};
