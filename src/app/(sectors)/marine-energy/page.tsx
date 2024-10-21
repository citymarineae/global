import MarineInsuranceSection from "components/blocks/home/MarineInsuranceSection";
import { BannerVideo } from "components/blocks/includes/BannerVideo";
import SectorItem from "components/blocks/includes/SectorItem";
import { Fragment } from "react";
export default function MarineEnergy() {
  return (
    <Fragment>
         <main className="content-wrapper">
        <BannerVideo title="Marine, Energy & Crewing" videoSrc="/media/marineenergycrewing.mp4"  posterSrc="/media/marine-energy01.webp" ></BannerVideo>
        <MarineInsuranceSection/>
        <section className="marine-grid lit-bg py-10 py-lg-14 position-relative">
        <div className="container">
            <SectorItem/>
            </div>
            </section>
        </main>
    </Fragment>
  );
}
