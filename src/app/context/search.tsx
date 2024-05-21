"use client"
// import {createContext, useContext ,useState } from "react"



// export const  SearchContext=createContext();

// export const SearchContextProvider=({children})=>{
//     const [searchActive,setSearchActive] = useState(false)
//     return <SearchContext.Provider value={{searchActive,setSearchActive}}>

//         {children}
//     </SearchContext.Provider>
// };
// export const useSearchContext =()=> useContext(SearchContext)


import React, { createContext, useContext, useState } from "react";

interface SearchContextInterface {
  searchActive: boolean;
  setSearchActive: (isActive: boolean) => void;
}

export const SearchContext = createContext<SearchContextInterface>({
  searchActive: false,
  setSearchActive: () => {},
});

// SearchContextProvider.tsx (assuming a separate file)
export const SearchContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
};