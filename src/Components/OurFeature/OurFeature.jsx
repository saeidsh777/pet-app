import React from "react";
import Card from "../Card/Card";

import "./OurFeature.css";

export default function OurFeature() {
  return (
    <section className="our-Feature overflow-x-hidden">
      <div className="container">
        <div className="row">
          <h1 className="text-center">Our Features</h1>

          <div className="row mt-5 mx-0">
            <div className="d-flex justify-content-center col-12 col-lg-6 col-xl-4">
              <Card
                bgColor="#7aba59"
                title1="Pets"
                title2="Boarding"
                d="M12.94018937135995,167.8339367842981 C45.39609213191329,74.99004072503537 114.0034869014508,10.732177077026051 171.84437755680142,11.781618684882801 C229.68524100198806,12.831060292739558 256.7002265652424,72.7142506276199 272.1827010804898,104.66632999025076 C287.66518920081916,136.6184093528816 342.19907896082464,246.22742624641148 203.2184177990085,306.0457339450666 C64.2377294270283,365.8640552488038 -19.515740599357475,260.67786005372494 12.94018937135995,167.8339367842981 z"
                icon="github"
              />
            </div>
            <div className="d-flex justify-content-center col-12 col-lg-6 col-xl-4">
              <Card
                bgColor="#FFC449"
                title1="Healthy"
                title2="Meals"
                d="M16.23957,92.58139C48.69547,-0.26251 138.67438,5.55148 201.82815,29.62874C264.98193,53.70599 372.00784,201.60914 247.27728,284.01577C122.54672,366.4224 112.51907,285.07282 76.57894,235.77145C40.63881,186.47008 -16.21636,185.42531 16.23957,92.58139z"
                icon="apple"
              />
            </div>
            <div className="d-flex justify-content-center col-12 col-xl-4">
              <Card
                bgColor="#F66437"
                title1="Activity"
                title2="Exercise"
                d="M7.36264,184.55495C7.36264,65.42739 73.80818,33.47253 153.12638,33.47253C232.44458,33.47253 289.54946,75.86694 298.89012,197.19231C308.23078,318.51768 219.80721,227.94506 126.20331,280.69232C32.5994,333.43958 7.36264,303.68251 7.36264,184.55495z"
                icon="global"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
