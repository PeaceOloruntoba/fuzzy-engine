import React from "react";
import Hero from "../components/container/Hero";
import Services from "../components/container/Services";
import Whys from "../components/container/Whys";
import FaqsAll from "../components/container/FaqsAll";
import Testimony from "../components/container/Testimony";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Services />
      <Whys />
      <FaqsAll />
      <Testimony />
      <p>Home Page</p>
    </div>
  );
}
