import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const testimonialsData = [
  {
    quote: "Flowbite is a true gem in the world of web development...",
    author: "Micheal Gough",
    company: "CEO at Google",
    avatar: "/assets/me.jpg",
  },
  {
    quote:
      "TypeScript has become an indispensable part of our development stack...",
    author: "Micheal Gough",
    company: "CEO at Google",
    avatar: "/assets/me.jpg",
  },
  {
    quote: "Next.js has revolutionized the way we build web applications...",
    author: "Micheal Gough",
    company: "CEO at Google",
    avatar: "/assets/me.jpg",
  },
  {
    quote:
      "Tailwind CSS has been a game-changer for our frontend development workflow...",
    author: "Micheal Jordan",
    company: "CEO at Microsoft",
    avatar: "/assets/me.jpg",
  },
];

export default function Testimonial() {
  return (
    <div className="p-10 bg-white" id="testimonial">
      <p className="text-3xl font-bold text-center mb-4">Testimonials</p>
      <TestimonialSlider testimonials={testimonialsData} />
    </div>
  );
}
