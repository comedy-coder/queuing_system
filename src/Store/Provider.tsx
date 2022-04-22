import { createContext } from "react";
import { useReducer } from "react";
import reducer, { initState } from "./reducer";
export const Context = createContext<any | null>(null);

const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer<any | null>(reducer, initState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Provider;
