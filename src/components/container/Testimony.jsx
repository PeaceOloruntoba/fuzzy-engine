import React from "react";
import Image from "next/image";

export default function Testimony({ quote, author, company, avatar }) {
  return (
    <div className="w-full p-8 flex-shrink-0 text-center">
      <div className="p-6 bg-yellow-500 rounded-lg shadow-md">
        <p className="text-xl font-semibold text-slate-900">
          &quot;{quote}&quot;
        </p>
        <div className="flex items-center justify-center mt-6">
          <Image
            src={avatar}
            alt={author}
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>
        <p className="mt-4 font-bold text-lg text-gray-900">{author}</p>
        <p className="text-gray-700">{company}</p>
      </div>
    </div>
  );
}
