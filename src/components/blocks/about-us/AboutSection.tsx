
"use client"

import aboutContent from 'data/contents/aboutContent'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import apiService from 'services/api';
import { About } from 'types/About';
import parse from 'html-react-parser';
import {motion} from 'framer-motion'

export const AboutSection = ({setBannerVideoTitle}:{
  setBannerVideoTitle:Dispatch<SetStateAction<string>>
}) => {

  const [aboutData, setAboutData] = useState<{
    pageHeading: string
    description: string
    contentHeading: string
    content: string
    image?: string
    altTag:string
  } | null | null>(null);

  const [loading, setLoading] = useState(true)


  async function fetchContactData() {
    setLoading(true);
    try {
      const data: About = await apiService.get("/about");
      if (data.about[0]) {
        const aboutData = data.about[0]
        console.log(aboutData)
        setAboutData(aboutData);
        setBannerVideoTitle(aboutData.pageHeading)
      }

      console.log(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchContactData();
  }, []);


  return (
    <motion.div>
      <section className="" >
        <div className='abt-sec1'>
        <div className="container ">
          <div className="abt-sec1__div"   >
            <div className="shape opacity-50">
              <img src="/img/icons/main-vector.svg" width="100" height="100" alt="Shape" />
            </div>
            <h4 >{aboutData?.description}</h4>
          </div>
          </div>
          </div>
      </section>

      {/* About Us Main */}
      <section className="wrapper abt-main position-relative overflow-hidden" >
        <div className="abt-main__img" >
          <img src={aboutData?.image} width="100" height="100" alt={aboutData?.altTag} />
        </div>
        <motion.div className="container" initial={{opacity:0,y:"20%"}} transition={{duration:.7,ease:"easeInOut"}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <div className="abt-main__div py-10 py-lg-14">
            <div className="abt-main__content" >
              <h2 className="sbttl mb-3">{aboutData?.contentHeading}</h2>
              <p>{parse(aboutData?.content || "")}</p>
              {/* {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))} */}
            </div>
          </div>
        </motion.div>
        <div className="shape position-absolute bottom-min-5 start-0 opacity-25 shape-opmob" >
          <img src={aboutContent.shapeImage} width="200" height="200" alt="Shape" />
        </div>
      </section>
    </motion.div>
  )
}
