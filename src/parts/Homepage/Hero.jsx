import React from "react";

import HeroImg from "../../assets/images/hero-image.png";
import HeroImgBtn from "../../assets/images/hero-button.svg";

export default function Hero() {
  return (
    <section className="hero pt-32 lg:pt-40">
      <div className="hero__wrapper grid gap-16">
        <div className="hero__container container">
          <div className="hero__data text-center sm:mx-auto sm:max-w-md md:max-w-xl lg:max-w-2xl">
            <h1 className="hero__title section-title md:text-[52px] lg:text-[58px]">
              make your home cozy and elegant
            </h1>
            <p className="hero__text section-text">
              We turn your empty house to a lovely home, making the compact
              spaces with sapce saving furnitures. Making the unique tastes of
              yours into reality!
            </p>
          </div>
        </div>

        <div className="hero__overlay relative h-[640px]">
          <button className="hero__overlay-button absolute left-1/2 -top-[60px] w-[120px] -translate-x-1/2 lg:left-[15%]">
            <img src={HeroImgBtn} alt="hero btn" />
          </button>

          <img
            src={HeroImg}
            alt="hero img"
            className="hero__overlay-img h-full w-full object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
}
