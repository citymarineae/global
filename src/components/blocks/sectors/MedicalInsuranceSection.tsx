"use client"

import React from 'react';
// import apiService from 'services/api';
import { PersonalLines } from 'types/PersonalLines';
import parse from 'html-react-parser'
import { motion } from 'framer-motion'
import Image from 'next/image';

const MedicalInsuranceSection = ({ data }: { data: PersonalLines }) => {

  // const [loading, setLoading] = useState(true)
  // const [personalLinesData, setPersonalLinesData] = useState<PersonalLines | null>(null)

  // async function fetchPersonalLinesData() {
  //   setLoading(true);
  //   try {
  //     const data:PersonalLines = await apiService.get("/sectors/personal-lines");
  //     setPersonalLinesData(data);
  //     console.log(data)
  //   } catch (error) {
  //     console.error("Failed to fetch data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }


  // useEffect(() => {
  //   fetchPersonalLinesData();
  // }, []);

  // if(loading){
  //   return <div>Loading content....</div>
  // }


  return (
    <section className="wrapper py-10 py-lg-14 position-relative overflow-hidden">
      <div className="shape position-absolute top-20 end-0 d-none d-md-block opacity-25" style={{ zIndex: -1 }}>
        <Image
          src="./img/icons/shape-up.svg"
          width="200"
          height="200"
          alt=""
          style={{ scale: 1.2, transform: 'rotate(275deg)' }}
        />
      </div>
      <motion.div className="container" initial={{ opacity: 0, y: "20%" }} transition={{ duration: .7, ease: "easeInOut" }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="row row-cols-1 row-cols-lg-2 gx-lg-14 gy-10">
          <div className="col d-flex order-md-last">
            <div className="img-box img-box-grd flex-grow-1">
              <Image
                src={data?.image || ""}
                width={600}
                height={600}
                className="w-100 h-100 object-fit-cover"
                alt={data?.altTag || ""}
              />

            </div>
          </div>
          <div className="col d-flex flex-column order-md-first gy-7 gy-md-10">
            <div className="wrapper-content d-flex flex-column h-100">
              <h2 className="sbttl text-primary mb-lg-6 mw-17c">
                {data?.title}
              </h2>
              {parse(data?.content || "")}
              <div className="d-flex gap-3 gap-xl-5 flex-wrap flex-xxl-nowrap mt-auto">
                <a href="https://www.orientonline.ae/PORTALS/GuestLogin.aspx?MasterId=feQnJ5WqcI0ZLouKOOQc0pt0bOlWNYMbKZomHNTdzebaPaFu34oryy8zX3ljXBox" className="btn btnCty btn-tall" target='_blank'>
                  <span>Get Quote</span>
                  <i className="icbc"></i>
                </a>
                <a href="https://services.dha.gov.ae/mga/sps/auth" className="btn btnCty btn-tall" target='_blank'>
                  <span>DHA Complaint</span>
                  <i className="icbc"></i>
                </a>
                <a href="\media\Flow-Chart-Complaint-process.pdf" className="btn btnCty btn-tall" target='_blank'>
                  <span>CMIB-Complaint Procedure</span>
                  <i className="icbc"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MedicalInsuranceSection;
