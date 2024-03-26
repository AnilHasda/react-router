import React, { useEffect, useState } from "react";
export default function Github() {
    let [image,setImage]=useState("");
    let[followers,setFollowers]=useState("")
    useEffect(() => {
       (async ()=>{
        let initial = await fetch("https://api.github.com/users/AnilHasda");
        let data = initial.json();
        let final = await data;
        setImage(final.avatar_url);
        setFollowers(final.followers);
        console.log(final)
       })();
    }, [])
    return (
        <>
            <div className="container">
                <h1>github section</h1>
                <div className="github">
                    <h2 className="pb-20">followers:{followers}</h2>
                <img src={image} alt="avatar-image"/>

                </div>
            </div>
        </>
    )
}