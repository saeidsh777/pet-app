import React from "react";
import {
  Apple,
  ArrowRight,
  Github,
  GlobeAmericas,
} from "react-bootstrap-icons";

import "./Card.css";
import Link from "next/link";

export default function Card({ bgColor, title1, title2, d, icon }) {
  return (
    <div className="d-inline-block">
      <div className="position-relative card-custom d-flex justify-content-center">
        <svg
          className="bg-card-1"
          xmlns="http://www.w3.org/2000/svg"
          width="309.2857111417329"
          height="336.0219772158291"
        >
          <rect
            id="backgroundrect"
            width="100%"
            height="100%"
            x="0"
            y="0"
            fill="transparent"
            stroke="none"
          ></rect>
          <g>
            <path
              fill="#F2F2F4"
              fillOpacity="1"
              stroke="none"
              strokeWidth="2"
              strokeDasharray="none"
              strokeLinejoin="round"
              strokeLinecap="butt"
              strokeDashoffset=""
              fillRule="nonzero"
              opacity="1"
              markerStart=""
              markerMid=""
              markerEnd=""
              d={d}
              id="svg_1"
              className=""
              transform="rotate(-4.6006340980529785 150.8597869873048,167.6643524169921) "
              filter=""
            ></path>
          </g>
        </svg>

        <svg
          className="bg-card-2"
          xmlns="http://www.w3.org/2000/svg"
          width="309.2857111417329"
          height="336.0219772158291"
        >
          <rect
            id="backgroundrect"
            width="100%"
            height="100%"
            x="0"
            y="0"
            fill="transparent"
            stroke="none"
          ></rect>
          <g>
            <path
              fill={bgColor}
              fillOpacity="1"
              stroke="none"
              strokeWidth="2"
              strokeDasharray="none"
              strokeLinejoin="round"
              strokeLinecap="butt"
              strokeDashoffset=""
              fillRule="nonzero"
              opacity="1"
              markerStart=""
              markerMid=""
              markerEnd=""
              d={d}
              id="svg_1"
              className=""
              transform="rotate(-4.6006340980529785 150.8597869873048,167.6643524169921) "
              filter=""
            ></path>
          </g>
        </svg>

        <div className="card-body-custom">
          <h3 className="white-t mb-0 text-center">{title1}</h3>
          <h3 className="white-t mb-0 text-center">{title2}</h3>
        </div>

        <div className="card-body-custom-1">
          <h3 className="white-t mb-0 text-center">{title1}</h3>
          <h3 className="white-t mb-0 text-center">{title2}</h3>
          <Link
            className="white-t mt-3 d-block text-center d-flex align-items-center gap-2 card-link"
            href="/"
          >
            VIEW MORE
            <ArrowRight className="fs-4" />
          </Link>
        </div>

        <div className="label-card shadow-sm">
          {icon === "apple" ? (
            <Apple />
          ) : icon === "github" ? (
            <Github />
          ) : (
            icon === "global" && <GlobeAmericas />
          )}
        </div>
      </div>
    </div>
  );
}
