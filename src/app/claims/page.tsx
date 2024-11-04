"use client"


import { BannerVideo } from "components/blocks/includes/BannerVideo";
import { Fragment, useEffect, useState } from "react";
import apiService from "services/api";
import { Claims as claimsType } from "types/Claims";
import parse from 'html-react-parser';

export default function Claims() {

  const [loading,setLoading] = useState(true)
  const [claimsData,setClaimsData] = useState<{
    pageHeading: string
    contentHeading: string
    content: string
    image?: string
  } | null | null>()

  async function fetchClaimsData() {
    console.log("Called fetch")
    setLoading(true);
    try {
      const data:claimsType = await apiService.get("/claims");
      // setClaimsData(data);

      if (data.claims[0]) {
        const claimsData = data.claims[0]
        console.log(claimsData)
        setClaimsData(claimsData);
      }

      console.log("one news:", data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    console.log("useeffect")
    fetchClaimsData();
  }, []);


  return (
    <Fragment>
         <main className="content-wrapper">
        <BannerVideo title={claimsData?.pageHeading || ""} videoSrc=""  posterSrc="/img/claims-bnr.webp" ></BannerVideo>
        <section className="wrapper py-10 py-lg-14 position-relative overflow-hidden">
      <div className="shape position-absolute top-20 start-min-2 d-none d-md-block opacity-25">
        <img
          src="/img/icons/shape-up.svg"
          width="200"
          height="200"
          style={{ transform: 'rotate(90deg)' }}
          alt=""
        />
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 gy-10">
          <div className="col d-flex order-lg-last">
            <div className="img-box img-box-grd flex-grow-1">
              <img
                src={claimsData?.image}
                className="w-100 h-100"
                alt="marine energy"
              />
            </div>
          </div>
          <div className="col d-flex flex-column order-lg-first">
            <div className="wrapper-content d-flex flex-column h-100 mainsecrp">
              <div>
                <h2 className="sbttl text-primary mb-lg-6">{claimsData?.contentHeading}</h2>
                <p>
                  {parse(claimsData?.content || "")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="wrapper case-stdy pb-10 pb-lg-14">
        <div className="container bg-primary text-white position-relative overflow-hidden">
          <div className="shape position-absolute top-0 end-10 d-none d-md-block">
            <img
              src="/img/icons/shape-big-down.svg"
              width="200"
              height="200"
              alt=""
              style={{ scale: 1.5 }}
            />
          </div>
          <div className="case-stdy__div py-10 p-md-5 py-md-10 p-lg-12 py-xxl-13">
            <h3 className="sbttl text-white mb-4">Case Study</h3>
            <article className="case-stdy__content-box mb-8">
              <h4 className="sbttl-sm">1. Pollution Incident</h4>
              <p>
                Our claims team consists of highly skilled claims handlers and maritime lawyers with
                extensive experience gained in the London Insurance Market. This deep knowledge base enables
                us to navigate complex marine claims with confidence and precision, providing our clients
                with the best possible service.
              </p>
            </article>
            <div className="row row-cols-1 row-cols-lg-2 mb-8 gy-10 gy-lg-0">
              <div className="col">
                <article>
                  <h5 className="text-white mb-5">Immediate Actions Taken</h5>
                  <ul className="custom-list-2">
                    <li>
                      <strong>Proactive Advisory:</strong> Upon notification of the incident, our
                      claims team, in collaboration with the P&I Club, immediately advised the
                      Shipowner of essential actions required to contain the spill. This included,
                      amongst others, the rapid deployment of oil booms to limit the spill's
                      expansion, the immediate notification of the incident to the Local Port Authorities, and the
                      investigation into the cause of the incident.
                    </li>
                    <li>
                      <strong>Coordination with Authorities:</strong> Recognizing the severity of the
                      situation, our claims team coordinated seamlessly with local Port Authorities,
                      ensuring all necessary steps were taken to comply with regulations and manage
                      the incident effectively, thus enabling the Shipowners to focus on the
                      containment of the oil spill.
                    </li>
                  </ul>
                </article>
              </div>
              <div className="col">
                <div>
                  <h5 className="text-white mb-5">Minimizing Delays</h5>
                  <ul className="custom-list-2">
                    <li>
                      <strong>Detention and Security:</strong> The Vessel was detained by local Port
                      Authorities, pending security provisions by the P&I Club. Our claims team worked
                      tirelessly to expedite this process.
                    </li>
                    <li>
                      <strong>Swift Issuance of Security:</strong> Through diligent coordination with
                      the P&I Club, surveyors, and local authorities, we secured a Letter of
                      Undertaking from the P&I Club within just two days, even before the completion
                      of the investigations. This proactive effort enabled the vessel to sail with
                      minimal delay.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-primary-lit case-stdy-box p-8 position-relative">
              <div className="shape shape-white position-absolute top-min-15 end-5 d-none d-md-block">
                <img src="/img/icons/shape-down.svg" width="200" height="200" alt="" />
              </div>
              <article>
                <h5 className="text-white">Outcomes</h5>
                <ul className="custom-list-2">
                  <li>
                    <p>
                      The Shipowners faced minimal disruption to their commercial operations, thanks to
                      our team's rapid response and effective coordination.
                    </p>
                  </li>
                  <li>
                    This case highlights the vital role of having a proficient broker during claims,
                    showcasing our commitment to reducing downtime and ensuring the best possible
                    outcomes for our clients.
                  </li>
                </ul>
              </article>
            </div>
            <article className="case-stdy__content-box my-8">
              <h4>2. FD&D Dispute Resolution</h4>
              <p>
                Another testament to our claims team's expertise is our handling of an FD&D dispute involving
                the Charterers' repudiatory breach of a Charterparty. After cancelling the Charterparty post
                the cancellation date, our clients, the Shipowners, were entitled to claim damages for their
                losses.
              </p>
            </article>
            <div className="row row-cols-1 row-cols-lg-2 mb-8 gy-10 gy-lg-0">
              <div className="col">
                <article>
                  <h5 className="text-white mb-5">Strategic Legal Action</h5>
                  <ul className="custom-list-2">
                    <li>
                      <strong>Immediate Notification and Legal Representation:</strong> Our claims
                      team promptly notified the shipowners' P&I Club, leading to the appointment of
                      specialist lawyers to represent the Owners and pursue the Charterers.
                    </li>
                    <li>
                      <strong>Ongoing Case Monitoring:</strong> Given our team's composition of
                      maritime lawyers, we closely monitored the case, liaising directly with the
                      appointed lawyers to ensure legal costs remained reasonable.
                    </li>
                  </ul>
                </article>
              </div>
              <div className="col">
                <article>
                  <h5 className="text-white mb-5">Alternative Dispute Resolution</h5>
                  <ul className="custom-list-2">
                    <li>
                      <strong>Mediation Over Arbitration:</strong> Understanding the high costs and
                      lengthy nature of Arbitration, our team suggested exploring alternative dispute
                      resolution through mediation before initiating arbitration proceedings.
                    </li>
                    <li>
                      <strong>Guidance and Support:</strong> Alongside the specialist lawyers, we
                      guided the shipowners on the best approach to settle the matter at mediation.
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div className="bg-primary-lit case-stdy-box p-8 position-relative">
              <div className="shape shape-white position-absolute top-min-15 end-5 d-none d-md-block">
                <img src="/img/icons/shape-down.svg" width="200" height="200" alt="" />
              </div>
              <article>
                <h5 className="text-white">Successful Outcome</h5>
                <ul className="custom-list-2">
                  <li>
                    <p>
                      The case was successfully settled at mediation, with the ship owners recovering
                      80% of their losses plus legal costs. This resulted in significant savings in
                      legal costs and, most importantly, time.
                    </p>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper pb-10 pb-lg-14 position-relative overflow-hidden">
        <h2 className="d-none">City Marine Insurance Brokers</h2>
        <div className="shape shape-rotate position-absolute bottom-0 end-10 d-none d-md-block" style={{ opacity: 0.5 }}>
          <img src="/img/icons/shape-up.svg" width="200" height="200" alt="" />
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 gy-10">
            <div className="col d-flex">
              <div className="img-box img-box-grd flex-grow-1">
                <img
                  src="/img/claim-bottom-img.webp"
                  className="w-100 h-100 object-fit-cover"
                  alt="marine energy"
                />
              </div>
            </div>
            <div className="col d-flex flex-column ps-auto ps-lg-8">
              <div className="wrapper-content d-flex flex-column h-100">
                <div>
                  <p>
                    Our claims team at City Marine Insurance Brokers is not just reactive but
                    anticipates challenges and acts swiftly to address them. We pride ourselves on being
                    a dependable partner for Shipowners, Charterers, Marine Terminal Operators, Freight
                    Forwards, and Cargo Interests, providing expert guidance and support when it is
                    needed the most. Trust us to be there, every step of the way, ensuring your
                    interests are protected and your operations continue smoothly.
                  </p>
                  <a href="#" className="text-primary font-18" style={{ fontWeight: 500 }}>
                    Contact Us for Expert Claims Assistance
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.854 10.096a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707L5.854 10.096z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        </main>
    </Fragment>
  );
}
