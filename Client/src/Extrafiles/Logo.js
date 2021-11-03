import React from "react";
import "../styles/comingSoon/logo.css";

export const  Logo = ({alt, src}) => {
    return (
        <div className="logo-container">
        <img className="logo" alt={alt} src={src}></img>
    </div>
    )
    
}

