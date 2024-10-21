import { Fragment } from "react";
import { AboutSection } from "components/blocks/about-us/AboutSection";
import { BannerVideo } from "components/blocks/includes/BannerVideo";

export default function PortsAndTerminals() {
  return (
    <Fragment>
      <main className="content-wrapper">
        <BannerVideo
          title="Ports & Terminals"
          videoSrc="/media/ports-terminals.mp4"
          posterSrc="/media/ports-and-terminals01.webp"
        ></BannerVideo>
        <section className="wrapper pt-10 py-md-10 py-xl-10 py-xxl-14 position-relative overflow-hidden">
          <div className="shape position-absolute top-min-15 end-10 d-none d-md-block opacity-50">
            <img
              src="/img/icons/shape-up.svg"
              width="200"
              height="200"
              alt=""
              style={{ transform: "rotate(180deg)" }}
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <h2 className="sbttl text-primary">
                  Specialist cover for Port & Terminal Operators, stevedores,
                  Shipping Agents, Freight Forwarders and NVOCC operators.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="wrapper pb-4 pb-lg-5 position-relative overflow-hidden">
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 gy-10">
              <div className="col order-lg-last d-flex">
                <div className="img-box img-box-grd flex-grow-1">
                  <img
                    src="/img/port1.webp"
                    className="w-100 h-100"
                    alt="marine energy"
                  />
                </div>
              </div>
              <div className="col order-lg-first d-flex flex-column">
                <div className="wrapper-content pe-5 d-flex flex-column">
                  <h3 className="sbttl-sm text-primary mb-lg-6">
                    Typical cover for ports and terminals
                  </h3>
                  <p className="mb-lg-10">
                    No two ports or terminals are the same. That’s why we
                    tailor-make policies to reflect the risks you face.
                    Typically, cover may include:
                  </p>
                  <ul className="custom-list">
                    <li>
                      Liabilities for loss of, or damage to, cargo, customers'
                      equipment and ships.
                    </li>
                    <li>
                      Loss of, or damage to, equipment including loss due to
                      strikes, riots and terrorist risks.
                    </li>
                    <li>
                      Liabilities arising from errors and omissions including
                      delay and unauthorized delivery.
                    </li>
                    <li>
                      Third party liabilities including impact and sudden
                      accidental pollution.
                    </li>
                    <li>
                      Fines for regulatory breach such as customs, pollution and
                      safety at work.
                    </li>
                    <li>Wreck removal costs.</li>
                    <li>Investigation, defence and mitigation costs.</li>
                    <li>Disposal costs following an accident.</li>
                    <li>Quarantine and disinfection costs.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Section */}
        <section className="wrapper pt-5 pt-md-10 pb-10 pb-lg-14 position-relative overflow-hidden">
          <div
            className="shape position-absolute bottom-0 end-0 d-none d-md-block opacity-25"
            style={{ scale: 1.2 }}
          >
            <img
              src="/img/icons/shape-up.svg"
              width="200"
              height="200"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 gy-10">
              <div className="col d-flex flex-column">
                <div className="img-box img-box-grd flex-grow-1">
                  <img
                    src="/img/port2.webp"
                    className="w-100 h-100"
                    alt="marine energy"
                  />
                </div>
              </div>
              <div className="col">
                <div className="wrapper-content ps-md-5">
                  <h3 className="sbttl-sm text-primary mb-lg-6 fs-3">
                    Additional cover
                  </h3>
                  <p className="mb-lg-10">
                    TT Club cover is designed to operate alongside other
                    insurances, minimising the chance of gaps or overlapping
                    covers. Additional cover for ports and terminals can
                    include:
                  </p>
                  <ul className="custom-list">
                    <li>Business interruption risks.</li>
                    <li>Fire legal liability.</li>
                    <li>Hull and P&I risks.</li>
                    <li>Infringement of personal rights.</li>
                    <li>Liability as a supplier of advice and information.</li>
                    <li>Locomotives and rolling stock.</li>
                    <li>Machinery and handling equipment.</li>
                    <li>
                      Property, from docks and berths to wharfs and jetties.
                    </li>
                    <li>Rail and road infrastructure.</li>
                    <li>Ships' agency liabilities.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
