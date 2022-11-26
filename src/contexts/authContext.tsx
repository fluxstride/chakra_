import { createContext, ReactNode, useReducer } from "react";

export const authContext = createContext({} as any);

const initialState = {
  user: sessionStorage.getItem("user") || null,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SIGNUP":
      sessionStorage.setItem("user", JSON.stringify(action.payload.user));
      sessionStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
      };
    case "VERIFY_USER":
      sessionStorage.setItem("user", JSON.stringify(action.payload.user));
      sessionStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
      };
    case "LOGOUT":
      sessionStorage.clear();
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const authToken = sessionStorage.getItem("token") || null;
  console.log(authToken);
  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};
