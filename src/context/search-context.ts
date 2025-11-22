import { createContext } from "react";

export interface SearchContextProps {
  search: string;
  setSearch: (value: string) => void;
}

export const SearchContext = createContext<SearchContextProps>({
  search: "",
  setSearch: () => {},
});
