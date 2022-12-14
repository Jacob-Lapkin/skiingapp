import React from "react";
import './Welcome.css'

function Welcome() {
    return (
        <>
        <div className="container">
        <div className="widget-container">
        </div>
        <div className="infront">
            <p className="h2 fw-bold">Hello, Jacob</p>
            <p className="mt-2">Welcome back! The ski conditions at home are waiting for you</p>
            <p className="h3"><span> <i class="fa-solid fa-temperature-three-quarters"></i> </span>25 F in Aspen, CO</p>
        </div>
        </div>
        </>
    )
}

export default Welcome