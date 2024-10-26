// contexts/FilterContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextType {
  filterType: string;
  searchValue: string;
  setFilterType: (type: string) => void;
  setSearchValue: (value: any) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filterType, setFilterType] = useState("location");
  const [searchValue, setSearchValue] = useState("");

  return (
    <FilterContext.Provider
      value={{ filterType, searchValue, setFilterType, setSearchValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
