"use client";

import { Fragment, ReactElement, useRef } from "react";
// -------- CUSTOM HOOKS -------- //
import useSticky from "hooks/useSticky";
import useNestedDropdown from "hooks/useNestedDropdown";
// -------- CUSTOM COMPONENTS -------- //
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";
// LOCAL CUSTOM COMPONENTS
import Info from "../components/Info";
import Search from "../components/search";
import Signin from "../components/signin";
import Signup from "../components/signup";
import MiniCart from "../components/mini-cart";
import HeaderRight from "../components/header-right";
import FancyHeader from "../components/fancy-header";
import NavItem from "./NavItem";
import Link from "next/link";

// ===================================================================
interface NavbarProps {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
}
// ===================================================================

export default function NavbarOne({
  fancy,
  button,
  logoAlt,
  cart = false,
  info = false,
  social = false,
  search = false,
  language = false,
  stickyBox = true,
  navOtherClass = "navbar-other w-100 d-flex ms-auto",
  navClassName = "navbar navbar-expand-lg center-nav transparent navbar-dark",
}: NavbarProps) {
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? "logo-dark" : logoAlt ?? "logo-dark";

  // dynamically added navbar className
  const fixedClassName =
    "navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed";

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={
            <img
              alt="logo"
              src={`/img/${logo}.svg`}
              srcSet={`/img/${logo}.svg 2x`}
              className={logo}
            />
          }
        />
      </div>

      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        <div className="offcanvas-header d-lg-none">
        <Link href="/" > <img
                className="lgbcs"
                src="/img/logo-light.svg"
            alt="City Marine Logo"
            data-bs-dismiss="offcanvas"
          />
          </Link>

          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            <li className="nav-item"
            data-bs-dismiss="offcanvas">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item"
            data-bs-dismiss="offcanvas">
              <Link
                className="nav-link"
                href="/about-us"
              >About Us</Link>
            </li>
            <li className="nav-item"
            data-bs-dismiss="offcanvas">
              <Link
                className="nav-link"
                href="/our-team"
              >Our Team</Link>
            </li>
            <NavItem/>
            <li className="nav-item"
            data-bs-dismiss="offcanvas">
              <Link className="nav-link" href="/claims">
                Claims
              </Link>
            </li>
            <li className="nav-item"
            data-bs-dismiss="offcanvas">
              <Link className="nav-link" href="/news">
                News
              </Link>
            </li>
            <li className="nav-item d-lg-none"
            data-bs-dismiss="offcanvas">
              <Link className="nav-link" href="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink
                title="info@citymarinebrokers.com"
                className="link-inverse"
                href="mailto:info@citymarinebrokers.com"
              />
              <br />
              <NextLink href="tel:97165758800" title="+971 6 575 8800" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <HeaderRight
        cart={cart}
        info={info}
        button={button}
        search={search}
        social={social}
        language={language}
        navOtherClass={navOtherClass}
      />
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox ? (
        <div
          style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }}
        />
      ) : null}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <FancyHeader>{headerContent}</FancyHeader>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">
            {headerContent}
          </div>
        )}
      </nav>

      {/* ============= signin modal ============= */}
      <Signin />

      {/* ============= signup modal ============= */}
      <Signup />

      {/* ============= info sidebar ============= */}
      {info ? <Info /> : null}

      {/* ============= show search box ============= */}
      {search ? <Search /> : null}

      {/* ============= cart sidebar ============= */}
      {cart ? <MiniCart /> : null}
    </Fragment>
  );
}
