import React from "react";
import "./Landing.css";
import "./../../App.css";

function Landing() {
  return (
    <>
      <div className="wrapper-cont">
        <div className="text-center">
        <h1 className="fw-bold title">SKI NOW</h1>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6 col-sm-12 d-flex justify-content-center">
            <div className="p-5 image-cont">
            <img className="landing-image" alt="skiing" src={'https://media.istockphoto.com/id/1125105478/vector/red-ski-equipment-at-the-ski-resort.jpg?s=612x612&w=0&k=20&c=akZ3AqbTQvbf09L2et9LQcf939vW4oPGpRZTZVKZNZc='}/>
            </div>
          </div>

          <div className="col-md-12 col-lg-6 col-sm-12 d-flex justify-content-center">
            <div className="p-5 header-cont">
              <div>
                <h1 className="header fw-bold">COMING SOON!</h1>
              </div>
              <div>
                <p className="h5 fw-bold">THIS PAGE IS UNDER CONSTRUCTION</p>
              </div>
              <div className="">
                <p className="text-secondary">Feel free to reach out to get login access to the beta. We anticipate the platform to be available
                to all users in 2023.</p>
              </div>
              <div className="mt-3">
                <button className="button-primary button-long">Beta Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
