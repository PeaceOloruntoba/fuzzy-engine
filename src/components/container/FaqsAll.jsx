import React from "react";
import FAQ from "./FAQ";

const faqs = [
  {
    question: "What is Easy Ride?",
    answer:
      "Easy Ride is an online taxi service that allows you to conveniently book rides through a mobile app.",
  },
  {
    question: "How can I download the Easy Ride app?",
    answer:
      "You can download the Easy Ride app from the App Store (for iOS) or Google Play Store (for Android) on your smartphone.",
  },
  {
    question: "How do I book a ride?",
    answer:
      "Open the Easy Ride app, enter your destination, and choose your preferred vehicle type. Confirm your booking, and a nearby driver will be assigned to pick you up.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Easy Ride accepts payments through mobile money, cash, credit/debit cards, and digital wallets for your convenience.",
  },
  {
    question: "How can I add my payment details to the app?",
    answer:
      "In the app settings, you can securely add your credit/debit card details or link your digital wallet for seamless transactions.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes, Easy Ride employs industry-standard encryption and security measures to protect your payment information.",
  },
  {
    question: "Can I pay with cash?",
    answer:
      "Yes, Easy Ride accepts cash payments. Simply choose the cash option when confirming your booking.",
  },
  {
    question: "Can I split the fare with others?",
    answer:
      "Easy Ride currently doesn't support fare splitting. However, you can coordinate with your fellow passengers to handle payments separately.",
  },
  {
    question: "How do I cancel a ride?",
    answer:
      "You can cancel a ride through the app before the driver arrives. Note that there might be a cancellation fee depending on how close the driver is to your location.",
  },
  {
    question: "Are there different vehicle options available?",
    answer:
      "Yes, Easy Ride offers a variety of vehicle options to suit your needs, ranging from standard to premium vehicles.",
  },
  {
    question: "How do I contact my driver?",
    answer:
      "Once your ride is confirmed, you can communicate with your driver through the app's messaging feature or by calling the provided number.",
  },
  {
    question: "Is there a loyalty program?",
    answer:
      "Easy Ride may offer a loyalty program. Check the app or website for details on any available rewards or discounts.",
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
