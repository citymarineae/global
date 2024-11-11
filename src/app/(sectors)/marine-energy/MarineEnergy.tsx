import { Fragment } from "react";
import MarineInsuranceSection from "components/blocks/sectors/MarineInsuranceSection";
import { BannerVideo } from "components/blocks/includes/BannerVideo";
import SectorItem from "components/blocks/includes/SectorItem";

export default function MarineEnergy() {
  return (
    <Fragment>
      <main className="content-wrapper" >
        <BannerVideo
          title="Marine, Energy & Crewing"
          videoSrc="/media/marine-energy.mp4"
          posterSrc="/media/marine-energy.png"
          data-cues="fadeIn" data-delay="1600"
        ></BannerVideo>
        <div data-cues="fadeIn" data-delay="800" data-group="sd">
        <MarineInsuranceSection /></div>
        <section className="marine-grid  position-relative" data-cues="fadeIn" data-delay="100" >
          <div className=" lit-bg py-10 py-lg-14 ">
          <div className="container"  >
            <SectorItem />
          </div>
         </div>
        </section>
      </main>
    </Fragment>
  );
}
