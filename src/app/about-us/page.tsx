import { AboutSection } from "components/blocks/about-us/AboutSection";
import { BannerVideo } from "components/blocks/includes/BannerVideo";
import { Fragment } from "react";
export default function About() {
  return (
    <Fragment>
         <main className="content-wrapper">
        <BannerVideo title="About Us" videoSrc="/img/media/about_us.mp4"  posterSrc="/media/about-us01.webp" ></BannerVideo>
        <AboutSection/>
        </main>
    </Fragment>
  );
}
