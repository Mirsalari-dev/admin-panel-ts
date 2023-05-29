import React, { useState } from "react";


interface searchContextObj {
  search: string ;
  setSearch: React.Dispatch<React.SetStateAction<string>>
};
interface Props {
  children: React.ReactNode;
}

const SearchContext = React.createContext<searchContextObj>({
  search: "",
  setSearch: (search) => { },
});

export const SearchContextProvider: React.FC<Props> = (props) => {
  const [search, setSearch] = useState("");

  const searchValue: searchContextObj = {
    search,
    setSearch,
  };

  return (
    <SearchContext.Provider value={searchValue}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
