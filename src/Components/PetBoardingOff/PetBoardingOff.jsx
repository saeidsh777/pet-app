import Image from "next/image";
import BtnBone from "../BtnBone/BtnBone";

import "./PetBoardingOff.css";

export default function PetBoardingOff() {
  return (
    <section className="pet-boarding-off py-6 mt-5">
      <div className="container position-relative">
        <div className="pet-off pt-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-5">
            <div>
              <h2 className="white-t word-break">Pets Boarding</h2>
              <h2 className="text-center">40% OFF</h2>
            </div>

            <BtnBone type="Link" title="BOOK NEW" />
          </div>
        </div>
        <div className="pet-off-img-container">
          <Image
            width={500}
            height={500}
            className="pet-off-img mx-auto d-block"
            src="/images/img-7.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
