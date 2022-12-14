import React from "react";
import { Link } from "react-router-dom";
import Buddiestemplate from "./Buddiestemplate";

function Buddies() {
  return (
    <>
      <div className="mt-5">
        <div className="d-flex flex-row justify-content-start gap-3">
          <div>
            <p className="fw-bold">My Buddies</p>
          </div>
          <div>
            <Link to="">
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="d-flex flex-row flex-wrap ps-3 pe-3 pb-3 pt-3 gap-4 justify-content-start">
            <Buddiestemplate name="Ian" home='Crested Butte'/>
            <Buddiestemplate name="Logan" home='Aspen'/>
            <Buddiestemplate name="Julia" home='Big Bear'/>
        </div>
      </div>
    </>
  );
}

export default Buddies;
