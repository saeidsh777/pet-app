import React from 'react'
import BtnBone from "@/Components/BtnBone/BtnBone";
import { Github } from "react-bootstrap-icons";
import Image from "next/image";
import './Banner.css'

export default function Banner() {
  return (
    <div className="home-header-banner overflow-x-hidden">
      <div className="row align-content-center align-items-center">
        <div className="col-12 col-lg-5 text-center text-lg-start mt-5 mt-lg-0 ps-c">
          <h1 className="px-3 px-md-0">Pets Boarding Services</h1>

          <div className="d-flex align-items-center my-4 justify-content-center">
            <div className="px-3">
              <h3 className="px-3 px-md-0">Boarding Any Pets</h3>
              <p className="mb-0 gray-t px-3 px-md-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                dui non diam.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <BtnBone type="Link" title="BOOK NOW" />
          </div>
        </div>

        <div className="col-12 col-lg-7 pe-0">
          <Image
            width={500}
            height={500}
            className="img-fit"
            src="/images/img-1.png"
            alt="header-banner"
          />
        </div>
      </div>
    </div>
  );
}
