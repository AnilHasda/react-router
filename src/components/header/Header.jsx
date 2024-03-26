import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
    return (
        <>
            <div className="navigation flex align-center justify-between">
                <div className="nav-logo"></div>
                <ul className="flex gap-20">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/contactUs">ContactUs</NavLink></li>
                    <li><NavLink to="/aboutUs">AboutUs</NavLink></li>
                    <li><NavLink to="/more">More</NavLink></li>
                </ul>
            </div>
        </>
    )
}