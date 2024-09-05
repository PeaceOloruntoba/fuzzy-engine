import React from "react";
import Hero from "../components/container/Hero";
import Services from "../components/container/Services";
import Whys from "../components/container/Whys";
import FaqsAll from "../components/container/FaqsAll";
import Testimonial from "../components/container/Testimonial";
import Contact from "../components/container/Contact";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Services />
      <Whys />
      <FaqsAll />
      <Testimonial />
      <Contact />
      <p>Home Page</p>
    </div>
  );
}
