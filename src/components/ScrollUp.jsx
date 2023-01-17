import React, { useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export default function ScrollUp() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className="fixed right-6 bottom-16 inline-flex items-center justify-center bg-brown-600 p-3 text-[1.3rem] text-white"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <RiArrowUpLine />
    </button>
  );
}
