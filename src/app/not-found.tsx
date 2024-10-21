import Image from "next/image";
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";
import Footer from "components/blocks/footer/FooterMn";
// IMAGES

export default function NotFound() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
   

      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-9 col-xl-8 mx-auto">
                <figure className="mb-10">
                {/*   <Image src={notFoundImage} alt="not found" /> */}
                </figure>
              </div>

              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                <h1 className="mb-3">Oops! Page Not Found.</h1>
                <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">
                  The page you are looking for is not available or has been moved. Try a different page or go to
                  homepage with the button below.
                </p>

                <NextLink title="Go to Homepage" href="/" className="btn btn-primary rounded-pill" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>

      {/* ========== footer section ========== */}
      
    </Fragment>
  );
}
