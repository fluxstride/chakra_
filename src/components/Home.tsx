import { useEffect } from "react";
import { redirect } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    redirect("/login");
  }, []);
  return <div>Home</div>;
};

export default Home;
