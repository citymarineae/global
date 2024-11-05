"use client";

import Image from "next/image";
import SectorItem from "../includes/SectorItem";
import Link from "next/link";



export default function Sectors() {
  return (
    <section className="wrapper bg-primary sctrbs">
      <Image
        className="icone"
        src="/img/icons/icobs.svg"
        alt="Icon"
        width={477}
        height={477}
      />

      <div className="container py-lg-14 py-10"  data-cues="fadeIn">
        <h2 className="sbttl text-white">Sectors</h2>

        <ul className="nav nav-tabs nav-tabs-basic sctnv mb-lg-7 mb-5">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#tab3-1">
              Marine, energy & crewing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab3-2">
              Ports & Terminals
            </a>
          </li>
        </ul>

        <div className="tab-content mt-0 mt-md-5">
          {/* Marine, Energy & Crewing Tab */}
          <div className="tab-pane fade show active" id="tab3-1" data-cues="fadeIn" data-group="In">
            <SectorItem/>

          </div>

          {/* Ports & Terminals Tab */}
          <div className="tab-pane fade" id="tab3-2">
            <div className="row d-flex align-items-center mb-4 mb-lg-0">
              <div className="col-lg-8">
                <h4>Typical cover for ports and terminals</h4>
                <p>
                  No two ports or terminals are the same. That’s why we
                  tailor-make policies to reflect the risks you face. Typically,
                  cover may include:
                </p>
                <ul className="tckul">
                  <li>
                    Liabilities for loss of, or damage to, cargo, customers'
                    equipment and ships
                  </li>
                  <li>
                    Loss of, or damage to, equipment including loss due to
                    strikes, riots, and terrorist risks
                  </li>
                  <li>
                    Liabilities arising from errors and omissions including
                    delay and unauthorized delivery
                  </li>
                  <li>
                    Third-party liabilities including impact and sudden
                    accidental pollution
                  </li>
                  <li>
                    Fines for regulatory breach such as customs, pollution, and
                    safety at work
                  </li>
                  <li>Wreck removal costs</li>
                  <li>Investigation, defense, and mitigation costs</li>
                  <li>Disposal costs following an accident</li>
                  <li>Quarantine and disinfection costs</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <figure>
                  <Image
                    src="/img/pp/sc-001.webp"
                    alt="Ports & Terminals"
                    width={400}
                    height={300}
                  />
                </figure>
              </div>
            </div>

            <div className="row d-flex align-items-center mb-4 mb-lg-0">
              <div className="col-lg-8 order-lg-2">
                <h4>Additional cover</h4>
                <p>
                  TT Club cover is designed to operate alongside other
                  insurances, minimizing the chance of gaps or overlapping
                  covers. Additional cover for ports and terminals can include:
                </p>
                <ul className="tckul">
                  <li>Business interruption risks</li>
                  <li>Fire legal liability</li>
                  <li>Hull and P&I risks</li>
                  <li>Infringement of personal rights</li>
                  <li>Liability as a supplier of advice and information</li>
                  <li>Locomotives and rolling stock</li>
                  <li>Machinery and handling equipment</li>
                  <li>Property, from docks and berths to wharfs and jetties</li>
                  <li>Rail and road infrastructure</li>
                  <li>Ships' agency liabilities</li>
                </ul>
              </div>
              <div className="col-lg-4 order-lg-1">
                <figure>
                  <Image
                    src="/img/pp/sc-002.webp"
                    alt="Additional Cover"
                    width={400}
                    height={300}
                  />
                </figure>
              </div>
            </div>

            <div className="row">
              <div className="col-12 text-center">
                <Link
                  className="btn rounded-pill btnCty"
                  href="/ports-and-terminals"
                >
                  Read More <i className="icbc"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
