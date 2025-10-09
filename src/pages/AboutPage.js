import React from "react";
import danny from "../assets/about/danny.png";
import tim from "../assets/about/tim.png";
import vinny from "../assets/about/vinny.png";
import rohith from "../assets/about/rohith.png";

export default function AboutPage() {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">About the Creators</h1>

      <div className="row justify-content-center">
        <div className="col-12 col-md-3 mb-4">
          <div className="card bg-dark text-light border border-danger p-3">
            <img
              src={danny}
              alt="Creator 1"
              className="card-img-top rounded"
              style={{ objectFit: "cover", height: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                Daniel
              </h5>
              <p className="card-text">
                Hi, my name is Daniel. I designed the front-end of the website and assisted in comming up with the idea.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 mb-4">
          <div className="card bg-dark text-light border border-danger p-3">
            <img
              src={tim}
              alt="Creator 2"
              className="card-img-top rounded"
              style={{ objectFit: "cover", height: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                Tim
              </h5>
              <p className="card-text">
                Hi, I'm Timothy. I designed the website and helped come up with the idea.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 mb-4">
          <div className="card bg-dark text-light border border-danger p-3">
            <img
              src={vinny}
              alt="Creator 3"
              className="card-img-top rounded"
              style={{ objectFit: "cover", height: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                Vicente
              </h5>
              <p className="card-text">
                Hi, I'm Vicente Chavez. I came up with the idea and handled the backend.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 mb-4">
          <div className="card bg-dark text-light border border-danger p-3">
            <img
              src={rohith}
              alt="Creator 4"
              className="card-img-top rounded"
              style={{ objectFit: "cover", height: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                  Rohith
              </h5>
              <p className="card-text">
                  Hi, I'm Rohith. I helped deploy the website to S3.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

