import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {

    return (
        <div className="d-flex justify-content-start gap-5 flex-column align-items-center navlog-wrapper">
          <div className="pt-2">
            <Link to="/home" className="nav-link text-white fw-bold">
              <i className="fa fa-home fa-2x active nav-item p-2" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="pt-2">
            <Link to="" className="text-white fw-bold">
              <i class="fas fa-chart-pie fa-2x nav-item p-2"></i>
            </Link>
          </div>
          <div className="pt-2">
            <Link to="" className="text-white fw-bold">
            <i class="fa-solid fa-graduation-cap fa-2x nav-item p-2"></i>
            </Link>
          </div>
          <div className="pt-2">
            <Link to="" className="text-white fw-bold">
              <i class="fas fa-toolbox fa-2x nav-item p-2"></i>
            </Link>
          </div>
          <div className="pt-2">
            <Link to="" className="text-white fw-bold">
              <i class="fa fa-user fa-2x nav-item p-2" aria-hidden="true"></i>
            </Link>
          </div>
      </div>
    )
}

export default Navbar