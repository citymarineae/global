import ContactForm from "components/blocks/contact/ContactForm";
import { BannerVideo } from "components/blocks/includes/BannerVideo";
import NewsSection from "components/blocks/news/NewsSection";
import { Fragment } from "react";
export default function Contact() {
  return (
    <Fragment>
         <main className="content-wrapper">
        <BannerVideo title="Contact" videoSrc="/media/contact-us.webm"  posterSrc="media/contact-us01.webp" ></BannerVideo>
        <ContactForm/>
        
        </main>
    </Fragment>
  );
}
