import React from "react";
import { useParams } from "react-router-dom";
export default function AboutUs(){
    let {data}=useParams();
    return(
        <>
        <div className="container">
        <h3>this is about us section 9800000000</h3>
        <p>email:anil@gmail.com</p>
        <h2>welcome {data}.</h2>
        </div>
        </>
    )
}