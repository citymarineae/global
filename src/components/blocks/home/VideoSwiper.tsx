"use client";

import { useEffect, useState } from 'react';
import Swiper, { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VideoSwiper = () => {
  const [totalSlides, setTotalSlides] = useState<number>(0);

  useEffect(() => {
    let swiperInstance: SwiperClass | null = null;

    if (typeof window !== 'undefined') {
      swiperInstance = new Swiper('.mnSlide', {
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
            setTotalSlides(this.slides.length); // Correctly typed this
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
    }

    // Cleanup on unmount
    return () => {
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, []);

  return (
    <section className="wrapper bg-dark position-relative" >
      <div className="swiper mySwiper mnSlide"  >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="video-wrapper sldItm">
              <video
                poster="/img/bnr-01.jpg"
                src="/media/002.mp4"
                autoPlay
                loop
                playsInline
                muted
              ></video>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="video-wrapper sldItm">
              <video
                poster="/img/bnr-02.jpg"
                src="/media/hero.mp4"
                autoPlay
                loop
                playsInline
                muted
              ></video>
            </div>
          </div>
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
