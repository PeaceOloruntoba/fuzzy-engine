import React from "react";
import FAQ from "./FAQ";

const faqs = [
  {
    question: "What is Easy Ride?",
    answer:
      "Easy Ride is a convenient ride-booking app that connects passengers to drivers, providing reliable and affordable transportation services.",
  },
  {
    question: "How do I book a ride?",
    answer:
      "Simply open the Easy Ride app, set your pick-up and destination locations, select your vehicle type, and confirm your booking. A driver will be assigned to pick you up.",
  },
  {
    question: "What are the payment methods?",
    answer:
      "You can pay using credit/debit cards, digital wallets, and even cash, giving you multiple options for a seamless experience.",
  },
  {
    question: "Can I track my ride?",
    answer:
      "Yes, you can track your ride in real-time through the Easy Ride app to see your driver’s location and estimated time of arrival.",
  },
  {
    question: "How do I cancel my ride?",
    answer:
      "You can cancel your ride directly from the app before the driver arrives. Please note, cancellation charges may apply.",
  },
  {
    question: "What safety features are available?",
    answer:
      "Easy Ride has several safety measures, including driver verification, GPS tracking, and a 24/7 support team to ensure your safety during rides.",
  },
];

export default function FaqsAll() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h1>
        <FAQ faqs={faqs} />
      </div>
    </div>
  );
}
