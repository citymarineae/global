"use client"

import Image from 'next/image';
import { marineInsuranceContent } from '../../../data/contents/home'; // Import the content
import apiService from 'services/api';
import { useEffect, useState } from 'react';
import { MarineInsurace } from 'types/MarineInsurance';
import parse from 'html-react-parser'

const MarineInsuranceSection = () => {



  
  return (
    <section className="wrapper bg-rtps">
      {/* Desktop Image */}
      <figure className="d-none d-lg-block">
        <img 
          src={""}
          alt="About Us" 
          width={800} 
          height={400} 
        />
      </figure>

      <div className="container py-lg-14 py-10">
        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="pe-lg-13 text-lg-start">
              <h2 className="sbttl text-primary mb-xl-6">{"Title home about"}</h2>
              
              {/* Dynamically map over the paragraphs */}
              
                <p className="mb-xl-5">
                  Content of home about
                </p>
              
              <a className="btn rounded-pill btnCty" href={marineInsuranceContent.buttonLink}>
                {marineInsuranceContent.buttonText} <i className="icbc"></i>
              </a>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="col-lg-6">
            <figure className="d-block d-lg-none">
              <img
                src={"mobile image"} 
                alt="About Us" 
                width={500} 
                height={300}  
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarineInsuranceSection;
