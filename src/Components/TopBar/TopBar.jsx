"use client";
import { useEffect, useRef } from "react";
import "./TopBar.css";
import Link from "next/link";
import Image from "next/image";
import { List } from "react-bootstrap-icons";

export default function TopBar() {
  const topBarElm = useRef();
  const menuExpandElm = useRef();
  const headerLogoBox = useRef();

  useEffect(() => {
    let addShadowTopBar = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        topBarElm.current.classList.add("shadow-sm");
        topBarElm.current.classList.add("top-bar-scroll");
        headerLogoBox.current.classList.add("header-logo-box-scroll");
      } else {
        topBarElm.current.classList.remove("shadow-sm");
        topBarElm.current.classList.remove("top-bar-scroll");
        headerLogoBox.current.classList.remove("header-logo-box-scroll");
      }
    });

    return () => {
      removeEventListener("scroll", addShadowTopBar);
    };
  }, []);

  function showMenu() {
    menuExpandElm.current.classList.toggle("show-menu-expand");
  }

  return (
    <div ref={topBarElm} className="top-bar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="left-header">
              <div className="d-flex align-items-center gap-2">
                <Link
                  href={"#body"}
                  className="header-logo-box"
                  ref={headerLogoBox}
                >
                  <Image
                    width={500}
                    height={500}
                    className="img-fit"
                    src="/images/header-logo.png"
                    alt="logo"
                  />
                </Link>
                <h3 className="mb-0">
                  <Link href={"#body"}>Pets</Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="right-header d-flex justify-content-end align-items-center">
              <nav className="d-none d-lg-block">
                <ul className="d-flex align-items-center justify-content-end gap-5 mb-0">
                  <li>
                    <Link className="link-item-menu" href={"#body"}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="link-item-menu" href="#footer">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="btn-c1">
                      LOGIN
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="menu-icon-box d-lg-none">
                <List className="menu-icon" onClick={showMenu} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={menuExpandElm} className="menu-expand d-lg-none shadow-sm">
        <nav className="p-3">
          <ul className="mb-0 p-0 d-flex flex-column justify-content-center gap-2">
            <li className="d-flex justify-content-center">
              <Link className="link-item-menu" href={"#body"}>
                Home
              </Link>
            </li>
            <li className="d-flex justify-content-center">
              <Link className="link-item-menu" href="#footer">
                Contact
              </Link>
            </li>
            <li className="d-flex justify-content-center">
              <Link href="/" className="btn-c1">
                LOGIN
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
