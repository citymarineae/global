import MarineInsuranceSection from "components/blocks/home/MarineInsuranceSection";
import { BannerVideo } from "components/blocks/includes/BannerVideo";
import SectorItem from "components/blocks/includes/SectorItem";
import { Fragment } from "react";
export default function News() {
  return (
    <Fragment>
         <main className="content-wrapper">
        <BannerVideo title="News" videoSrc=""  posterSrc="/img/nws-dt-bnr.webp" ></BannerVideo>
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
