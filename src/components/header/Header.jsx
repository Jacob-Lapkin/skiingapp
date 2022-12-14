import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header-container shadow p-3 d-flex flex-row justify-content-start gap-5 align-items-center">
        <div className="d-flex flex-row gap-4">
          <i className="fa-solid fa-mountain-sun fa-3x text-white"></i>
          <p className="h1 text-white fw-bold">SKI NOW</p>
        </div>
        <div>
          <input className="searchbar" placeholder="Search User" />
        </div>
      </div>
    </>
  );
}

export default Header;
