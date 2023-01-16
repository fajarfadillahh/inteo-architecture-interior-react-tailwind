import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, url, className }) {
  return (
    <Link
      to={url}
      className={
        `flex h-[52px] items-center justify-center bg-brown-600 py-4 px-8 font-serif font-semibold uppercase tracking-wide text-white ` +
        className
      }
    >
      {children}
    </Link>
  );
}
