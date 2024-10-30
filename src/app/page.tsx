"use client";

import { Fragment } from "react";

// GLOBAL CUSTOM HOOKS
import useLightBox from "hooks/useLightBox";
import useReplaceMe from "hooks/useReplaceMe";
import VideoSwiper from "components/blocks/home/VideoSwiper";
import MarineInsuranceSection from "components/blocks/home/HomeAbout";
import Sectors from "components/blocks/home/Sectors";
import LatestNews from "components/blocks/home/LatestNews";
import HomeAbout from "components/blocks/home/HomeAbout";

export default function Home() {
  // USED FOR HERO AREA TEXT CHANGE FREQUENTLY
  useReplaceMe();

  // USED FOR SHOW POPUP WITH IMAGE
  useLightBox();

  return (
    <Fragment>
      <main className="content-wrapper">
          <VideoSwiper/>
          <HomeAbout/>
          <Sectors/>
         <LatestNews/>
        
      </main>
    </Fragment>
  );
}
