"use client"

import { AboutSection } from "components/blocks/about-us/AboutSection";
import { BannerVideo } from "components/blocks/includes/BannerVideo";
import { Fragment, useState } from "react";
export default function About() {
  
  const [bannerVideoTitle,setBannerVideoTitle] = useState("")
  
  return (
    <Fragment>
         <main className="content-wrapper">
        <BannerVideo title={bannerVideoTitle} videoSrc="/img/media/about_us.mp4"  posterSrc="/media/about-us01.webp" ></BannerVideo>
        <AboutSection setBannerVideoTitle={setBannerVideoTitle}/>
        </main>
    </Fragment>
  );
}
