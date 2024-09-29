import "./WeStand.css";

export default function WeStand() {
  return (
    <section className="we-stand">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="mb-5 text-center text-md-start">
              WHAT WE STAND FOR
            </h3>
          </div>

          <div className="col-12 col-lg-6">
            <p className="fs-1-2r text-center text-md-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper neque dapibus ipsum semper, sit amet luctus turpis
              porttitor. Ut libero ante, varius quis ligula in, aliquet
              consectetur tortor. Proin aliquet neque nibh, pretium rutrum quam
              mattis a. Morbi vitae sodales metus. Pellentesque vel elit
              ullamcorper, pellentesque magna nec, dictum purus. Nullam
              scelerisque nisi eu lacus elementum, ac sodales nulla congue.
              Suspendisse eu lorem vitae odio imperdiet.
            </p>
          </div>

          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            <ul className="m-0 p-0">
              <li>
                <p className="d-flex gap-3 fs-1-2r align-items-center">
                  <span className="green-t">&#10003;</span>
                  Nulla ut tellus imperdiet, ultrices nulla eu, porttitor quam
                </p>
              </li>
              <li>
                <p className="d-flex gap-3 fs-1-2r align-items-center">
                  <span className="green-t">&#10003;</span>
                  Donec condimentum volutpat eget sodales velit faucibus
                </p>
              </li>
              <li>
                <p className="d-flex gap-3 fs-1-2r align-items-center">
                  <span className="green-t">&#10003;</span>
                  Mauris non neque sollicitudin porttitor pulvinar ipsum
                </p>
              </li>
              <li>
                <p className="d-flex gap-3 fs-1-2r align-items-center">
                  <span className="green-t">&#10003;</span>
                  Quisque mattis consequat odio suscipit vulputate
                </p>
              </li>
              <li>
                <p className="d-flex gap-3 fs-1-2r align-items-center">
                  <span className="green-t">&#10003;</span>
                  Morbi a tortor sodales, malesuada lectus sed mauris
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
