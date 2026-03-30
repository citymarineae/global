
"use client"

import aboutContent from 'data/contents/aboutContent'
import React, { Dispatch, SetStateAction } from 'react'
import parse from 'html-react-parser';
import { motion } from 'framer-motion'
import Image from 'next/image';

export const AboutSection = ({ data }: {
  setBannerVideoTitle: Dispatch<SetStateAction<string>>
  data: any
}) => {


  // async function fetchContactData() {
  //   setLoading(true);
  //   try {
  //     const data: About = await apiService.get("/about");
  //     if (data.about[0]) {
  //       const aboutData = data.about[0]
  //       console.log(aboutData)
  //       setAboutData(aboutData);
  //       setBannerVideoTitle(aboutData.pageHeading)
  //     }

  //     console.log(data);
  //   } catch (error) {
  //     console.error("Failed to fetch data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }


  // useEffect(() => {
  //   fetchContactData();
  // }, []);


  return (
    <motion.div>
      <section className="" >
        <div className='abt-sec1'>
          <div className="container ">
            <div className="abt-sec1__div"   >
              <div className="shape opacity-50">
                <Image src="/img/icons/main-vector.svg" width="100" height="100" alt="Shape" />
              </div>
              <h4 >{data?.description}</h4>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Main */}
      <section className="wrapper abt-main position-relative overflow-hidden" >
        <div className="abt-main__img" >
          <Image src={data?.image || ""} width="700" height="700" alt={data?.altTag || ""} />
        </div>
        <motion.div className="container" initial={{ opacity: 0, y: "20%" }} transition={{ duration: .7, ease: "easeInOut" }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="abt-main__div py-10 py-lg-14">
            <div className="abt-main__content" >
              <h2 className="sbttl mb-3">{data?.contentHeading}</h2>
              <p>{parse(data?.content || "")}</p>
              {/* {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))} */}
            </div>
          </div>
        </motion.div>
        <div className="shape position-absolute bottom-min-5 start-0 opacity-25 shape-opmob" >
          <Image src={aboutContent.shapeImage} width="200" height="200" alt="Shape" />
        </div>
      </section>
    </motion.div>
  )
}
