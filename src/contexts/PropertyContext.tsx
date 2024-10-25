// contexts/PropertyContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  propertyType: string;
  features: string[];
  inquiries: number;
  views: number;
}

interface PropertyContextProps {
  properties: Property[];
  addProperty: (property: Omit<Property, "id" | "inquiries" | "views">) => void;
  isModalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
}

const PropertyContext = createContext<PropertyContextProps | undefined>(
  undefined
);

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const addProperty = (
    property: Omit<Property, "id" | "inquiries" | "views">
  ) => {
    setProperties((prevProperties) => [
      ...prevProperties,
      {
        ...property,
        id: Date.now(),
        inquiries: 0,
        views: 0,
      },
    ]);
  };

  return (
    <PropertyContext.Provider
      value={{ properties, addProperty, isModalOpen, setModalOpen }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const usePropertyContext = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error(
      "usePropertyContext must be used within a PropertyProvider"
    );
  }
  return context;
};
