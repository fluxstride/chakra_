import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { Navigate } from "react-router";
import { authContext } from "../../contexts/authContext";
import DashboardHeader from "./components/DashboardHeader";
import ItemsList from "./components/ItemsList";
const Dashboard = () => {
  const {
    state: { user },
  } = useContext(authContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Box bg="#FAFAFA" height="100vh">
      <DashboardHeader />
      <ItemsList />
    </Box>
  );
};

export default Dashboard;
