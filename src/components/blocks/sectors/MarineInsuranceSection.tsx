import React from 'react';

const MarineInsuranceSection: React.FC = () => {
  return (
    <section className="wrapper py-10 py-lg-14 position-relative overflow-hidden">
      <div
        className="shape position-absolute d-none d-md-block"
        style={{ top: '-18%', left: '-5.5%', scale: 1.3 }}
      >
        <img
          src="/img/icons/shape-down.svg"
          width="200"
          height="200"
          alt=""
          style={{ transform: 'rotate(90deg)' }}
        />
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 gx-lg-10 gx-xl-14 gy-8">
          <div className="col d-flex order-lg-last">
            <div className="img-box img-box-grd flex-grow-1">
              <img
                src="/img/marine-img.webp"
                alt="marine energy"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
          <div className="col d-flex flex-column order-lg-first">
            <div className="wrapper-content h-100">
              <h2 className="sbttl text-primary mb-lg-6">
                Regional leaders in Industrial and Marine Insurance
              </h2>
              <p>
                Our regional and international insurance markets give us access to secure the most
                competitive and comprehensive insurance protection in line with your risk exposures.
                Our in-depth experience handling regional claims has enhanced our relationships with
                supporting insurers.
              </p>
              <p>
                Our relationship does not cease on the placing of the insurance covers, but continues as
                a working partnership with you to ensure the continued understanding of your insurance
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarineInsuranceSection;
