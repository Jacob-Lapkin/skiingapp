import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { useLocation } from "react-router-dom";

function Navbar() {
  const curLoc = useLocation()
    return (
        <div className="d-flex shadow justify-content-start gap-4 flex-column align-items-center navlog-wrapper">
          <div className="pt-2">
            <Link to="/home" className="nav-link text-white fw-bold">
              <i className={curLoc.pathname === "/home"?"fa fa-home fa-2x active nav-item p-2":"fa fa-home fa-2x nav-item p-2"} aria-hidden="true"></i>
            </Link>
          </div>
          <div >
            <Link to="" className="text-secondary fw-bold">
              <i class="fas fa-chart-pie fa-2x nav-item p-2"></i>
            </Link>
          </div>
          <div >
            <Link to="" className="text-secondary fw-bold">
            <i class="fa-solid fa-graduation-cap fa-2x nav-item p-2"></i>
            </Link>
          </div>
          <div >
            <Link to="" className="text-secondary fw-bold">
              <i class="fas fa-toolbox fa-2x nav-item p-2"></i>
            </Link>
          </div>
          <div>
            <Link to="" className="text-secondary fw-bold">
              <i class="fa fa-user fa-2x nav-item p-2" aria-hidden="true"></i>
            </Link>
          </div>
      </div>
    )
}

export default Navbar