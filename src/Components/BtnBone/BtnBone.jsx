import React from "react";

import "./BtnBone.css";
import Link from "next/link";

export default function BtnBone({ type, title }) {
  return (
    <>
      {type === "Link" && (
        <Link
          href="/"
          className="btn-bone d-flex align-items-center justify-content-center"
        >
          <span className="link-btn-bone">{title}</span>
        </Link>
      )}

      {type === "noLink" && (
        <div className="btn-bone d-flex align-items-center justify-content-center">
          <span className="link-btn-bone">{title}</span>
        </div>
      )}
    </>
  );
}
