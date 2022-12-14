import React from "react";
import './Buddies.css'

function Buddiestemplate(props) {
    return (
        <>
        <div className="">
            <div className="bg-white p-3 text-center user-container">
                <div className="user-pic">
                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                </div>
                <div className="mt-3">
                    <p className="h5">{props.name}</p>
                </div>
                <div>
                    <p className="text-secondary">{props.home}</p>
                </div>

            </div>
        </div>
        </>
    )
}

export default Buddiestemplate