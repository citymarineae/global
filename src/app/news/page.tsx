import { BannerVideo } from "components/blocks/includes/BannerVideo";
import NewsSection from "components/blocks/news/NewsSection";
import { Fragment } from "react";
export default function News() {
  return (
    <Fragment>

         <main className="content-wrapper">
        <BannerVideo title="News" videoSrc=""  posterSrc="/img/nws-dt-bnr.webp" ></BannerVideo>
        <NewsSection/>

        </main>
    </Fragment>
  );
}
