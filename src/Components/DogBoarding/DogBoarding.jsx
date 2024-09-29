"use client"
import Accordion from "react-bootstrap/Accordion";
import "./DogBoarding.css";
import Image from "next/image";

export default function DogBoarding() {
  return (
    <section className="py-6 dog-boarding overflow-x-hidden">
      <div className="row align-content-center align-items-center">
        <div className="col-12 col-lg-7 pe-0">
          <Image
            width={500}
            height={500}
            className="img-fit"
            src="/images/img-2.png"
            alt="animal"
          />
        </div>

        <div className="col-12 col-lg-5 text-center text-lg-start mt-5 mt-lg-0">
          <h2>
            Dog <span className="orng-t">Boarding</span>
          </h2>
          <div className="accordion-boarding mt-5">
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
      </div>
    </section>
  );
}
