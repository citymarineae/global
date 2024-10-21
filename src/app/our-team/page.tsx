import { BannerVideo } from "components/blocks/includes/BannerVideo";
import TeamSection from "components/blocks/our-team/TeamSection";
import { Fragment } from "react";
export default function About() {
  return (
    <Fragment>
         <main className="content-wrapper">
        <BannerVideo title="Our Team" videoSrc="/media/our-team.mp4"  posterSrc="/img/our-team01.webp" ></BannerVideo>
        <TeamSection/>
        </main>
    </Fragment>
  );
}
