import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { authContext } from "../contexts/authContext";
import { API } from "../helpers/api";
import { endpoint } from "../utils";

const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const signUp = async (requestBody: any) => {
    try {
      setIsLoading(true);

      const response = await API.post(
        endpoint.user,
        JSON.stringify(requestBody)
      );

      if (response.status === 201) {
        console.log(response);

        dispatch({
          type: "SIGNUP",
          payload: { user: response.data.user, token: response.data.token },
        });
        setIsLoading(false);
        return navigate("/dashboard");
      }
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { signUp, isLoading, error };
};

export default useSignup;
