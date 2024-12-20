"use client";

import { Fragment, useEffect } from "react";

// GLOBAL CUSTOM HOOKS
import useLightBox from "hooks/useLightBox";
import useReplaceMe from "hooks/useReplaceMe";
import VideoSwiper from "components/blocks/home/VideoSwiper";
import Sectors from "components/blocks/home/Sectors";
import LatestNews from "components/blocks/home/LatestNews";
import HomeAbout from "components/blocks/home/HomeAbout";
import { motion } from "framer-motion"


export default function Home() {
  // USED FOR HERO AREA TEXT CHANGE FREQUENTLY
  useReplaceMe();

  // USED FOR SHOW POPUP WITH IMAGE
  useLightBox();

  return (
    <Fragment>
      {/* <DynamicHead title={homeMetaData?.title} description={homeMetaData?.desc} /> */}
      <main className="content-wrapper">
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{once:true}} // Smooth fade-in transition
        >
          <VideoSwiper />
          <HomeAbout />
        </motion.div>
        <Sectors />
        <hr className="m-0"></hr>
        {/* <LatestNews /> */}
      </main>

    </Fragment>
  );
}
