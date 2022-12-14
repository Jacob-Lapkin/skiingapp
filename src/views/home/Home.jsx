import React from "react";
import Navbar from "../../components/navbar/Navbar";
import './Home.css'
import Welcome from "./welcome/Welcome";
import Equipment from "./equipment/Equipment";

function Home() {
  return (
    <>
    <Navbar/>
    <section className="main-container">
    <div className="row">
      <div className="col-md-7 col-lg-7 col-sm-12">
        <div className="row p-4">
        <Welcome/>
        </div>
        <div className="row">

        </div>
      </div>
      <div className="col-md-5 col-lg-5 col-sm-12 bg-light rounded">
        <Equipment/>

      </div>
    </div>
    </section>
    </>
  );
}

export default Home;
