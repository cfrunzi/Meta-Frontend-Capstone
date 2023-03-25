import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return (
    <div>
        <nav className="nav">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/booking" className="nav-item">Booking</Link>
        </nav>
    </div>);
}

export default Nav;