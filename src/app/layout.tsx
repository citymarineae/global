import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import ScrollCue from "./scroll-cue";
import ThemeProvider from "theme/ThemeProvider";

import PageProgress from "components/common/PageProgress";

// animate css
import "animate.css";
// import swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// video player css
import "plyr-react/plyr.css";
// glightbox css
import "glightbox/dist/css/glightbox.css";
// custom scrollcue css
import "plugins/scrollcue/scrollCue.css";
// Bootstrap and custom scss
import "assets/scss/style.scss";
import "assets/scss/custom-style.scss";
import NavbarOne from "components/blocks/navbar/navbar-1";
import Footer from "components/blocks/footer/FooterMn";
import MetaDataContextProvider, { useMetaData } from "./contexts/metaDataContext";


const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CITY MARINE",
  description: ""
};



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <MetaDataContextProvider>
        <ScrollCue>
          <header className="position-absolute w-100">
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
        <NavbarOne
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-dark avbar-dark " logoAlt="logo-light"
        />
      </header>
          <ThemeProvider>{children}</ThemeProvider>
          <Footer/>
        </ScrollCue>
        </MetaDataContextProvider>
        <PageProgress />
      </body>
    </html>
  );
}
