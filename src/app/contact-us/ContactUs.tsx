import ContactForm from "components/blocks/contact/ContactForm";
import { BannerVideo } from "components/blocks/includes/BannerVideo";
import { Fragment } from "react";
export default function Contact() {
  return (
    <Fragment>
         <main className="content-wrapper">
        <BannerVideo title="Contact us" videoSrc="/media/contact-us.webm"  posterSrc="media/contact-us01.webp" ></BannerVideo>
        <ContactForm/>
        </main>
    </Fragment>
  );
}