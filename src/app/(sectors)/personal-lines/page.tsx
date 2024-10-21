import { Fragment } from "react";
import { BannerVideo } from "components/blocks/includes/BannerVideo";
import MedicalInsuranceSection from "components/blocks/sectors/MedicalInsuranceSection";

export default function PersonalLines() {
  return (
    <Fragment>
      <main className="content-wrapper">
        <BannerVideo
          title="Personal Lines"
          videoSrc="/media/personal-lines.mp4"
          posterSrc="/media/personal-lines01.webp"
        ></BannerVideo>
        <MedicalInsuranceSection />
      </main>
    </Fragment>
  );
}
