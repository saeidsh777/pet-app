import { Alarm, Envelope } from "react-bootstrap-icons";

import "./LocMap.css";
import Image from "next/image";

export default function LocMap() {
  return (
    <section className="loc-map mt-5 position-relative">
      <div className="loc-box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.702843921836!2d51.426947865918144!3d35.80722776414365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0607d043df59%3A0x6141b721cd3a3698!2sTehran%20Province%2C%20Tajrish%2C%20Tajrish%20Square%2C%20Iran!5e0!3m2!1sen!2s!4v1703588327661!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="d-flex justify-content-end mt-2 mt-lg-0">
        <div className="our-office">
          <div className="office-animal-img-box">
            <Image
              className="office-animal-img"
              src="/images/img-8.jpg"
              alt="animal"
              width={500}
              height={500}
            />
          </div>
          <div className="px-4">
            <p className="mt-4">MAIN OFFICE</p>
            <h3>Our office</h3>
            <small>
              Interactively coordinate proactive e-commerce via process-centric
              “outside the box“ thinking.
            </small>
            <h5 className="orng-t d-flex gap-2 align-items-center">
              <Alarm /> + 98 912 675 84 09
            </h5>
            <h5 className="orng-t d-flex gap-2 align-items-center">
              <Envelope /> + 98 912 675 84 09
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
