import React from "react";
import Equipmenttemplate from "./Equiptemplate";
import goggles from "./../../../assets/goggles.jpg";
import boots from "./../../../assets/boots.jpg";


function Equipment() {
  return (
    <>
      <div className="mt-5">
        <div className="d-flex flex-row justify-content-start gap-3">
    <div>
    <p className="fw-bold">My Equipment</p>
    </div>
    <div>
        <a><i className="fa-solid fa-arrow-right"></i></a>
    </div>
        </div>
        <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-4 mt-3">
        <Equipmenttemplate image={goggles} name="Smith Optic" />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 mt-3">
        <Equipmenttemplate image={boots} name="Dalbello boots" />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 mt-3">
        <Equipmenttemplate image={goggles} name="Smith Optic" />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 mt-3">
        <Equipmenttemplate image={goggles} name="Smith Optic" />
        </div>
        </div>
      </div>
    </>
  );
}

export default Equipment;
