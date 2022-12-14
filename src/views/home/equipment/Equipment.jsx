import React from "react";
import Equipmenttemplate from "./Equiptemplate";
import goggles from "./../../../assets/goggles.jpg";
import boots from "./../../../assets/boots.jpg";
import { Link } from "react-router-dom";


function Equipment() {
  return (
    <>
      <div className="mt-5">
        <div className="d-flex flex-row justify-content-start gap-3">
    <div>
    <p className="fw-bold">My Equipment</p>
    </div>
    <div>
        <Link to=""><i className="fa-solid fa-arrow-right"></i></Link>
    </div>
        </div>
        <div className="d-flex flex-row flex-wrap ps-3 pe-3 pb-3 pt-3 gap-4 justify-content-start">
        <div className="">
        <Equipmenttemplate image={goggles} name="Smith Optic" />
        </div>
        <div className="">
        <Equipmenttemplate image={boots} name="Dalbello boots" />
        </div>
        <div className="">
        <Equipmenttemplate image={goggles} name="Smith Optic" />
        </div>
        <div className="">
        <Equipmenttemplate image={goggles} name="Smith Optic" />
        </div>
        <div className="">
        <Equipmenttemplate image={goggles} name="Smith Optic" />
        </div>
        <div className="">
        <Equipmenttemplate image={goggles} name="Smith Optic" />
        </div>
        </div>
      </div>
    </>
  );
}

export default Equipment;
