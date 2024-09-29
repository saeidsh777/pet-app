import React from "react";
import "./Animals.css";
export default function Animals() {
  return (
    <section className="animals">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2 className="mb-5 text-center text-md-start">Dogs</h2>
            <ul className="m-0 p-0">
              <li>
                <h5 className="d-flex gap-3 align-items-center">
                  <span className="green-t fs-2">&#10003;</span>
                  Sed cursus ex eu justo consectetur, odio convallis
                </h5>
              </li>
              <li>
                <h5 className="d-flex gap-3 align-items-center">
                  <span className="green-t fs-2">&#10003;</span>
                  Integer ullamcorper elementum felis in bibendum
                </h5>
              </li>
              <li>
                <h5 className="d-flex gap-3 align-items-center">
                  <span className="green-t fs-2">&#10003;</span>
                  Aenean ultrices tortor at est placerat, tristique interdum
                </h5>
              </li>
              <li>
                <h5 className="d-flex gap-3 align-items-center">
                  <span className="green-t fs-2">&#10003;</span>
                  Nunc vitae sem pretium, malesuada ipsum sed ligula
                </h5>
              </li>
              <li>
                <h5 className="d-flex gap-3 align-items-center">
                  <span className="green-t fs-2">&#10003;</span>
                  Fusce ut nisi sodales, tristique turpis id, vestibulum dolor
                </h5>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            <h2 className="mb-5 orng-t text-center text-md-start">Cats</h2>
            <ul className="m-0 p-0">
              <li>
                <h5 className="d-flex gap-3 align-items-center">
                  <span className="green-t fs-2">&#10003;</span>
                  Nulla ut tellus imperdiet, ultrices nulla eu, porttitor quam
                </h5>
              </li>
              <li>
                <h5 className="d-flex gap-3 align-items-center">
                  <span className="green-t fs-2">&#10003;</span>
                  Donec condimentum volutpat eget sodales velit faucibus
                </h5>
              </li>
              <li>
                <h5 className="d-flex gap-3 align-items-center">
                  <span className="green-t fs-2">&#10003;</span>
                  Mauris non neque sollicitudin porttitor pulvinar ipsum
                </h5>
              </li>
              <li>
                <h5 className="d-flex gap-3 align-items-center">
                  <span className="green-t fs-2">&#10003;</span>
                  Quisque mattis consequat odio suscipit vulputate
                </h5>
              </li>
              <li>
                <h5 className="d-flex gap-3 align-items-center">
                  <span className="green-t fs-2">&#10003;</span>
                  Morbi a tortor sodales, malesuada lectus sed mauris
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
