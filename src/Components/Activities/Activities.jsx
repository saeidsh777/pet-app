import React from "react";
import { Github, GlobeAmericas, Apple } from "react-bootstrap-icons";

import "./Activities.css";
import Link from "next/link";
import Image from "next/image";

export default function Activities() {
  return (
    <section className="activities overflow-x-hidden">
      <div className="py-6">
        <div className="row align-content-center align-items-center">
          <div className="col-12 col-lg-5 text-center text-lg-start mt-5 mt-lg-0 ps-c">
            <h2 className="text-center text-lg-start mb-3 px-3 px-md-0">
              Activities and <span className="orng-t">Exercise</span>
            </h2>

            <p className="fs-1-2r text-center text-lg-start mb-3 px-3 px-md-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              dui non diam eleifend egestas id a ligula.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <div className="d-flex flex-column flex-sm-row gap-4 align-items-baseline align-items-sm-center justify-content-center justify-content-lg-start mb-3">
                <h3 className="d-flex align-items-center gap-2">
                  <Apple />
                  EAT
                </h3>
                <h3 className="d-flex align-items-center gap-2">
                  <GlobeAmericas />
                  PLAY
                </h3>
                <h3 className="d-flex align-items-center gap-2">
                  <Github />
                  BRUSH
                </h3>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row gap-3 align-items-center justify-content-center justify-content-lg-start">
              <Link className="btn-c1 d-block" href="/">
                BOOK NEW
              </Link>
              <Link className="btn-c2 d-block" href="/">
                BOOK NEW
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-7 pe-0">
            <Image
              width={500}
              height={500}
              className="img-fit"
              src="/images/img-3.png"
              alt="animal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
