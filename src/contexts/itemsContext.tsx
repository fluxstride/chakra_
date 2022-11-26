import { createContext, ReactNode, useReducer } from "react";

export const itemsContext = createContext<any>({});

//
const initialState: any = [];

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCH_ITEMS":
      return [...action.payload];
    case "CREATE_ITEM":
      return [...state, action.payload];
    case "DELETE_ITEM":
      return [
        ...state.filter((item: any) => item.uuid !== action.payload.uuid),
      ];

    default:
      return state;
  }
};

export const ItemsContextContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <itemsContext.Provider value={{ state, dispatch }}>
      {children}
    </itemsContext.Provider>
  );
};
