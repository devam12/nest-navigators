// import localFont from "next/font/local";
import Headers from "@/components/Headers";
import { Box } from "@mui/material";
import { PropertyProvider } from "@/contexts/PropertyContext";
import { FilterProvider } from "@/contexts/FilterContext";

export default function PortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PropertyProvider>
      <FilterProvider>
        <Headers />
        {children}
      </FilterProvider>
    </PropertyProvider>
  );
}
