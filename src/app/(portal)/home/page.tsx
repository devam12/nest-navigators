"use client";
import AddPropertyModal from "@/components/AddPropertyModal";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Testimonials from "@/components/Testimonials";
import { NextPage } from "next";

interface Props {
  id: number;
}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <HeroBanner />
      <Testimonials />
      <Footer />
      <AddPropertyModal></AddPropertyModal>
    </>
  );
};

export default Page;
