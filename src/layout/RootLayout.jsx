import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/container/Header";
import Navbar from "../components/container/Navbar";

export default function RootLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="sticky z-50">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}
