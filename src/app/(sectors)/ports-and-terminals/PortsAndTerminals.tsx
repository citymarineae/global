"use client"

import { Fragment, useEffect, useState } from "react";
import { BannerVideo } from "components/blocks/includes/BannerVideo";
import apiService from "services/api";
import { PortsAndTerminals as portAndTerminalsType } from "types/PortsAndTerminals";
import parse from 'html-react-parser'
import {motion} from 'framer-motion'

export default function PortsAndTerminals() {

  const [loading,setLoading] = useState(true)
  const [portsAndTerminalData,setPortsAndTerminalData] = useState< portAndTerminalsType | null>(null)

  async function fetchPortAndTerminalsData() {
    setLoading(true);
    try {
      const data:portAndTerminalsType = await apiService.get("/sectors/portsAndTerminals");
      setPortsAndTerminalData(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchPortAndTerminalsData();
  }, []);

  // if(loading){
  //   return <div>Loading content....</div>
  // }


  return (
    <Fragment>
      <main className="content-wrapper">
        <BannerVideo
          title="Ports & Terminals"
          videoSrc="/media/port.mp4"
          posterSrc="/media/port.png"
        ></BannerVideo>
        <motion.section initial={{opacity:0,y:"20%"}} transition={{duration:.7,ease:"easeInOut"}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="wrapper pt-10 py-md-10 py-xl-10 py-xxl-14 position-relative overflow-hidden">
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
                  {portsAndTerminalData?.title}
                </h2>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Second Section */}
        <motion.section className="wrapper pb-4 pb-lg-5 position-relative overflow-hidden" initial={{opacity:0,y:"20%"}} transition={{duration:.7,ease:"easeInOut"}} whileInView={{opacity:1,y:0}} viewport={{once:true}} >
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 gy-10">
              <div className="col order-lg-last d-flex">
                <div className="img-box img-box-grd flex-grow-1">
                  <img
                    src={portsAndTerminalData?.imageOne}
                    className="w-100 h-100"
                    alt={portsAndTerminalData?.altTagImageOne}
                  />
                </div>
              </div>
              <div className="col order-lg-first d-flex flex-column">
                <div className="wrapper-content pe-5 d-flex flex-column pc-1 custom-list cslis">
                  {parse(portsAndTerminalData?.contentOne || "")}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Third Section */}
        <section className="wrapper pt-5 pt-md-10 pb-10 pb-lg-14 position-relative overflow-hidden" >
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
                    src={portsAndTerminalData?.imageTwo}
                    className="w-100 h-100"
                    alt={portsAndTerminalData?.altTagImageTwo}
                  />
                </div>
              </div>
              <div className="col">
                <div className="wrapper-content ps-md-5 custom-list pc-1">
                  {parse(portsAndTerminalData?.contentTwo || "")}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
