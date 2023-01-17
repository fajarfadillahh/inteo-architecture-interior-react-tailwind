import React from "react";

import Header from "../components/Header";
import Hero from "../parts/Homepage/Hero";
import Awards from "../parts/Homepage/Awards";
import About from "../parts/Homepage/About";
import Metrics from "../parts/Homepage/Metrics";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <Awards />
      <About />
      <Metrics />
    </>
  );
}
