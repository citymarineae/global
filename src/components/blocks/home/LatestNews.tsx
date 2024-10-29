import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles

// import required modules
import { Pagination } from "swiper/modules";
import SwiperCore from 'swiper'; // Import SwiperCore for TypeScript typing
import Image from "next/image";
import { News } from "types/News";
import apiService from "services/api";
import { LatestNews as latestNewsType } from "types/LatestNews";

export default function LatestNews() {
  // Correctly define the swiper reference with SwiperCore type
  const swiperRef = useRef<SwiperCore | null>(null);

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev(); // Safe access to swiper instance
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext(); // Safe access to swiper instance
  };

  const [loading, setLoading] = useState(true)
  const [latestNews, setLatestNews] = useState<latestNewsType | null>(null)

  async function fetchLatestNews() {
    console.log("Called fetch")
    setLoading(true);
    try {
      const data: latestNewsType = await apiService.get(`/news?limit=5`);
      setLatestNews(data);
      console.log(data)
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }




  useEffect(() => {
    console.log("useeffect")
    fetchLatestNews();
  }, []);

  if (loading) {
    return <div>Loading content....</div>
  }

  return (
    <>
      <section className="wrapper bg-light hm-news-sec">
        <div className="container py-lg-14 py-10">
          <div className="d-flex justify-content-between align-items-center nswttl gap-3">
            <h2 className="sbttl">Latest News</h2>
            <hr className="my-0" />
            <a href="/news" className="btn rounded-pill btnCty">
              More News <i className="icbc"></i>
            </a>
          </div>

          <div className="row mt-lg-6 mt-5">
            <div className="col-lg-12">
              <Swiper
                onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)} // Assign swiper instance
                slidesPerView={1}
                spaceBetween={10}
                pagination={false}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="nwslfts nsbx">
                    <figure>
                      <img
                        src={latestNews?.news[0]?.image || ""}
                        width={500}
                        height={200}
                        alt=""
                      />
                    </figure>
                    <div className="nsmbx">
                      <span>20 August 2024</span>
                      <h4>IG Supports Mercy Ships’ Life-Changing Mission</h4>
                      <p>
                        IG provides crucial support to Mercy Ships, enabling
                        life-saving surgeries and medical care for those in
                        need, transforming lives across the globe.
                      </p>
                      <a className="rtarw" href="/news-details">
                        Read More <i className="icbc"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                
                {latestNews?.news.slice(1).map((item,index) => {
                  if (index % 2 === 0) { // Only render SwiperSlide for even indices
                    const nextItem = latestNews.news[index + 2];
                
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="nwslrts nsbx d-flex align-items-center">
                          <figure className="w-25">
                            <img
                              src={item.image}
                              width={200}
                              height={200}
                              alt=""
                            />
                          </figure>
                          <div className="nsmbx">
                            <span>20 August 2024</span>
                            <h4>{item.title}</h4> {/* Use item.title for dynamic title */}
                            <a className="rtarw" href="/news-details">
                              Read More <i className="icbc"></i>
                            </a>
                          </div>
                        </div>
                
                        {nextItem && (
                          <div className="nwslrts nsbx d-flex align-items-center">
                            <figure className="w-25">
                              <img
                                src={nextItem.image}
                                width={200}
                                height={200}
                                alt=""
                              />
                            </figure>
                            <div className="nsmbx">
                              <span>20 August 2024</span>
                              <h4>{nextItem.title}</h4> {/* Use nextItem.title for dynamic title */}
                              <a className="rtarw" href="/news-details">
                                Read More <i className="icbc"></i>
                              </a>
                            </div>
                          </div>
                        )}
                      </SwiperSlide>
                    );
                  }
                  return null; // Return null for odd indices to avoid rendering

})}
                


              </Swiper>

              <div className="nxtbrs d-flex justify-content-between align-items-center mt-5 mt-lg-10 gap-3">
                <hr />
                <div className="arbtsx d-flex">
                  <div className="swp-prv" onClick={handlePrevClick}>
                    <Image
                      src="/img/icons/prev.svg"
                      alt="Previous"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="swp-next" onClick={handleNextClick}>
                    <Image
                      src="/img/icons/next.svg"
                      alt="Next"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
