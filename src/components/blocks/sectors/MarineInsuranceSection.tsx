"use client"

import React, { useEffect, useState } from 'react';
import apiService from 'services/api';
import { MarineInsurace } from 'types/MarineInsurance';
import parse from 'html-react-parser'

const MarineInsuranceSection: React.FC = () => {

  const [loading,setLoading] = useState(true)
  const [marineInsuranceData,setMarineInsuranceData] = useState<MarineInsurace | null>(null)

  async function fetchMarineInsuranceData() {
    setLoading(true);
    try {
      const data:MarineInsurace = await apiService.get("/sectors/marine");
      setMarineInsuranceData(data);
      console.log("one news:", data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchMarineInsuranceData();
  }, []);

  // if(loading){
  //   return <div>Loading content....</div>
  // }


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
        <div className="row row-cols-1 row-cols-lg-2 gx-lg-10 gx-xl-14 gy-8" data-cues="fadeIn" data-delay="600">
          <div className="col d-flex order-lg-last">
            <div className="img-box img-box-grd flex-grow-1">
              <img
                src={marineInsuranceData?.image || ""}
                alt={marineInsuranceData?.altTag}
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
          <div className="col d-flex flex-column order-lg-first gy-7 gy-md-10">
            <div className="wrapper-content h-100">
              <h2 className="sbttl text-primary mb-lg-6 ">
              {marineInsuranceData?.title}
              </h2>
              {parse(marineInsuranceData?.content || "")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarineInsuranceSection;
