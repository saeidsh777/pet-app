"use client"
import Accordion from "react-bootstrap/Accordion";

import "./CatBoarding.css";

export default function CatBoarding() {
  return (
    <section className="cat-boarding overflow-x-hidden">
      <div className="row align-content-center align-items-center">
        <div className="col-12 col-lg-5 text-center text-lg-start mt-5 mt-lg-0 ps-c order-1 order-lg-0">
          <h2 className="px-3 px-md-0">
            Cat <span className="orng-t">Boarding</span>
          </h2>
          <div className="px-5 px-lg-0 mt-5">
            <Accordion className="mb-2">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="cheack-label me-2">
                    <span className="white-t fs-6">✓</span>
                  </div>
                  <h6 className="mb-0">WELL-TRAINED STAFF</h6>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className="cheack-label me-2">
                    <span className="white-t fs-6">✓</span>
                  </div>
                  <h6 className="mb-0">METICULOUS ABOUT MEDS</h6>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div className="cheack-label me-2">
                    <span className="white-t fs-6">✓</span>
                  </div>
                  <h6 className="mb-0">WHAT TO BRING</h6>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="col-12 col-lg-7 pe-0 order-0 order-lg-1">
          <img className="img-fit" src="/images/img-6.png" alt="animal" />
        </div>
      </div>
    </section>
  );
}
