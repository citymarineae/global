import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import ScrollCue from "./scroll-cue";
import ThemeProvider from "theme/ThemeProvider";
import Head from "next/head";
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

const manrope = Manrope({ subsets: ["latin"], adjustFontFallback: false });

import apiService from "services/api";

type HomeAboutData = {
  homeabout: HomeAboutDataType[];
};

type HomeAboutDataType = {
  id: string;
  title: string;
  content: string;
  image: string;
  metaDataTitle: string;
  metaDataDesc: string;
};

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data: HomeAboutData = await apiService.get("/home-about");

  // Assuming you want to use the first item's metadata for this example
  const metadataTitle = data.homeabout[0]?.metaDataTitle || "Default Title";
  const metadataDescription =
    data.homeabout[0]?.metaDataDesc || "Default description";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TSL7GZSQ');`,
          }}
        />
      </Head>
      <body className={manrope.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TSL7GZSQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ScrollCue>
          <header className="position-absolute w-100">
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link
              href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
              rel="stylesheet"></link>
            <NavbarOne
              navClassName="navbar navbar-expand-lg center-nav transparent navbar-dark avbar-dark "
              logoAlt="logo-light"
            />
          </header>
          <ThemeProvider>{children}</ThemeProvider>
          <Footer />
        </ScrollCue>

        <PageProgress />
      </body>
    </html>
  );
}
