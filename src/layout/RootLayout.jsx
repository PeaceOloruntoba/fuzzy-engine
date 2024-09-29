import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/container/Header";
import Navbar from "../components/container/Navbar";
import Footer from "../components/container/Footer";

export default function RootLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="sticky top-0 w-full h-full z-50 bg-white shadow-md">
        <Navbar />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
