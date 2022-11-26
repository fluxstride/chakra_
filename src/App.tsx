import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import { AuthContextProvider } from "./contexts/authContext";
import { ItemsContextContextProvider } from "./contexts/itemsContext";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AuthContextProvider>
      <ItemsContextContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </ItemsContextContextProvider>
    </AuthContextProvider>
  </ChakraProvider>
);
