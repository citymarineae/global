"use client";

import React from "react";
import { BannerVideo } from "components/blocks/includes/BannerVideo";
// import apiService from "services/api";
// import { useParams } from "next/navigation";
import { MarineSection } from "types/MarineSections";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";

export default function Sector({ data }: { data: MarineSection }) {
  // const { sectorId } = useParams();
  // const [loading, setLoading] = useState(true);
  // const [sectionData, setSectionData] = useState<MarineSection | null>(null);

  // const sectionName = sectorId[0];
  // console.log(sectionName);
  // async function fetchSectionData() {
  //   console.log("Called fetch");
  //   setLoading(true);
  //   try {
  //     const data: MarineSection = await apiService.get(
  //       `/sectors/marine/section?slug=${sectionName}`
  //     );
  //     setSectionData(data);
  //   } catch (error) {
  //     console.error("Failed to fetch data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   console.log("useeffect");
  //   fetchSectionData();
  //   console.log(process.env.NEXT_PUBLIC_DOMAIN_URL);
  // }, []);

  // if (loading) {
  //   return <div>Loading content....</div>;
  // }

  return (
    <main className="content-wrapper">
      <BannerVideo
        title="Marine, Energy & Crewing"
        videoSrc={data?.bannerVideo || ""}
        posterSrc={data?.bannerImage || ""}
        className="full-hgt-pg "></BannerVideo>

      <section className="wrapper py-10 py-lg-14 position-relative overflow-hidden">
        <div className="shape position-absolute top-5 end-0 d-none d-md-block opacity-50">
          <Image src="/img/icons/shape-up.svg" width="200" height="200" alt="" />
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 gy-10 gx-lg-14">
            <div className="col d-flex">
              <div className="img-box img-box-grd flex-grow-1">
                <Image
                  src={data?.image}
                  className="w-100 h-100 object-fit-cover"
                  alt="marine energy"
                  width={600}
                  height={600}
                />
              </div>
            </div>
            <div className="col d-flex flex-column h-100">
              <div className="wrapper-content d-flex flex-column h-100">
                <h2 className="sbttl text-primary mb-lg-6">
                  {data?.title}
                </h2>
                {parse(data?.content || "")}
              </div>
            </div>
            <div className="col ms-auto">
              <div className="go-back">
                <Link
                  href="/marine-energy"
                  className="text-decoration-none text-primary d-flex align-items-center gap-2 fw-500">
                  <Image
                    src="/img/icons/arrow-left.svg"
                    width="50"
                    height="50"
                    alt=""
                  />
                  <span>Back</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
