import React from "react";
import { useParams } from "react-router-dom";
export default function Params(){
    let {data}=useParams();
    return(
        <>
        <div className="container">
        <h3>welcome mr./mrs. {data}.</h3>
        </div>
        </>
    )
}