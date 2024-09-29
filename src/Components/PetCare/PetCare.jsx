import React from "react";
import { House } from "react-bootstrap-icons";

import "./PetCare.css";
import Link from "next/link";

export default function PetCare() {
  return (
    <section className="pet-care mb-5">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-12 col-lg-3 mt-3 mt-lg-0">
            <h5 className="orng-t mb-3 text-center text-md-start">
              BRING YOUR PET
            </h5>
            <h2 className="mb-3 text-center text-md-start">The Best Choice</h2>
            <p className="fs-1-2r mb-3 text-center text-md-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              molestias?
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <Link className="btn-c2 d-block" href="/">
                GET QUOTE
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-3 mt-3 mt-lg-0">
            <div className="pet-care-card d-flex flex-column h-100 p-5 p-lg-3 p-xl-5">
              <h5 className="orng-t mb-3">PET CARE</h5>
              <h2 className="mb-3 text-nowrap">1 Day</h2>
              <h2>
                <House />
              </h2>
              <ul className="m-0 p-0 mt-4 flex">
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Double room</p>
                  <span className="green-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Socialise</p>
                  <span className="green-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Brush</p>
                  <span className="green-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Pet TV</p>
                  <span className="orng-t">&#x2715;</span>
                </li>
              </ul>
              <div className="mt-5 care-price-box">
                <span className="align-top fw-bold fs-2">$</span>
                <span className="care-price">50</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 mt-3 mt-lg-0">
            <div className="pet-care-card d-flex flex-column orng-b h-100 p-5 p-lg-3 p-xl-5 ">
              <h5 className="white-t mb-3">PET CARE</h5>
              <h2 className="white-t mb-3 text-nowrap">10 Day</h2>
              <h2>
                <House />
              </h2>
              <ul className="m-0 p-0 mt-4 flex">
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0 white-t">Double room</p>
                  <span className="white-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0 white-t">Socialise</p>
                  <span className="white-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0 white-t">Brush</p>
                  <span className="white-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0 white-t">Pet TV</p>
                  <span className="white-t">&#x2715;</span>
                </li>
              </ul>
              <div className="mt-5 care-price-box white-t">
                <span className="align-top fw-bold fs-2">$</span>
                <span className="care-price">350</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 mt-3 mt-lg-0">
            <div className="pet-care-card d-flex flex-column h-100 p-5 p-lg-3 p-xl-5">
              <h5 className="orng-t mb-3">PET CARE</h5>
              <h2 className="mb-3 text-nowrap">20 Day</h2>
              <h2>
                <House />
              </h2>
              <ul className="m-0 p-0 mt-4 flex">
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Double room</p>
                  <span className="green-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Socialise</p>
                  <span className="green-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Brush</p>
                  <span className="green-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Pet TV</p>
                  <span className="orng-t">&#x2715;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Pet TV</p>
                  <span className="orng-t">&#x2715;</span>
                </li>
              </ul>
              <div className="mt-5 care-price-box">
                <span className="align-top fw-bold fs-2">$</span>
                <span className="care-price">550</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
