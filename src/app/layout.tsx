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

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CITY MARINE",
  description: ""
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ScrollCue>
        <header className="position-absolute w-100">
        <NavbarOne
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-dark avbar-dark " logoAlt="logo-light"
        />
      </header>
          <ThemeProvider>{children}</ThemeProvider>
          <Footer/>
        </ScrollCue>

        <PageProgress />
      </body>
    </html>
  );
}
