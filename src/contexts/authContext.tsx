import { createContext, ReactNode } from "react";

const authContext = createContext({});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <authContext.Provider value={{ user: null }}>
      {children}
    </authContext.Provider>
  );
};
