"use client";

import { useEffect, useState } from 'react';
import apiService from 'services/api';
import Swiper, { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { HomeBanner } from 'types/HomeBanner';

type HomeAboutData = {
  homeabout:HomeAboutDataType[]
}

type HomeAboutDataType = {
    id: string
    title: string
    content: string
    image: string
    metaDataTitle:string
    metaDataDesc:string
    altTag:string;
    bannerVideo1:string;
    bannerVideo2:string;
    videoPoster1:string;
    videoPoster2:string;
}

const VideoSwiper = () => {
  const [totalSlides, setTotalSlides] = useState<number>(0);
  const [loading,setLoading] = useState(true)
  const [videoData,setVideoData] = useState<HomeBanner | null>(null)

  useEffect(() => {
    if (videoData) {
      let swiperInstance: SwiperClass | null = new Swiper('.mnSlide', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pag',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          init: function (this: SwiperClass) {
            setTotalSlides(this.slides.length);
          },
          slideChange: function (this: SwiperClass) {
            const currentSlide = this.realIndex + 1;
            const currentSlideElement = document.getElementById('current-slide');
            if (currentSlideElement) {
              currentSlideElement.textContent = String(currentSlide);
            }
          },
        },
      });
  
      return () => {
        if (swiperInstance) {
          swiperInstance.destroy();
        }
      };
    }
  }, [videoData]);


  async function fetchVideoData() {
    setLoading(true);
    try {
      const data:HomeBanner = await apiService.get("/home-banner");
      // setMarineInsuranceData(data);
      setVideoData(data)
      data.homebanner.map((item)=>{
        console.log(item)
      })
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchVideoData();
    
  }, []);


  return (
    <section className="wrapper bg-dark position-relative" >
      <div className="swiper mySwiper mnSlide">
        <div className="swiper-wrapper">
          {videoData && videoData?.homebanner.map((item,index)=>(
            <div className="swiper-slide" key={index}>
            <div className="video-wrapper sldItm">
              <video
                poster={item.videoPoster || "/img/bnr-01.jpg"}
                src={item.bannerVideo || "/media/002.mp4"}
                autoPlay
                loop
                playsInline
                muted
              ></video>
            </div>
          </div>
          ))}
          
        </div>
      </div>

      <div className="mnCnBx">
        <div className="container">
          <div className="row d-flex align-items-end justify-content-end">
            <div className="col-lg-9 d-none">
              <h1 className="text-white slttl lh-xxs mb-lg-6 mb-5">
                Anchoring Your <br />
                Peace of Mind
              </h1>
              <a href="#" className="btn rounded-pill btnCty">
                About Us <i className="icbc"></i>
              </a>
            </div>
            <div className="col-lg-3">
              {/* Slide counter */}
              <div className="slide-counter">
                <span id="current-slide">1</span> <hr /> <span id="total-slides">{totalSlides}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSwiper;
