import React from "react";
import "./Equipment.css";

function Equipmenttemplate(props) {
  return (
    <>
      <div className="equipment-container">
      <img className="image-container" src={props.image} alt='equipment'/>
        <div className="name">
          <p>{props.name}</p>
        </div>
      </div>
    </>
  );
}

export default Equipmenttemplate;
