import React from "react";

export default function Metrics() {
  return (
    <section className="metrics pb-16">
      <div className="metrics__container container">
        <div className="metrics__group grid justify-center gap-8">
          <div className="metrics__content inline-flex items-center gap-4">
            <h3 className="metrics__content-number font-serif text-[48px] font-semibold text-black">
              100%
            </h3>
            <p className="metrics__content-text uppercase text-gray-600">
              Satisfition <br />
              cliens
            </p>
          </div>

          <div className="metrics__content inline-flex items-center gap-4">
            <h3 className="metrics__content-number font-serif text-[48px] font-semibold text-black">
              299+
            </h3>
            <p className="metrics__content-text uppercase text-gray-600">
              Employess on <br />
              world
            </p>
          </div>

          <div className="metrics__content inline-flex items-center gap-4">
            <h3 className="metrics__content-number font-serif text-[48px] font-semibold text-black">
              295+
            </h3>
            <p className="metrics__content-text uppercase text-gray-600">
              Projects <br />
              completes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
