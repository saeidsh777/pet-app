"use client"
import { Cloud, Github, GlobeAmericas, House } from "react-bootstrap-icons";
import CountUp from "react-countup";
import ContactUsForm from "../ContactUsForm/ContactUsForm";

import "./ContactUs.css";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="contact-us overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="img-contact-box">
              <Image width={500} height={500} className="img-fit" src="/images/img-8.jpg" alt="animal" />
            </div>
          </div>
          <div className="col-12 col-lg-6 my-5 mt-lg-0">
            <ContactUsForm />
          </div>

          <div className="col-12 mt-5">
            <h2 className="text-center word-break">Our Achievements</h2>

            <div className="row mt-5">
              <div className="col-6 col-lg-3">
                <div className="d-flex flex-column align-items-center justify-content-center justify-content-lg-start">
                  <p>STARTED</p>
                  <div className="d-flex flex-column align-items-center flex-md-row gap-3">
                    <House className="orng-t fs-3-6r" />
                    <h2 className="mb-0">
                      <CountUp
                        end={213}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      />
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="d-flex flex-column align-items-center justify-content-center justify-content-lg-start">
                  <p>PETS</p>
                  <div className="d-flex flex-column align-items-center flex-md-row gap-3">
                    <Github className="orng-t fs-3-6r" />
                    <h2 className="mb-0">
                      <CountUp
                        end={843}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      />
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 mt-5 mt-lg-0">
                <div className="d-flex flex-column align-items-center justify-content-center justify-content-lg-start">
                  <p>PLAY DAYS</p>
                  <div className="d-flex flex-column align-items-center flex-md-row gap-3">
                    <GlobeAmericas className="orng-t fs-3-6r" />
                    <h2 className="mb-0">
                      <CountUp
                        end={639}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      />
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 mt-5 mt-lg-0">
                <div className="d-flex flex-column align-items-center justify-content-center justify-content-lg-start">
                  <p>BATHS</p>
                  <div className="d-flex flex-column align-items-center flex-md-row gap-3">
                    <Cloud className="orng-t fs-3-6r" />
                    <h2 className="mb-0">
                      <CountUp
                        end={321}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
