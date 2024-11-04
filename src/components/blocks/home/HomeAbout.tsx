"use client"

import Image from 'next/image';
import { marineInsuranceContent } from '../../../data/contents/home'; // Import the content
import apiService from 'services/api';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser'
import Link from 'next/link';


type HomeAboutData = {
  homeabout:HomeAboutDataType[]
}

type HomeAboutDataType = {
    id: string
    title: string
    content: string
    image: string
}


const HomeAbout = () => {

  const [loading, setLoading] = useState(true)
  const [homeAboutData, setHomeAboutData] = useState<HomeAboutData | null>(null)

  async function fetchMarineInsuranceData() {
    setLoading(true);
    try {
      const data:HomeAboutData = await apiService.get("/home-about");
      // setMarineInsuranceData(data);
      setHomeAboutData(data)
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchMarineInsuranceData();
  }, []);

  // if (loading) {
  //   return <div className='text-center'>Loading content....</div>
  // }

  return (
    <section className="wrapper bg-rtps">
      {/* Desktop Image */}
      <figure className="d-none d-lg-block">
        <img
          src={homeAboutData?.homeabout[0].image}
          alt="About Us"
          width={800}
          height={400}
        />
      </figure>

      <div className="container py-lg-14 py-10">
        <div className="row gy-5" data-cues="fadeIn">
          <div className="col-lg-6">
            <div className="pe-lg-13 text-lg-start" >
              <h2 className="sbttl text-primary mb-xl-6">{homeAboutData?.homeabout[0].title}</h2>

              {/* Dynamically map over the paragraphs */}

              <div>
              {parse(homeAboutData?.homeabout[0].content || "")}
              </div>

              <Link className="btn rounded-pill btnCty mt-4" href={marineInsuranceContent.buttonLink}>
                {marineInsuranceContent.buttonText} <i className="icbc"></i>
              </Link>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="col-lg-6">
            <figure className="d-block d-lg-none">
              <img
                src={homeAboutData?.homeabout[0].image}
                alt="About Us"
                width={500}
                height={300}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
