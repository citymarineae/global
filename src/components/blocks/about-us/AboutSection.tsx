
import aboutContent from 'data/contents/aboutContent'
import React from 'react'

export const AboutSection = () => {
  return (
    <div>
          <section className="abt-sec1">
        <div className="container">
          <div className="abt-sec1__div">
            <div className="shape opacity-50">
              <img src="/img/icons/main-vector.svg" width="100" height="100" alt="Shape" />
            </div>
            <h4>{aboutContent.establishedText}</h4>
          </div>
        </div>
      </section>

      {/* About Us Main */}
      <section className="wrapper abt-main position-relative overflow-hidden">
        <div className="abt-main__img">
          <img src={aboutContent.mainImage} width="100" height="100" alt="About Us Main" />
        </div>
        <div className="container">
          <div className="abt-main__div py-10 py-lg-14">
            <div className="abt-main__content">
              <h2 className="sbttl mb-3">Who We Are</h2>
              <p>{aboutContent.whoWeAreText}</p>
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="shape position-absolute bottom-min-5 start-0 opacity-25 shape-opmob">
          <img src={aboutContent.shapeImage} width="200" height="200" alt="Shape" />
        </div>
      </section>
    </div>
  )
}
