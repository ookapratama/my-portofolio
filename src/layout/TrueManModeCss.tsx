"use client";
import { context } from "@/context/context";
import { useContext } from "react";


const TrueManModeCss = () => {
  
  const ctx = useContext(context);
  if (!ctx) throw new Error("Context not found");

  const { mode } = ctx;
  return (
    <head>
      <link
        rel="stylesheet"
        href={`css/style-${mode ? "dark" : "light"}.css`}
      />
    </head>
  );
};
export default TrueManModeCss;
