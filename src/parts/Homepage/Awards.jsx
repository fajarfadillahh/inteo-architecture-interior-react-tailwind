import React from "react";

import AwardsImg1 from "../../assets/images/awards-icon-(1).svg";
import AwardsImg2 from "../../assets/images/awards-icon-(2).svg";
import AwardsImg3 from "../../assets/images/awards-icon-(3).svg";
import AwardsImg4 from "../../assets/images/awards-icon-(4).svg";

export default function Awards() {
  return (
    <section className="awards pb-16">
      <div className="awards__wrapper bg-black py-12">
        <div className="awards__container container">
          <div className="awards__group grid grid-cols-2 gap-12 sm:justify-items-center lg:grid-cols-4">
            <div className="awards__content grid gap-4 md:grid-cols-[repeat(2,max-content)] md:items-center">
              <img
                src={AwardsImg1}
                alt="awards icon"
                className="awards__content-icon w-16 sm:w-20"
              />
              <h3 className="awards__content-text text-[15px] font-medium text-white">
                German Design
                <br />
                Award 2022
              </h3>
            </div>

            <div className="awards__content grid gap-4 md:grid-cols-[repeat(2,max-content)] md:items-center">
              <img
                src={AwardsImg2}
                alt="awards icon"
                className="awards__content-icon w-16 sm:w-20"
              />
              <h3 className="awards__content-text text-[15px] font-medium text-white">
                Gold A' Design
                <br />
                Award 2022
              </h3>
            </div>

            <div className="awards__content grid gap-4 md:grid-cols-[repeat(2,max-content)] md:items-center">
              <img
                src={AwardsImg3}
                alt="awards icon"
                className="awards__content-icon w-16 sm:w-20"
              />
              <h3 className="awards__content-text text-[15px] font-medium text-white">
                IF2M Design
                <br />
                Award 2022
              </h3>
            </div>

            <div className="awards__content grid gap-4 md:grid-cols-[repeat(2,max-content)] md:items-center">
              <img
                src={AwardsImg4}
                alt="awards icon"
                className="awards__content-icon w-16 sm:w-20"
              />
              <h3 className="awards__content-text text-[15px] font-medium text-white">
                Good Design
                <br />
                Award 2022
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
