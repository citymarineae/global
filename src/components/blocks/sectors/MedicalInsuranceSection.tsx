import React from 'react';

const MedicalInsuranceSection: React.FC = () => {
  return (
    <section className="wrapper py-10 py-lg-14 position-relative overflow-hidden">
      <div className="shape position-absolute top-20 end-0 d-none d-md-block opacity-25" style={{ zIndex: -1 }}>
        <img
          src="./img/icons/shape-up.svg"
          width="200"
          height="200"
          alt=""
          style={{ scale: 1.2, transform: 'rotate(275deg)' }}
        />
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 gx-lg-14 gy-10">
          <div className="col d-flex order-md-last">
            <div className="img-box img-box-grd flex-grow-1">
              <img
                src="/img/personal-lines.webp"
                className="w-100 h-100 object-fit-cover"
                alt="marine energy"
              />
            </div>
          </div>
          <div className="col d-flex flex-column order-md-first">
            <div className="wrapper-content d-flex flex-column h-100">
              <h2 className="sbttl text-primary mb-lg-6">
                Medical Insurance<br /> for Individuals & Group
              </h2>
              <p>
                We offer a wide range of customized and cost-effective health insurance products for both
                Groups and Individuals through our local and international partners.
              </p>
              <p>
                Now, more than ever is the time to invest in health insurance. Our team of experts
                brings a wealth of skills and knowledge gained from experience of providing the best
                possible coverage to our clients over the years. At CMIB, our team of advisors will help
                identify your needs and provide you with insurance options that will cover
                risks for you and your family, taking into consideration your budget, requirements,
                circumstances, and needs to ensure your peace of mind.
              </p>
              <div className="d-flex gap-3 gap-xl-5 flex-wrap flex-xxl-nowrap mt-auto">
                <a href="#" className="btn btnCty btn-tall">
                  <span>Get Quote</span>
                  <i className="icbc"></i>
                </a>
                <a href="#" className="btn btnCty btn-tall">
                  <span>DHA Complaint</span>
                  <i className="icbc"></i>
                </a>
                <a href="#" className="btn btnCty btn-tall">
                  <span>CMIB-Complaint Procedure</span>
                  <i className="icbc"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalInsuranceSection;
