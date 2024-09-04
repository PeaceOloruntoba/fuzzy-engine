import React from "react";

export default function Button({
  className = "",
  type = "",
  value = "",
  onClick,
  ...props
}) {
  return (
    <button className={className} type={type} onClick={onClick} {...props}>
      {value}
    </button>
  );
}
