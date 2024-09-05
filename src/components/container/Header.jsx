import React from "react";
import { MdMail } from "react-icons/md";

export default function Header() {
  return (
    <div className="w-full bg-yellow-500 text-white font-semibold md:text-xl text-sm">
      <div className="flex gap-4 items-cente justify-center">
        <span className="flex gap-2 items-center justify-center">
          <MdMail />
          <a href="mailto:easinglife95@gmail.com">easinglife95@gmail.com</a>
        </span>
      </div>
    </div>
  );
}
