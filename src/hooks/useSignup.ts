import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/auth";

const useSignUp = () => {
  return useMutation({
    mutationFn: signup,
    onSuccess: (newUser) => {
      localStorage.setItem("token", newUser.token);
      return newUser.userInfo;
    },
    onError: (error) => {
      console.log(error, error.message);
    },
  });
};

export default useSignUp;
