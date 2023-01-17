import React from "react";

import AwardsImg1 from "../../assets/images/awards-icon-(1).svg";
import AwardsImg2 from "../../assets/images/awards-icon-(2).svg";
import AwardsImg3 from "../../assets/images/awards-icon-(3).svg";
import AwardsImg4 from "../../assets/images/awards-icon-(4).svg";

export default function Awards() {
  return (
    <section className="awards bg-black py-12">
      <div className="awards__container container">
        <div className="awards__group grid grid-cols-2 gap-12">
          <div className="awards__content grid gap-4">
            <img
              src={AwardsImg1}
              alt="awards icon"
              className="awards__content-icon w-16"
            />
            <h3 className="awards__content-text text-[15px] font-medium text-white">
              German Design
              <br />
              Award 2022
            </h3>
          </div>

          <div className="awards__content grid gap-4">
            <img
              src={AwardsImg2}
              alt="awards icon"
              className="awards__content-icon w-16"
            />
            <h3 className="awards__content-text text-[15px] font-medium text-white">
              Gold A' Design
              <br />
              Award 2022
            </h3>
          </div>

          <div className="awards__content grid gap-4">
            <img
              src={AwardsImg3}
              alt="awards icon"
              className="awards__content-icon w-16"
            />
            <h3 className="awards__content-text text-[15px] font-medium text-white">
              IF2M Design
              <br />
              Award 2022
            </h3>
          </div>

          <div className="awards__content grid gap-4">
            <img
              src={AwardsImg4}
              alt="awards icon"
              className="awards__content-icon w-16"
            />
            <h3 className="awards__content-text text-[15px] font-medium text-white">
              Good Design
              <br />
              Award 2022
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
