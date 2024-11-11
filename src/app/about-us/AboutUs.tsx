"use client"

import { AboutSection } from "components/blocks/about-us/AboutSection";
import { BannerVideo } from "components/blocks/includes/BannerVideo";
import { Fragment, useState } from "react";
export default function About() {

  const [bannerVideoTitle,setBannerVideoTitle] = useState("")

  return (
    <Fragment>
         <main className="content-wrapper"  >
        <BannerVideo title={bannerVideoTitle} videoSrc="/media/about.mp4"  posterSrc="/media/about-us.png" ></BannerVideo>
        <AboutSection setBannerVideoTitle={setBannerVideoTitle}/>
        </main>
    </Fragment>
  );
}