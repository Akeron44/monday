import { useMutation } from "@tanstack/react-query";
import { login } from "../services/auth";

const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (newUser) => {
      localStorage.setItem("token", newUser.token);
      return newUser.userInfo;
    },
    onError: (error) => {
      console.log(error, error.message);
    },
  });
};

export default useLogin;
