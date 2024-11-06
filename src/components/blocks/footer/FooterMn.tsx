"use client";

import NextLink from "components/reuseable/links/NextLink";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary">
      <div className="container pt-10 pt-lg-14 pb-lg-8 pb-5">
        <div className="row gy-5 gy-lg-7 gy-lg-0 pb-0 pb-md-5 pb-lg-0" data-cues="fadeIn">
          <div className="col-lg-4">
            <div className="widget">
              <img
                className="lgbcs"
                src="/img/logo-light.svg"
                alt="City Marine Logo"
              />
              <hr />
              <h5 className="mb-4">Securing Maritime Excellence Since 1997</h5>
              <nav className="nav social social-white">
                <a href="https://www.linkedin.com/company/city-insurance-brokers/" target="_blank">
                  <img src="/img/icons/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href="https://www.youtube.com/channel/UCnXWVnX-lKHY0Cq_DwOnSNw" target="_blank">
                  <img src="/img/icons/youtube.svg" alt="YouTube" />
                </a>
              </nav>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-6 col-lg-4">
            <div className="widget">
              <h4 className="widget-title mb-3 text-white">Quick Links</h4>
              <hr />
              <div className="d-md-flex flex-md-wrap gap-5">
                <ul className="list-unstyled mb-1">
                  <li>
                    <NextLink href="/about-us" title="About Us"></NextLink>
                  </li>
                  <li>
                    <NextLink href="/our-team" title="Our Team"></NextLink>
                  </li>
                  <li>
                    <NextLink href="/news" title="News"></NextLink>
                  </li>
                </ul>
                <ul className="list-unstyled mb-0">
                  <li>
                    <NextLink
                      href="/marine-energy"
                      title="Marine, Energy & Crewing"
                    ></NextLink>
                  </li>
                  <li>
                    <NextLink
                      href="/ports-and-terminals"
                      title="Ports & Terminals"
                    ></NextLink>
                  </li>
                  <li>
                    <NextLink
                      href="/personal-lines"
                      title="Personal Lines"
                    ></NextLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="col-md-6 col-lg-4">
            <div className="widget msxgs">
              <h4 className="widget-title mb-3 text-white">Contact Us</h4>
              <hr />
              <div className="d-flex gap-4 mb-2 align-items-center">
                <div className="ftr-iconbox">
                  <img src="/img/icons/email.svg" alt="Email Icon" />
                </div>
                <NextLink
                  href="mailto:info@citymarinebrokers.com"
                  title="info@citymarinebrokers.com"

                ></NextLink>
              </div>
              <div className="d-flex gap-4 align-items-center">
                <div className="ftr-iconbox">
                  <img src="/img/icons/phone.svg" alt="Phone Icon" />
                </div>
                <NextLink
                  href="tel:97165758800"
                  title="+971 6 575 8800"
                ></NextLink>
              </div>

              <ul className="list-unstyled mb-0 mt-8">
                <li>
                  <NextLink
                    href="/standard-terms-condition"
                    title="Standard Terms & Conditions"
                  ></NextLink>
                </li>
                <li>
                  <NextLink
                    href="/website-terms-conditions"
                    title="Website Terms & Conditions"
                  ></NextLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div
          className="row d-flex align-items-center gy-5 gy-md-0 mt-md-0 mt-6"
          data-cues="fadeIn"
        >
          <div className="col-md-12">
            <hr className="my-lg-8 my-0" />
          </div>
          <div className="col-md-6">
            <div className="d-flex ftlgs gap-5 py-3">
              <img
                src="/img/icons/footer-icon1.png"
                width="200"
                height="150"
                alt="Icon 1"
              />
              <img
                src="/img/icons/footer-icon2.png"
                width="200"
                height="150"
                alt="Icon 2"
              />
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 cprht">
              © {new Date().getUTCFullYear()} City Marine Insurance Brokers LLC.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Progress Wrap */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
