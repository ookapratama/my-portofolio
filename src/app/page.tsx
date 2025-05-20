"use client";
import Counter from "@/components/Counter";
import Price from "@/components/Price";
import Publications from "@/components/Publications";
import Services from "@/components/Services";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import VideoResume from "@/components/VideoResume";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
import { useContext, useEffect } from "react";

const ctx = useContext(context);
if (!ctx) throw new Error("Context not found");

const Index = () => {
  const { banner_image_function, banner_type_function } = ctx;
  useEffect(() => {
    banner_image_function("/img/banner2.jpg");
    banner_type_function("image");
  }, []);
  return (
    <TrueManLayout>
      {/* stats */}
      <Counter />
      {/* stats end */}
      {/* text */}
      <Story />
      {/* text end */}
      {/* video resume */}
      <VideoResume />
      {/* video resume end */}
      {/* services */}
      <Services />
      {/* services end */}
      {/* price plans */}
      <Price />
      {/* price plans end */}
      {/* testimonials */}
      <Testimonials />
      <Publications />
    </TrueManLayout>
  );
};
export default Index;
