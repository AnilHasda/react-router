import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
    return (
        <>
            <div className="navigation flex align-center justify-between">
                <div className="nav-logo"></div>
                <ul className="flex gap-20">
                    <li><NavLink to="/" style={({isActive})=>({color:isActive?"#fff":"black"})}>Home</NavLink></li>
                    <li><NavLink to="/contactUs" style={({isActive})=>({color:isActive?"#fff":"black"})}>ContactUs</NavLink></li>
                    <li><NavLink to="/aboutUs" style={({isActive})=>({color:isActive?"#fff":"black"})}>AboutUs</NavLink></li>
                    <li><NavLink to="/github" style={({isActive})=>({color:isActive?"#fff":"black"})}>github</NavLink></li>
                    <li><NavLink to="/more" style={({isActive})=>({color:isActive?"#fff":"black"})}>More</NavLink></li>
                </ul>
            </div>
        </>
    )
}