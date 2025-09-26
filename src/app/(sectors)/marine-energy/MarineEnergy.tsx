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
          
        ></BannerVideo>
        <div>
        <MarineInsuranceSection /></div>
        <section className="marine-grid  position-relative" >
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
