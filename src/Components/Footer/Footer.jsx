import {
  Clock,
  Github,
  Key,
  Linkedin,
  PinMap,
  Telegram,
} from "react-bootstrap-icons";

import "./Footer.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="footer" id="footer">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="d-flex flex-column flex-md-row align-items-center gap-2 mb-4 justify-content-center justify-content-md-start">
                <Image
                  width={500}
                  height={500}
                  src="/images/header-logo.png"
                  alt="logo"
                  className="image"
                />
                <h3 className="mb-0">Pets</h3>
              </div>

              <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
                <Link href="/" className="social-media-box">
                  <Linkedin className="social-media" />
                </Link>
                <Link href="/" className="social-media-box">
                  <Telegram className="social-media" />
                </Link>
                <Link href="/" className="social-media-box">
                  <Github className="social-media" />
                </Link>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mt-5 mt-md-0">
              <h3 className="orng-t mb-4 text-center text-md-start">About</h3>

              <p className="mb-1 d-flex gap-2 align-items-center justify-content-center justify-content-md-start">
                <Clock />
                PO BOX Collins Street West
              </p>
              <p className="mb-1 d-flex gap-2 align-items-center justify-content-center justify-content-md-start">
                <Key />
                Mon - Sun: 8AM - 8PM
              </p>
              <p className="mb-1 d-flex gap-2 align-items-center justify-content-center justify-content-md-start">
                <PinMap />
                +2342 5446 67
              </p>
            </div>

            <div className="col-md-6 col-lg-3 mt-5 mt-lg-0">
              <h3 className="orng-t mb-4 text-center text-md-start">
                Quick Links
              </h3>

              <p className="mb-1 text-center text-md-start">
                Dog Boarding Services
              </p>

              <p className="mb-1 text-center text-md-start">
                Cat Boarding Services
              </p>

              <p className="mb-1 text-center text-md-start">
                Spa and Grooming Services
              </p>
            </div>

            <div className="col-md-6 col-lg-3 mt-5 mt-lg-0">
              <form>
                <h3 className="orng-t mb-4 text-center text-md-start">
                  Newsletter
                </h3>

                <input
                  placeholder="Your email"
                  type="email"
                  className="input-c text-align-center"
                />

                <button className="btn-c2 w-100 mt-3">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>

        <div className="copy-rigth orng-b p-2 d-flex justify-content-center align-items-center">
          <h4 className="white-t word-break m-0">
            Developer: <span className="fw-bold">SAEID SHOJAEI</span> - All
            Rights Reserved
          </h4>
        </div>
      </section>
    </>
  );
}
