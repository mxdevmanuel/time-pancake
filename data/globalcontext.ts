import { createContext } from "react";

export interface IGlobalContext {
  location?: string;
  showSearch: (val: boolean) => void;
}

export const GlobalContext = createContext<IGlobalContext>({
  showSearch: (_val: boolean) => {},
});
