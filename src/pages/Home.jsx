import React from "react";
import Hero from "../components/container/Hero";
import Services from "../components/container/Services";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Services />
      <p>Home Page</p>
    </div>
  );
}
