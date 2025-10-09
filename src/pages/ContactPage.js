import React from "react";
import mailImage from "../assets/contact/mail.png"

export default function ContactPage() {
  return (
    <div className="container text-center my-5">
      {/* Page Title */}
      <h1 className="mb-4 fw-bold">Contact</h1>

      {/* Contact info section */}
      <div className="mb-5">
        <p className="mb-1">Daniel: dochoamorales@horizon.csueastbay.edu</p>
        <p className="mb-1">Timothy: torlov@horizon.csueastbay.edu</p>
        <p className="mb-1">Vicente Chavez: vchavez@horizon.csueastbay.edu</p>
        <p className="mb-1">Rohith: rpaduru2@horizon.csueastbay.edu</p>
      </div>

      {/* Image placeholder section */}
      <div className="d-flex justify-content-center">
          <img
            src={mailImage}
            alt="Contact illustration"
            className="img-fluid rounded"
            />
      </div>
    </div>
  );
}

