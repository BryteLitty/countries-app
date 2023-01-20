import React from "react";
import { NavLink } from "react-router-dom";
import { BsMicFill, BsGearFill} from "react-icons/bs";
import './Header.css';


const HomeHeader = () => {
    return (
        <header>
            <NavLink to="/" className="nav-links">
                <h3 className="to-back">
                    
                </h3>
            </NavLink>

            <h2>List of Countries and Their Flags</h2>

            <div className="nav-icons">
                <BsMicFill />
                <BsGearFill />
            </div>
        </header>
    )
}

export default HomeHeader;