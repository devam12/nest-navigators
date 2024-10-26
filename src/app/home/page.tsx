"use client"
import AddPropertyModal from "@/components/AddPropertyModal";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Testimonials from "@/components/Testimonials";
import { Box } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

interface Props {
  id: number;
}

const Page: NextPage<Props> = ({}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      {/* <AddPropertyModal
        isOpen={true}
        onClose={() => setModalOpen(false)}
      /> */}
      <HeroBanner/>
      <Testimonials/>
      <Footer/>
      <AddPropertyModal></AddPropertyModal>
    </>
  );
};

export default Page;
