import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authToken } from "../helpers/api";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) navigate("/login");
    navigate("/dashboard");
  }, []);
  return <div>Home</div>;
};

export default Home;
