import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/container/Header";

export default function RootLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}
